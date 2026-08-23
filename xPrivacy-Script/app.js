/**
 * xPrivacy Video Script Planning Workspace - Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initComparisonSlider();
  initPromptStudio();
  initPerspectiveTabs();
  initQuickActions();
  initCurriculumModal();
});

/* ==========================================================================
   1. Navigation & Tab Switching System
   ========================================================================== */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const roadmapCards = document.querySelectorAll('.roadmap-card');

  function switchTab(targetTabId) {
    // Update nav state
    navItems.forEach(item => {
      if (item.dataset.tab === targetTabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update tab pane state
    tabPanes.forEach(pane => {
      if (pane.id === `pane-${targetTabId}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Update URL hash without jumping
    history.replaceState(null, null, `#${targetTabId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.dataset.tab;
      switchTab(target);
    });
  });

  roadmapCards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.dataset.targetTab;
      if (target) {
        switchTab(target);
      }
    });
  });

  // Handle URL Hash on initial load
  const currentHash = window.location.hash.replace('#', '');
  if (currentHash && document.getElementById(`pane-${currentHash}`)) {
    switchTab(currentHash);
  }
}

/* ==========================================================================
   2. Before & After Interactive Slider & Mode Switcher
   ========================================================================== */
function initComparisonSlider() {
  const container = document.getElementById('comparisonContainer');
  const afterWrapper = document.getElementById('afterWrapper');
  const sliderHandle = document.getElementById('sliderHandle');
  const modeButtons = document.querySelectorAll('.mode-btn');
  const simRawScene = document.getElementById('simRawScene');
  const simMaskedScene = document.getElementById('simMaskedScene');

  if (!container || !afterWrapper || !sliderHandle) return;

  let isDragging = false;

  function updateSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let offsetX = x - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    afterWrapper.style.width = `${percentage}%`;
    sliderHandle.style.left = `${percentage}%`;
  }

  // Mouse Events
  sliderHandle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  // Touch Events
  sliderHandle.addEventListener('touchstart', (e) => {
    isDragging = true;
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches[0]) return;
    updateSliderPosition(e.touches[0].clientX);
  });

  // Click on container to jump
  container.addEventListener('click', (e) => {
    updateSliderPosition(e.clientX);
  });

  // Mode Switcher Data
  const sceneModes = {
    cctv: {
      rawBoxes: `
        <div class="sim-overlay-info">
          <span class="tag-danger"><i class="fa-solid fa-triangle-exclamation"></i> 원본 노출: 얼굴 4명, 번호판 2건 식별 가능</span>
        </div>
        <div class="detect-box raw-face box-1"><span class="box-tag alert">FACE DETECTED</span></div>
        <div class="detect-box raw-face box-2"><span class="box-tag alert">FACE DETECTED</span></div>
        <div class="detect-box raw-plate box-3"><span class="box-tag alert">PLATE: 58가 4920</span></div>
        <div class="detect-box raw-face box-4"><span class="box-tag alert">FACE DETECTED</span></div>
      `,
      maskedBoxes: `
        <div class="sim-overlay-info">
          <span class="tag-success"><i class="fa-solid fa-shield-check"></i> xPrivacy 적용: AI 정밀 가명처리 완료</span>
        </div>
        <div class="detect-box masked-face box-1"><div class="blur-effect"></div><span class="box-tag success"><i class="fa-solid fa-lock"></i> PROTECTED</span></div>
        <div class="detect-box masked-face box-2"><div class="blur-effect"></div><span class="box-tag success"><i class="fa-solid fa-lock"></i> PROTECTED</span></div>
        <div class="detect-box masked-plate box-3"><div class="pixel-effect"></div><span class="box-tag success"><i class="fa-solid fa-lock"></i> PLATE MASKED</span></div>
        <div class="detect-box masked-face box-4"><div class="blur-effect"></div><span class="box-tag success"><i class="fa-solid fa-lock"></i> PROTECTED</span></div>
      `
    },
    traffic: {
      rawBoxes: `
        <div class="sim-overlay-info">
          <span class="tag-danger"><i class="fa-solid fa-triangle-exclamation"></i> 고속도로 주행: 실시간 차량 번호판 노출</span>
        </div>
        <div class="detect-box raw-plate" style="top: 45%; left: 30%; width: 120px; height: 50px;"><span class="box-tag alert">PLATE: 12호 9841</span></div>
        <div class="detect-box raw-plate" style="top: 55%; left: 60%; width: 130px; height: 55px;"><span class="box-tag alert">PLATE: 83다 3302</span></div>
      `,
      maskedBoxes: `
        <div class="sim-overlay-info">
          <span class="tag-success"><i class="fa-solid fa-shield-check"></i> xPrivacy 자율주행 데이터셋: 번호판 자동 블러링</span>
        </div>
        <div class="detect-box masked-plate" style="top: 45%; left: 30%; width: 120px; height: 50px;"><div class="pixel-effect"></div><span class="box-tag success">MASKED</span></div>
        <div class="detect-box masked-plate" style="top: 55%; left: 60%; width: 130px; height: 55px;"><div class="pixel-effect"></div><span class="box-tag success">MASKED</span></div>
      `
    },
    retail: {
      rawBoxes: `
        <div class="sim-overlay-info">
          <span class="tag-danger"><i class="fa-solid fa-triangle-exclamation"></i> 매장 방문 고객 얼굴 노출 위험</span>
        </div>
        <div class="detect-box raw-face" style="top: 30%; left: 20%; width: 70px; height: 80px;"><span class="box-tag alert">FACE #01</span></div>
        <div class="detect-box raw-face" style="top: 32%; left: 50%; width: 75px; height: 85px;"><span class="box-tag alert">FACE #02</span></div>
        <div class="detect-box raw-face" style="top: 28%; left: 75%; width: 70px; height: 80px;"><span class="box-tag alert">FACE #03</span></div>
      `,
      maskedBoxes: `
        <div class="sim-overlay-info">
          <span class="tag-success"><i class="fa-solid fa-shield-check"></i> xPrivacy 매장 분석: 방문객 얼굴 프라이버시 안심 마스킹</span>
        </div>
        <div class="detect-box masked-face" style="top: 30%; left: 20%; width: 70px; height: 80px;"><div class="blur-effect"></div><span class="box-tag success">SAFE</span></div>
        <div class="detect-box masked-face" style="top: 32%; left: 50%; width: 75px; height: 85px;"><div class="blur-effect"></div><span class="box-tag success">SAFE</span></div>
        <div class="detect-box masked-face" style="top: 28%; left: 75%; width: 70px; height: 80px;"><div class="blur-effect"></div><span class="box-tag success">SAFE</span></div>
      `
    }
  };

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      if (sceneModes[mode]) {
        simRawScene.innerHTML = sceneModes[mode].rawBoxes;
        simMaskedScene.innerHTML = sceneModes[mode].maskedBoxes;
      }
    });
  });
}

