import re

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_block = """            <!-- Project Tab Content -->
            <div id="project-tab" class="process-tab-content">
                <!-- 준비 vs 실무 -->
                <div class="curriculum-grid" style="margin-bottom: 30px;">
                    <div class="curriculum-card clickable-card" style="border: 1px solid rgba(16, 185, 129, 0.3); box-shadow: 0 0 30px rgba(16, 185, 129, 0.05);" onclick="openModal('prep')">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                            <div style="font-size: 2.5rem;">⚙️</div>
                            <span class="editor-badge" style="background: rgba(16, 185, 129, 0.1); color: #34d399;">환경설정</span>
                        </div>
                        <h3>Phase 1. 전체 방향 잡기</h3>
                        <ul style="list-style: none; padding: 0; margin-bottom: 25px; line-height: 1.8; color: var(--text-muted); font-size: 0.95rem;">
                            <li>• 프로젝트 기술 스택(언어/프레임워크) 정의</li>
                            <li>• 폴더 구조 및 아키텍처 규칙 세팅</li>
                            <li>• 코딩 컨벤션 및 네이밍 규칙 확립</li>
                            <li style="color: #34d399; font-weight: 600; margin-top: 5px;">🔥 핵심: AI가 지켜야 할 절대 규칙(System Prompt) 주입</li>
                        </ul>
                        <div class="view-prompt-btn">시스템 프롬프트 템플릿 보기 ↗</div>
                    </div>

                    <div class="curriculum-card clickable-card" style="border: 1px solid rgba(139, 92, 246, 0.3); box-shadow: 0 0 30px rgba(139, 92, 246, 0.05);" onclick="openModal('guide')">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                            <div style="font-size: 2.5rem;">📐</div>
                            <span class="editor-badge" style="background: rgba(139, 92, 246, 0.1); color: #a78bfa;">가이드</span>
                        </div>
                        <h3>Phase 2. 뼈대 및 디자인</h3>
                        <ul style="list-style: none; padding: 0; margin-bottom: 25px; line-height: 1.8; color: var(--text-muted); font-size: 0.95rem;">
                            <li>• 프론트 페이지 목록(대시보드) 정리</li>
                            <li>• 파운데이션(디자인 토큰 등) 세팅</li>
                            <li>• 공통 UI 컴포넌트 산출물 정리</li>
                            <li style="color: #a78bfa; font-weight: 600; margin-top: 5px;">🔥 핵심: 본격적인 기능구현 전 가이드 정리를 위한 단계</li>
                        </ul>
                        <div class="view-prompt-btn">가이드 프롬프트 템플릿 보기 ↗</div>
                    </div>

                    <div class="curriculum-card clickable-card" style="border: 1px solid rgba(59, 130, 246, 0.3); box-shadow: 0 0 30px rgba(59, 130, 246, 0.05);" onclick="openModal('exec')">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                            <div style="font-size: 2.5rem;">🛠️</div>
                            <span class="editor-badge" style="background: rgba(59, 130, 246, 0.1); color: #60a5fa;">기능구현</span>
                        </div>
                        <h3>Phase 3. 핑퐁하며 구현하기</h3>
                        <ul style="list-style: none; padding: 0; margin-bottom: 25px; line-height: 1.8; color: var(--text-muted); font-size: 0.95rem;">
                            <li>• 정해진 규칙 위에서 지속적인 대화(핑퐁) 진행</li>
                            <li>• 기능 검증 및 에러 발생 시 즉각 피드백</li>
                            <li>• 구현된 코드의 주기적인 리뷰 및 리팩토링</li>
                            <li style="color: #60a5fa; font-weight: 600; margin-top: 5px;">🔥 핵심: 거대한 지시 대신 작은 기능 단위(Chunk)로 쪼개서 요청</li>
                        </ul>
                        <div class="view-prompt-btn">실무 티키타카 예시 보기 ↗</div>
                    </div>
                </div>

                <!-- 세부 단계 -->
                <div class="target-content" style="padding: 40px; background: rgba(0,0,0,0.2);">
                    <h3 style="text-align: center; font-size: 1.8rem; margin-bottom: 20px; color: #fff;">실무 단계에서 무한 반복되는 6가지 기본 공식</h3>
                    <p style="text-align: center; color: var(--text-muted); margin-bottom: 40px;">어떤 기능을 만들든 이 6가지 순서만 똑같이 반복하면 됩니다.</p>
                    <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                        <div class="feature-card clickable-card" onclick="openModal(1)">
                            <div class="feature-icon">1</div>
                            <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 10px;">요구사항 구체화</h4>
                            <p style="font-size: 0.95rem;">어떤 기능을 만들지 명확한 입력(Input)과 기대 출력(Output)을 정의합니다.</p>
                            <div class="view-prompt-btn">프롬프트 예시 보기 ↗</div>
                        </div>
                        <div class="feature-card clickable-card" onclick="openModal(2)">
                            <div class="feature-icon">2</div>
                            <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 10px;">뼈대(Skeleton) 구축</h4>
                            <p style="font-size: 0.95rem;">세부 로직을 작성하기 전 라우팅, 폴더 구조, 데이터 모델 등 아키텍처를 우선 세팅합니다.</p>
                            <div class="view-prompt-btn">프롬프트 예시 보기 ↗</div>
                        </div>
                        <div class="feature-card clickable-card" onclick="openModal(3)">
                            <div class="feature-icon">3</div>
                            <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 10px;">마이크로 태스크 진행</h4>
                            <p style="font-size: 0.95rem;">UI 마크업, API 연동 등 하나의 작업만 독립적으로 AI에게 지시하고 검증합니다.</p>
                            <div class="view-prompt-btn">프롬프트 예시 보기 ↗</div>
                        </div>
                        <div class="feature-card clickable-card" onclick="openModal(4)">
                            <div class="feature-icon">4</div>
                            <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 10px;">에러 복붙 디버깅</h4>
                            <p style="font-size: 0.95rem;">오류 발생 시 에러 로그 전문과 상황을 그대로 복사해 AI에게 해결책을 묻습니다.</p>
                            <div class="view-prompt-btn">프롬프트 예시 보기 ↗</div>
                        </div>
                        <div class="feature-card clickable-card" onclick="openModal(5)">
                            <div class="feature-icon">5</div>
                            <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 10px;">코드 리뷰 및 리팩토링</h4>
                            <p style="font-size: 0.95rem;">코드가 작동하더라도 "더 나은 패턴이나 취약점은 없는지" 되물어 코드를 다듬습니다.</p>
                            <div class="view-prompt-btn">프롬프트 예시 보기 ↗</div>
                        </div>
                        <div class="feature-card clickable-card" onclick="openModal(6)">
                            <div class="feature-icon">6</div>
                            <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 10px;">컨텍스트 업데이트</h4>
                            <p style="font-size: 0.95rem;">새로운 라이브러 추가나 요구사항 변경 시, AI의 메모리(Context)를 다시 갱신해줍니다.</p>
                            <div class="view-prompt-btn">프롬프트 예시 보기 ↗</div>
                        </div>
                    </div>
                </div>
            </div>
"""

# We want to replace lines 197 to 401 inclusive
final_lines = lines[:197] + [new_block + '\n'] + lines[402:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

