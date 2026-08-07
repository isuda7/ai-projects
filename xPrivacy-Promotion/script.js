const modalData = {
    'q-where': {
        title: '채널 비교 분석 (어디서)',
        examples: [
            { text: '<strong>숏폼 (Short-form)</strong><br>✔️ <strong>전제:</strong> 정보성 키워드 <strong class="keyword">직접 검색</strong><br>✔️ <strong>강점:</strong> 검색 유입, 긴 콘텐츠 수명<br>✔️ <strong>요건:</strong> 탄탄한 대본, 퀄리티 높은 자막<br>⚠️ <strong>제한사항:</strong> 편집 허들이 높아 대량 생산 어려움', recommended: false },
            { text: '<strong>인스타그램 (Instagram)</strong><br>✔️ <strong>전제:</strong> 홍보 콘텐츠 유입 후 <strong class="keyword">계정 방문 (신뢰도 확인)</strong><br>✔️ <strong>강점:</strong> 서비스 포트폴리오, 시각적 브랜딩<br>✔️ <strong>요건:</strong> 피드(Grid) 톤앤매너 통일, 깔끔한 썸네일', recommended: true },
            { text: '<strong>틱톡 (TikTok)</strong><br>✔️ <strong>전제:</strong> 피드에서 <strong class="keyword">자극적인 재미</strong>만 탐색<br>✔️ <strong>강점:</strong> 강력한 알고리즘, 빠른 밈 확산<br>✔️ <strong>요건:</strong> 3초 후킹, 과장된 액션<br>⚠️ <strong>제한사항:</strong> 연령층이 낮아 실제 서비스 신청 전환율 저조', recommended: false },
            { text: '<strong>네이버 블로그 (Naver Blog)</strong><br>✔️ <strong>전제:</strong> 명확한 목적(문제 해결)을 가지고 <strong class="keyword">정독</strong><br>✔️ <strong>강점:</strong> 상세한 설명, <strong class="keyword">압도적인 가입 전환율</strong><br>✔️ <strong>요건:</strong> SEO 키워드 발굴, 움짤(GIF) 시연', recommended: true }
        ],
        summary: '인스타그램(신뢰도/포트폴리오)으로 타겟을 유입시키고,<br><span style="color: var(--accent-blue);">네이버 블로그(상세 설명)를 통해 실제 가입 전환</span>을 이끄는 투트랙 전략입니다.'
    },
    'q-who': {
        title: '거시적 타겟 분류 및 세부 유형 (누구에게)',
        examples: [
            { 
              text: '<strong>[공공/기관/교육] (B2G/B2B)</strong><br>✔️ <strong>공공 홍보팀:</strong> 행사 스케치 영상 모자이크<br>✔️ <strong>보안/경찰:</strong> 증거 영상 CCTV 비식별화<br>💡 <strong>강점:</strong> 법적 의무 및 예산 확보로 <strong class="keyword">대량 도입 유력</strong>', 
              recommended: true 
            },
            { 
              text: '<strong>[일반 기업/방송] (B2B)</strong><br>✔️ <strong>마케팅팀:</strong> 사내 홍보 브이로그 초상권 보호<br>✔️ <strong>방송/외주:</strong> 대량 영상 소스 행인 얼굴 모자이크<br>⚠️ <strong>제한사항:</strong> 기존 전문 툴(프리미어) 플러그인 선호 리스크', 
              recommended: false 
            },
            { 
              text: '<strong>[크리에이터/개인] (B2C)</strong><br>✔️ <strong>초보 유튜버:</strong> 야외 촬영 시 배경 사람 모자이크 스트레스<br>✔️ <strong>일반 유저:</strong> SNS(릴스) 업로드 시 지인 외 타인 노출 기피<br>💡 <strong>강점:</strong> 모수가 가장 크고 <strong class="keyword">바이럴 확산 속도가 빠름</strong>', 
              recommended: true 
            }
        ],
        summary: '직접적인 홍보 타겟은 예산 확보가 확실한 공공기관(B2G/B2B)에 집중하고,<br><span style="color: var(--accent-blue);">B2C 시장은 부가적인 브랜드 인지도 확산 창구로 열어두는</span> 전략입니다.'
    },
    'q-tone': {
        title: 'xPrivacy 맞춤 톤앤매너 및 대안 (어떤 느낌으로)',
        examples: [
            { text: '<strong>[A] 신뢰/보안 전문성 (Trust & Security)</strong><br>💡 <strong>대안:</strong> 초상권 관련 뉴스 기반, 공공/기업용 안전 솔루션 어필<br>⚠️ <strong>제한사항:</strong> 영상이 무거워 B2C의 <strong class="keyword">자발적 바이럴 저조</strong>', recommended: false },
            { text: '<strong>[B] 사이다/통쾌함 (Pain-point Relief)</strong><br>💡 <strong>대안:</strong> 모자이크 노가다 공감 연출 + 원클릭(딸깍)으로 끝나는 <strong class="keyword">비포/애프터의 시각적 카타르시스 강조</strong>', recommended: true },
            { text: '<strong>[C] 경각심 유발 (Legal Warning)</strong><br>💡 <strong>대안:</strong> 초상권 침해 고소/벌금 등 실제 판례를 자극적인 상황극으로 연출<br>⚠️ <strong>제한사항:</strong> 이목은 끄나, <strong class="keyword">서비스 이미지가 부정적/피로하게 굳어질 위험</strong>', recommended: false }
        ],
        summary: '무거운 전문성(법률/보안)을 과감히 덜어내고,<br><span style="color: var(--accent-blue);">모자이크 고통을 원클릭으로 해결하는 시각적 카타르시스</span>에 집중합니다.'
    },
    'q-how': {
        title: '제로 베이스 채널 제작 방식 (어떻게 만들 것인가)',
        examples: [
            { text: '<strong>[옵션 1] 스마트폰 맨땅에 헤딩 (자체 촬영/편집)</strong><br>✔️ <strong>방식:</strong> 직원들이 폰으로 찍고 무료 앱으로 컷편집하는 브이로그 톤<br>⚠️ <strong>제한사항:</strong> 진정성은 있으나 <strong class="keyword">영상 제작 시간이 너무 오래 걸려</strong> 장기적인 꾸준한 업로드 포기율 높음', recommended: false },
            { text: '<strong>[옵션 2] AI/템플릿 기반 규격화된 숏폼 (무기술/고효율)</strong><br>✔️ <strong>방식:</strong> 촬영 없이 캡컷(CapCut), AI성우(TTS), 화면 녹화만 활용하는 고정 템플릿 제작<br>💡 <strong>강점:</strong> 전문 편집 기술이 없어도 가능. 템플릿 하나로 주 3회 <strong class="keyword">안정적인 반복 생산이 가능해 초기 채널 세팅에 최적</strong>', recommended: true },
            { text: '<strong>[옵션 3] 솔루션 화면 녹화 (Screencast 튜토리얼)</strong><br>✔️ <strong>방식:</strong> xPrivacy 구동 화면(모자이크 처리 과정)만 화면 녹화하여 텍스트/음성을 얹음<br>💡 <strong>강점:</strong> 실사 촬영 부담이 전혀 없고, <strong class="keyword">서비스의 핵심 기능(성능)을 가장 직관적으로 보여줌</strong>', recommended: true }
        ],
        summary: '무촬영과 무료 AI 활용 범위 내에서 규격화된 템플릿과 화면 녹화 결합을 예상하며,<br><span style="color: var(--accent-blue);">현실적인 제작은 직접 부딪히는 경험을 통해 보완해 나가야 합니다.</span>'
    },
    'content-a': {
        title: '[B2G/B2B] 활용 시나리오 (Use Case)',
        examples: [
            { text: '<strong>✔️ 접근 방식:</strong> 현장에서 발생할 수 있는 구체적인 위기 상황(초상권 분쟁 등)을 가정한 <strong>해결 시나리오</strong>를 연출하여 전달', recommended: false },
            { text: '<strong>💡 추천 타겟:</strong> 지자체 홍보팀, 보안 부서 등 예산 집행권자', recommended: false },
            { text: '<strong>⚠️ 한계점:</strong> 가상의 시나리오이므로, 실제 검증 데이터에 비해서는 신뢰성이 다소 떨어질 수 있음', recommended: false }
        ],
        summary: '초기에는 가상 시나리오로 문제 인식(니즈)을 끌어내고, 즉각 <span style="color: var(--accent-blue);">테크 데모(Tech Demo)를 연결해 기술적 신뢰도를 보완</span>하는 하이브리드 전략이 필요합니다.'
    },
    'content-b': {
        title: '[B2B/B2C] 테크 데모 (Tech Demo)',
        examples: [
            { text: '<strong>✔️ 접근 방식:</strong> 화려한 연출 없이, <strong>1초 만에 50명의 얼굴이 지워지는 화면</strong>만 빠르고 임팩트 있게 반복', recommended: false },
            { text: '<strong>💡 추천 타겟:</strong> 바쁜 영상 편집자, 외주 프로덕션 PD', recommended: false },
            { text: '<strong>⚠️ 한계점:</strong> 서사가 없어 시청 유지 시간(Retention)이 짧을 수 있음', recommended: false }
        ],
        summary: '짧은 시청 시간을 약점이 아닌 무기로 활용합니다. <span style="color: var(--accent-blue);">"이게 1초 만에 된다고?"라는 시각적 충격 자체를 밈(Meme)화</span>하여 빠른 이탈 전 확실한 각인을 노립니다.'
    },
    'content-c': {
        title: '[B2C] 유쾌한 상황극 / 밈 (Meme)',
        examples: [
            { text: '<strong>✔️ 접근 방식:</strong> "전 여친 얼굴 나와서 영상 삭제함 ㅠ" 같은 공감 가는 B급 상황극에 <strong>AI 음성 더빙</strong>을 입혀 유머러스하게 풀이', recommended: false },
            { text: '<strong>💡 추천 타겟:</strong> 인스타 릴스/틱톡을 즐겨보는 1030 유저', recommended: false },
            { text: '<strong>⚠️ 한계점:</strong> 가벼운 이미지로 인해 B2B 도입/결제(예산 집행) 설득에는 적합하지 않음', recommended: false }
        ],
        summary: '밈 콘텐츠는 오직 \'대규모 트래픽 확보\'를 위한 미끼로만 씁니다. 터진 조회수를 <span style="color: var(--accent-blue);">프로필 링크를 통해 [활용 시나리오]나 [테크 데모]로 전환시키는 퍼넬(Funnel) 설계가 핵심</span>입니다.'
    },
    'content-d': {
        title: '[B2B/B2C] 정보성 큐레이션 (Infographic)',
        examples: [
            { text: '<strong>✔️ 접근 방식:</strong> "벌금 500만원 피하는 법" 등 <strong>초상권 관련 법률/지식을 카드뉴스나 숏폼으로 전달</strong>', recommended: false },
            { text: '<strong>💡 추천 타겟:</strong> 저작권에 민감한 실무자, 스마트 유저', recommended: false },
            { text: '<strong>⚠️ 한계점:</strong> 자발적인 바이럴(공유) 확산 속도는 느릴 수 있음', recommended: false }
        ],
        summary: '빠른 바이럴 대신 <span style="color: var(--accent-blue);">네이버 블로그 검색 유입(SEO)을 통한 롱테일(Long-tail) 타겟 확보</span>에 집중하며, 서비스의 전문성과 권위를 세우는 밑바탕으로 활용합니다.'
    },
    'algo-step-1': {
        title: 'STEP 1. 시드 노출 (스크롤 멈추기)',
        examples: [
            { text: '<strong>첫 3초의 강력한 시각적 자극</strong><br>모자이크 전/후 비교, 속도감 있는 화면 전환으로 이목 집중', recommended: true, badgeText: '필수' },
            { text: '<strong>핵심 결과 선공개 (두괄식)</strong><br>가장 흥미로운 장면이나 결과물(완벽히 가려진 얼굴)을 맨 앞에 배치', recommended: true, badgeText: '핵심' },
            { text: '<strong>과도한 낚시성 인트로 (Clickbait)</strong><br>본문 내용과 상관없는 억지 밈이나 과장된 멘트는 초반 이탈률만 급증시키므로 지양', recommended: false, badgeText: '절대 금지' }
        ],
        summary: '소규모 테스트 그룹(시드)에게 노출되었을 때, <strong>무조건 3초 안에 스크롤을 멈추게 하는 것</strong>이 최우선 목표입니다.'
    },
    'algo-step-2': {
        title: 'STEP 2. 시청 유지 (본론으로 직행)',
        examples: [
            { text: '<strong>불필요한 인사말 생략</strong><br>"안녕하세요 오늘은~" 같은 형식적인 인삿말을 과감히 삭제하고 곧바로 본론 진입', recommended: true, badgeText: '필수' },
            { text: '<strong>역동적인 컷편집 (1초 단위)</strong><br>시각적 지루함을 없애기 위해 화자 구도 변경, 화면 줌인/아웃 등을 쉴 새 없이 배치', recommended: true, badgeText: '핵심' },
            { text: '<strong>루즈한 오디오 공백 방치</strong><br>말과 말 사이의 숨 쉬는 구간(0.5초)조차 스크롤 이탈의 빌미가 되므로 오디오 틈을 완전히 잘라내야 함', recommended: false, badgeText: '금지' }
        ],
        summary: '스크롤을 멈춘 유저가 영상을 끝까지(또는 길게) 보게 만들어 <strong>시청 지속 시간(Retention)</strong> 지표를 높이는 단계입니다.'
    },
    'algo-step-3': {
        title: 'STEP 3. 인게이지먼트 (행동 끌어내기)',
        examples: [
            { text: '<strong>저장 유도 (Save) 꿀팁 제공</strong><br>"나중에 필요할 때 보려면 꼭 저장해두세요"라며 실질적인 가치를 담은 정보 제공', recommended: true, badgeText: '핵심' },
            { text: '<strong>논쟁이나 공감으로 댓글 유도</strong><br>"직장인 공감하시나요?", "여러분이라면 어떻게 하시겠어요?" 등 질문을 던져 소통 유도', recommended: true, badgeText: '추천' },
            { text: '<strong>맥락 없는 \'좋댓구알\' 구걸</strong><br>아무런 정보 제공 없이 무작정 좋아요와 팔로우를 요구하는 것은 전환율에 악영향을 미침', recommended: false, badgeText: '지양' }
        ],
        summary: '단순한 시청을 넘어, 플랫폼이 가장 좋아하는 가점 지표인 <strong>저장과 공유(그리고 댓글)</strong>를 인위적으로 이끌어내야 합니다.'
    },
    'algo-step-4': {
        title: 'STEP 4. 대규모 확산 (타겟 페르소나 고정)',
        examples: [
            { text: '<strong>명확한 채널 정체성 유지</strong><br>xPrivacy 관련 정보, 직장인 썰 등 특정 카테고리를 일관되게 유지하여 알고리즘의 타겟 학습 촉진', recommended: true, badgeText: '필수' },
            { text: '<strong>꾸준한 업로드 주기 (빈도 유지)</strong><br>알고리즘의 신뢰 지수를 얻기 위해 주 2~3회 일정한 요일과 시간에 꾸준히 업로드', recommended: true, badgeText: '필수' },
            { text: '<strong>채널 핏에 안 맞는 유행어 맹목적 탑승</strong><br>단순히 뜬다는 이유로 타겟층과 무관한 댄스 챌린지 등을 올리면 알고리즘에 심각한 혼선 초래', recommended: false, badgeText: '주의' }
        ],
        summary: '시드 테스트를 통과한 영상이 유사 타겟층에게 대량 노출되는 시기입니다. <strong>채널의 핏(주제)이 일관될수록</strong> 더 크고 정확한 풀(Pool)로 확산됩니다.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that need to be animated
    const animatedElements = document.querySelectorAll('.fade-in-up');

    // Setup Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger the animation
                entry.target.classList.add('visible');
            } else {
                // Remove class to animate again when scrolling back
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Observe each element
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Modal Logic
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    document.querySelectorAll('.ex-btn, .modal-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const key = btn.getAttribute('data-modal');
            const data = modalData[key];
            if (data) {
                modalTitle.textContent = data.title;
                let html = '<ul>';
                data.examples.forEach(ex => {
                    if (ex.recommended === true) {
                        const badgeText = ex.badgeText || '추천';
                        html += `<li class="recommended"><span class="recommended-badge">${badgeText}</span>${ex.text}</li>`;
                    } else if (ex.recommended === false) {
                        const badgeText = ex.badgeText || '주의';
                        html += `<li class="warning"><span class="warning-badge">${badgeText}</span>${ex.text}</li>`;
                    } else {
                        html += `<li>${ex.text}</li>`;
                    }
                });
                html += '</ul>';
                if (data.summary) {
                    const isContentModal = key.startsWith('content-');
                    const titleIcon = isContentModal ? '💡' : '🎯';
                    const titleText = isContentModal ? 'Breakthrough. 돌파 전략' : 'Conclusion. 시너지 요약';
                    
                    html += `
                        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, rgba(0, 210, 255, 0.1) 0%, rgba(20, 20, 30, 0.8) 100%); border-left: 4px solid var(--accent-blue); border-radius: 8px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border-right: 1px solid rgba(0, 210, 255, 0.1); border-top: 1px solid rgba(0, 210, 255, 0.1); border-bottom: 1px solid rgba(0, 210, 255, 0.1);">
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.8rem;">
                                <span style="font-size: 1.3rem;">${titleIcon}</span>
                                <strong style="color: #fff; font-size: 1.1rem; letter-spacing: -0.5px;">${titleText}</strong>
                            </div>
                            <p style="font-size: 1.05rem; line-height: 1.7; color: #eaeaea; font-weight: 500; margin: 0; word-break: keep-all;">
                                ${data.summary}
                            </p>
                        </div>
                    `;
                }
                
                modalBody.innerHTML = html;
                overlay.classList.add('active');
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });

    // Tab Navigation Logic
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and tabs
            navBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(t => t.classList.remove('active'));

            const targetId = btn.getAttribute('data-target');
            const targetTab = document.getElementById(targetId);
            if (targetTab) {
                targetTab.classList.add('active');
                
                if (targetId === 'tab-planning') {
                    // Go directly to the pre-planning section (slide-1) instead of the overview (slide-0)
                    const slide1 = document.getElementById('slide-1');
                    if (slide1) {
                        setTimeout(() => {
                            targetTab.scrollTop = slide1.offsetTop;
                        }, 10);
                    }
                } else {
                    setTimeout(() => {
                        targetTab.scrollTop = 0;
                    }, 10);
                }
            }
            
            btn.classList.add('active');
        });
    });

    // Sub-nav click logic
    const subNavBtns = document.querySelectorAll('.sub-nav-btn');
    subNavBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = btn.getAttribute('data-scroll');
            const targetSection = document.getElementById(targetId);
            const parentTab = targetSection.closest('.tab-content');
            
            if (targetSection && parentTab) {
                parentTab.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // General ScrollSpy for all sub-nav buttons
    tabContents.forEach(tab => {
        tab.addEventListener('scroll', () => {
            const scrollPos = tab.scrollTop + window.innerHeight * 0.4;
            const sections = tab.querySelectorAll('section[id]');
            
            let currentSection = null;
            sections.forEach(sec => {
                if (sec.offsetTop <= scrollPos) {
                    currentSection = sec;
                }
            });

            if (currentSection) {
                const navBtn = document.querySelector(`.nav-btn[data-target="${tab.id}"]`);
                if (navBtn) {
                    const subBtns = navBtn.parentElement.querySelectorAll('.sub-nav-btn');
                    subBtns.forEach(b => b.classList.remove('active'));
                    
                    const activeBtn = navBtn.parentElement.querySelector(`.sub-nav-btn[data-scroll="${currentSection.id}"]`);
                    if (activeBtn) {
                        activeBtn.classList.add('active');
                    }
                }
            }
        });
    });

    // ScrollSpy for Pre-planning (사전 기획) tab Main Button
    const tabPlanning = document.getElementById('tab-planning');
    const prePlanningBtn = document.querySelector('.nav-btn[data-target="tab-planning"]');
    
    if (tabPlanning && prePlanningBtn) {
        tabPlanning.addEventListener('scroll', () => {
            // Light up the button when scrolled past 30% of the viewport (Overview screen)
            if (tabPlanning.scrollTop > window.innerHeight * 0.3) {
                prePlanningBtn.classList.add('active');
            } else {
                prePlanningBtn.classList.remove('active');
            }
        });
    }

    // Accordion Logic for Content Pool
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentSection = header.closest('.category-section');
            const isActive = currentSection.classList.contains('active');
            
            // Close all sections
            document.querySelectorAll('.category-section').forEach(sec => {
                sec.classList.remove('active');
            });
            
            // If it wasn't active, open it
            if (!isActive) {
                currentSection.classList.add('active');
            }
        });
    });
});