/* ==========================================================================
   3. Interactive 5-Step Cognitive Prompt Studio
   ========================================================================== */
function initPromptStudio() {
  const chipGroups = document.querySelectorAll('.chip-group');
  const codeOutput = document.getElementById('promptCodeOutput');
  const btnCopy = document.getElementById('btnCopyPrompt');

  const promptState = {
    endState: '"이 솔루션이면 어떤 영상도 100% 안전하다"는 절대적 신뢰',
    target: '공공·지자체 관제사 : 수작업 야근 고통 및 영상 반출 시 법적 책임 공포',
    value: '수작업 인건비 90% 절감 & 법적 과징금 리스크 제로화',
    contrast: '붉은색 경고 노출 박스(위기) ➔ 에메랄드 스캔 쉴드(안심)의 극적 반전',
    cta: '"자사 영상 샘플 1개로 즉시 3초 무료 비식별화 테스트"'
  };

  function generatePrompt() {
    const template = `[역할 정의]
당신은 본질을 꿰뚫는 사고력으로 브랜드의 운명을 바꾸는 최고 수준의 크리에이티브 디렉터이자 수석 시나리오 작가입니다.

[제품 및 핵심 기술]
- 솔루션명: xPrivacy (엑스프라이버시)
- 핵심 역량: 딥러닝 비전 AI 기반 실시간 얼굴·차량번호 자동 비식별화(블러링/가명처리) 엔진
- 독보적 강점: 0.01초 실시간 처리, 99.8% 초정밀 트래킹 검출률, 개인정보보호법 100% 컴플라이언스 준수

[5단계 핵심 생각 체계 기반 기획 파라미터]
1. [최종 목표 / End-State]: 영상 시청 후 도달해야 할 최종 상태 ➔ ${promptState.endState}
2. [고객의 고통 / The Void]: 주인공(타겟)과 해결해야 할 근본 문제 ➔ ${promptState.target}
3. [고객 가치 / Value]: 기술 스펙을 번역한 핵심 실질 혜택 ➔ ${promptState.value}
4. [시각적 대비 / Contrast]: 시청자 시선을 끌 긴장과 안도의 시각적 대비 ➔ ${promptState.contrast}
5. [행동 유도 / Action]: 영상 종료 후 망설임 없는 첫 행동(CTA) ➔ ${promptState.cta}

[출력 요구사항]
위 5가지 기획 원칙을 완벽히 관통하는 60초 대표영상 시나리오 및 씬별(Scene 1~5) 상세 대본을 작성해 주세요.
각 씬마다 아래 5개 요소를 구체적으로 명시해야 합니다:
- Scene Time & Narrative Stage (0~8s Hook ➔ 8~22s Pain ➔ 22~40s Solution ➔ 40~52s Proof ➔ 52~60s CTA)
- Visual & Camera Motion (화면 구도, 인물의 감정선, 비식별화 그래픽 FX 연출)
- Voice-Over Script (단 한 문장도 낭비 없는 날카롭고 신뢰감 넘치는 한국어 나레이션 대본)
- On-Screen Subtitle (시청자 눈에 즉시 꽂히는 핵심 키 메시지 자막)
- Sound Design & SFX (사운드 템포의 전환, 펄스 비트, 마스킹 락 효과음 연출)`;

    if (codeOutput) {
      codeOutput.textContent = template;
    }
  }

  chipGroups.forEach(group => {
    const paramKey = group.dataset.param;
    const chips = group.querySelectorAll('.param-chip');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        promptState[paramKey] = chip.textContent.trim();
        generatePrompt();
      });
    });
  });

  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      if (!codeOutput) return;
      const textToCopy = codeOutput.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('5대 사고 기반 AI 프롬프트가 복사되었습니다!');
      }).catch(err => {
        console.error('Copy failed: ', err);
      });
    });
  }

  // Initial Generation
  generatePrompt();
}

