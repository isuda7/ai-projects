import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_block = """            <div class="curriculum-grid" style="margin-bottom: 40px;">
                <div class="curriculum-card">
                    <span class="week-badge">상황 A</span>
                    <h3>프롬프트가 있는 경우 (명확한 기획)</h3>
                    <p>기획안이 확고하다면 <strong>'구체적 지시와 제한'</strong>이 핵심입니다. 기대하는 출력값(Output)을 명시하고, 사용할 프레임워크나 라이브러리를 엄격히 고정하여 AI가 딴 길로 새지 않도록 통제합니다.</p>
                </div>
                <div class="curriculum-card">
                    <span class="week-badge">상황 B</span>
                    <h3>프롬프트가 없는 경우 (아이디어 단계)</h3>
                    <p>스펙이 불명확하다면 <strong>'탐색적 대화'</strong>로 시작합니다. "이런 서비스를 만들 건데 어떤 아키텍처가 좋을까?"라고 AI의 제안을 먼저 이끌어낸 뒤, 초안을 바탕으로 점차 요구사항을 구체화(Refining)합니다.</p>
                </div>
            </div>"""

new_block = """            <div class="curriculum-grid" style="margin-bottom: 40px;">
                <div class="curriculum-card clickable-card" onclick="openModal('approach_a')" style="cursor: pointer;">
                    <span class="week-badge">접근 방식 A</span>
                    <h3>결과 기반 프롬프트 도출 (역추론)</h3>
                    <p>결과물을 직접 만들며 프롬프트를 역추론할 때는 <strong>'대화와 요약'</strong>을 활용합니다. 단편적인 기능들을 AI와 함께 구현하며 성공적인 결과를 찾아내고, "방금 우리가 만든 결과물을 처음부터 단번에 도출하려면 어떤 프롬프트가 필요할까?"라고 지시하여 <strong>AI 스스로 최적의 프롬프트를 역산</strong>하도록 유도합니다.</p>
                    <div class="view-prompt-btn" style="margin-top: 20px; font-weight: 500;">진행과정 템플릿 보기 ↗</div>
                </div>
                <div class="curriculum-card clickable-card" onclick="openModal('approach_b')" style="cursor: pointer;">
                    <span class="week-badge">접근 방식 B</span>
                    <h3>프롬프트 자체 사전 제작 (설계)</h3>
                    <p>프롬프트 자체를 먼저 제작할 때는 <strong>'구조화와 제약'</strong>이 핵심입니다. 프로젝트의 목적, 절대 어겨선 안 될 규칙, 기술 스택, 그리고 기대하는 출력 포맷(Output)을 마크다운 문법으로 뼈대부터 명확히 규격화하여, AI가 딴 길로 새지 않도록 완벽히 통제하는 지시문을 설계합니다.</p>
                    <div class="view-prompt-btn" style="margin-top: 20px; font-weight: 500;">진행과정 템플릿 보기 ↗</div>
                </div>
            </div>"""

content = content.replace(old_block, new_block)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