/* ==========================================================================
   4. 360° Perspective Matrix Tabs
   ========================================================================== */
function initPerspectiveTabs() {
  const pButtons = document.querySelectorAll('.p-tab-btn');
  const cardContainer = document.getElementById('perspectiveContentCard');

  const perspectivesData = {
    'p-public': {
      badge: 'B2G / Public Security',
      title: '"수많은 CCTV 영상 반출, 개인정보 침해 없이 100% 안전하게 처리해야 합니다."',
      summary: '경찰 수사 협조, 민원 열람 요청 등 매일 쏟아지는 영상 반출 요구 속에서 법적 리스크를 완벽히 차단하고 업무 시간을 극적으로 단축하는 것이 핵심 니즈입니다.',
      pain: '수작업 마스킹으로 인한 민원 처리 지연, 담당 공무원의 법적 책임 불안감',
      msg: '"CCTV 영상 반출 신청부터 비식별화까지, 원클릭으로 법적 컴플라이언스 완벽 준수"',
      visual: '관제센터 대형 모니터월, 수많은 군중 속 특정 인물 외 즉각적인 블러링 처리 연출',
      m1Num: '90% ↓',
      m1Txt: '영상 반출 처리 소요 시간 단축',
      m2Num: '0 건',
      m2Txt: '개인정보 유출 사고 리스크 제로'
    },
    'p-enterprise': {
      badge: 'Enterprise AI & Autonomous Driving',
      title: '"데이터 활용은 무한대로, 개인정보 이슈는 원천 차단된 클린 데이터셋이 필요합니다."',
      summary: '자율주행, 스마트 모빌리티, AI 비전 모델 학습을 위해 대용량 영상 데이터의 가명처리가 필수적이나, 수작업 처리 속도가 데이터 파이프라인의 치명적 병목이 됩니다.',
      pain: '페타바이트급 영상 데이터 비식별화 처리 지연 및 막대한 아웃소싱 비용 발생',
      msg: '"초당 120fps 초고속 배치 처리로 AI 모델 개발 속도를 10배 가속화"',
      visual: '자율주행 차량 라이다/카메라 시점 영상에서 도로 위 모든 보행자와 차량 번호판이 실시간 박스 마스킹되는 모습',
      m1Num: '10x ↑',
      m1Txt: 'AI 데이터 파이프라인 처리 속도 향상',
      m2Num: '75% ↓',
      m2Txt: '데이터 가공 아웃소싱 비용 절감'
    },
    'p-media': {
      badge: 'Media, Broadcasting & Content Creators',
      title: '"방송 심의와 유튜브 초상권 침해 걱정 없이 창작에만 집중하고 싶습니다."',
      summary: '길거리 브이로그, 예능, 보도 영상 제작 시 지나가는 시민들의 얼굴을 일일이 모자이크하느라 밤샘 편집을 반복하는 크리에이터와 방송 PD들의 절박한 업무 경감 니즈입니다.',
      pain: '프레임 단위의 지루한 모자이크 노가다와 초상권 침해로 인한 영상 삭제 리스크',
      msg: '"영상 올리고 1분이면 끝. 크리에이터의 소중한 수면 시간을 지켜주는 AI 파트너"',
      visual: '영상 편집 툴(프리미어/파이널컷) 타임라인에서 플러그인 버튼 하나로 수백 명의 얼굴이 자동 트래킹 블러 처리되는 연출',
      m1Num: '85% ↓',
      m1Txt: '영상 후반 편집 시간 단축',
      m2Num: '1-Click',
      m2Txt: '원클릭 자동 추적 마스킹'
    },
    'p-citizen': {
      badge: 'General Public & Privacy Rights',
      title: '"언제 어디서 찍힐지 모르는 내 얼굴과 차량번호, 안전하게 보호받고 싶습니다."',
      summary: '도심 곳곳의 CCTV, 주차장 차량 블랙박스, 타인의 SNS 영상에 무단 노출되어 범죄나 사생활 침해에 악용될까 두려운 일반 시민의 안심과 권리 보호 관점입니다.',
      pain: '일상 속 무분별한 영상 촬영 및 온라인 유포로 인한 사생활 침해 공포',
      msg: '"기술의 편리함 뒤에 숨은 위험, xPrivacy가 당신의 일상을 투명한 방패로 지킵니다"',
      visual: '아침 출근길, 아이를 등교시키는 부모, 번화가를 걷는 연인들의 안도하는 미소와 따뜻한 도심 풍경',
      m1Num: '100%',
      m1Txt: '개인 사생활 및 초상권 보호',
      m2Num: '24/7',
      m2Txt: '언제 어디서나 안심할 수 있는 사회'
    }
  };

  pButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      pButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.dataset.target;
      const data = perspectivesData[targetId];
      if (!data || !cardContainer) return;

      cardContainer.innerHTML = `
        <div class="p-pane active" id="${targetId}">
          <div class="p-card-grid">
            <div class="p-main-info">
              <span class="p-badge"><i class="fa-solid fa-layer-group"></i> ${data.badge}</span>
              <h4 class="p-title">${data.title}</h4>
              <p class="p-summary">${data.summary}</p>
              
              <div class="p-points-list">
                <div class="point-row">
                  <span class="point-label">Pain Point:</span>
                  <span class="point-val">${data.pain}</span>
                </div>
                <div class="point-row">
                  <span class="point-label">Key Message:</span>
                  <span class="point-val">${data.msg}</span>
                </div>
                <div class="point-row">
                  <span class="point-label">Video Visual:</span>
                  <span class="point-val">${data.visual}</span>
                </div>
              </div>
            </div>

            <div class="p-sidebar-metric">
              <div class="metric-box">
                <span class="m-num">${data.m1Num}</span>
                <span class="m-txt">${data.m1Txt}</span>
              </div>
              <div class="metric-box">
                <span class="m-num">${data.m2Num}</span>
                <span class="m-txt">${data.m2Txt}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  });
}

/* ==========================================================================
   5. Quick Action Header Buttons
   ========================================================================== */
function initQuickActions() {
  const btnQuickPrompt = document.getElementById('btnQuickPrompt');
  const btnViewScript = document.getElementById('btnViewScript');

  if (btnQuickPrompt) {
    btnQuickPrompt.addEventListener('click', () => {
      const step1Tab = document.querySelector('.nav-item[data-tab="step1"]');
      if (step1Tab) step1Tab.click();

      setTimeout(() => {
        const studioBlock = document.getElementById('prompt-studio-block');
        if (studioBlock) {
          studioBlock.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    });
  }

  if (btnViewScript) {
    btnViewScript.addEventListener('click', () => {
      const step3Tab = document.querySelector('.nav-item[data-tab="step3"]');
      if (step3Tab) step3Tab.click();

      setTimeout(() => {
        const scriptBlock = document.getElementById('script-storyboard-block');
        if (scriptBlock) {
          scriptBlock.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    });
  }
}

/* ==========================================================================
   6. Toast Notification Utility
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/* ==========================================================================
   7. Practical Curriculum & Tutorial Modal Logic
   ========================================================================== */
function initCurriculumModal() {
  const modal = document.getElementById('curriculumModal');
  const btnOpenBanner = document.getElementById('btnOpenCurriculumModal');
  const btnHeaderTutorial = document.getElementById('btnHeaderTutorial');
  const btnClose = document.getElementById('btnCloseCurriculumModal');
  const btnCloseBottom = document.getElementById('btnCloseModalBottom');
  const stepBtns = document.querySelectorAll('.c-step-btn');
  const stepPanes = document.querySelectorAll('.c-step-pane');
  const copyBtns = document.querySelectorAll('.btn-copy-sm');

  function openModal(initialStep = null) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (initialStep) {
      const targetBtn = document.querySelector(`.c-step-btn[data-cstep="${initialStep}"]`);
      if (targetBtn) targetBtn.click();
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (btnOpenBanner) {
    btnOpenBanner.addEventListener('click', () => openModal());
  }

  if (btnHeaderTutorial) {
    btnHeaderTutorial.addEventListener('click', () => openModal());
  }

  if (btnClose) {
    btnClose.addEventListener('click', closeModal);
  }

  if (btnCloseBottom) {
    btnCloseBottom.addEventListener('click', closeModal);
  }

  // Close when clicking modal backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Step tabs switching inside modal
  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStep = btn.dataset.cstep;

      stepBtns.forEach(b => b.classList.remove('active'));
      stepPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(`cpane-${targetStep}`);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });

  // Sub-prompt copy buttons inside modal
  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.dataset.copy;
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const text = targetEl.textContent || targetEl.innerText;
      try {
        await navigator.clipboard.writeText(text.trim());
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> <span>복사 완료!</span>`;
        showToast('실전 프롬프트가 클립보드에 복사되었습니다!');
        setTimeout(() => {
          btn.innerHTML = originalHtml;
        }, 2000);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
        showToast('프롬프트 복사에 실패했습니다.');
      }
    });
  });
}
