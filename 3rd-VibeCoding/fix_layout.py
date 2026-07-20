import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_ul = """                <ul style="display: flex; flex-direction: column; gap: 15px;">
                    <li><span class="check">✓</span> <strong>'How'보다 'What':</strong> 로직을 어떻게 짤지 장황하게 지시하기보다, 달성할 최종 목표와 결과물 형태를 명확히 지시하세요.</li>
                    <li><span class="check">✓</span> <strong>에러 로그의 활용:</strong> 오류 발생 시 당황하지 말고 터미널의 에러 로그 전문과 발생 상황을 복사해서 그대로 붙여넣어 원인을 분석시키세요.</li>
                    <li><span class="check">✓</span> <strong>마이크로 태스크 분할:</strong> 한 번에 거대한 기능 구현을 요구하면 환각(Hallucination)이 발생합니다. 최소 단위로 쪼개어 하나씩 해결하세요.</li>
                    <li><span class="check">✓</span> <strong>비판적 코드 리뷰:</strong> AI가 작성한 코드를 무비판적으로 수용하지 말고 "잠재적인 버그나 성능 이슈, 보안 취약점은 없는지 검토해줘"라고 재요청하세요.</li>
                </ul>"""

new_ul = """                <ul style="display: flex; flex-direction: column; gap: 24px; list-style: none; padding-left: 0;">
                    <li style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <div style="flex: 0 0 200px; display: flex; align-items: center; gap: 10px;">
                            <span style="color: var(--primary-color); font-size: 1.2rem; font-weight: bold;">✓</span>
                            <strong style="color: #fff; font-size: 1.05rem; word-break: keep-all;">'How'보다 'What'</strong>
                        </div>
                        <div style="flex: 1 1 400px; line-height: 1.6; color: var(--text-muted); font-size: 0.95rem;">
                            구현 과정(How)을 CSS 속성으로 하나씩 지시하지 마세요.<br>원하는 최종 결과물의 시각적 형태(What)만 명확하게 묘사하세요.
                        </div>
                        <div style="flex-shrink: 0; padding-right: 10px;">
                            <div class="view-prompt-btn" onclick="openModal('guide_what')" style="cursor: pointer; display: inline-flex; align-items: center; white-space: nowrap; font-size: 0.9rem; margin-top: 0;">예시 보기 ↗</div>
                        </div>
                    </li>
                    <li style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <div style="flex: 0 0 200px; display: flex; align-items: center; gap: 10px;">
                            <span style="color: var(--primary-color); font-size: 1.2rem; font-weight: bold;">✓</span>
                            <strong style="color: #fff; font-size: 1.05rem; word-break: keep-all;">에러 로그의 활용</strong>
                        </div>
                        <div style="flex: 1 1 400px; line-height: 1.6; color: var(--text-muted); font-size: 0.95rem;">
                            레이아웃이 깨지거나 오류가 날 때 말로 추측해서 설명하지 마세요.<br>문제 상황을 구체적으로 적고 에러 로그나 코드를 통째로 붙여넣으세요.
                        </div>
                        <div style="flex-shrink: 0; padding-right: 10px;">
                            <div class="view-prompt-btn" onclick="openModal('guide_error')" style="cursor: pointer; display: inline-flex; align-items: center; white-space: nowrap; font-size: 0.9rem; margin-top: 0;">예시 보기 ↗</div>
                        </div>
                    </li>
                    <li style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <div style="flex: 0 0 200px; display: flex; align-items: center; gap: 10px;">
                            <span style="color: var(--primary-color); font-size: 1.2rem; font-weight: bold;">✓</span>
                            <strong style="color: #fff; font-size: 1.05rem; word-break: keep-all;">마이크로 태스크 분할</strong>
                        </div>
                        <div style="flex: 1 1 400px; line-height: 1.6; color: var(--text-muted); font-size: 0.95rem;">
                            거대한 기능 구현을 한 번에 요구하면 화면 누락이나 에러가 발생합니다.<br>하나의 명확하고 작은 지시 단위로 쪼개어 하나씩 점진적으로 해결하세요.
                        </div>
                        <div style="flex-shrink: 0; padding-right: 10px;">
                            <div class="view-prompt-btn" onclick="openModal('guide_micro')" style="cursor: pointer; display: inline-flex; align-items: center; white-space: nowrap; font-size: 0.9rem; margin-top: 0;">예시 보기 ↗</div>
                        </div>
                    </li>
                    <li style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <div style="flex: 0 0 200px; display: flex; align-items: center; gap: 10px;">
                            <span style="color: var(--primary-color); font-size: 1.2rem; font-weight: bold;">✓</span>
                            <strong style="color: #fff; font-size: 1.05rem; word-break: keep-all;">비판적 코드 리뷰</strong>
                        </div>
                        <div style="flex: 1 1 400px; line-height: 1.6; color: var(--text-muted); font-size: 0.95rem;">
                            AI가 작성한 코드를 무비판적으로 수용하지 마세요.<br>"잠재적인 버그나 성능 이슈, 보안 취약점은 없는지 시니어 관점에서 검토해줘"라고 재요청하세요.
                        </div>
                        <div style="flex-shrink: 0; padding-right: 10px;">
                            <div class="view-prompt-btn" onclick="openModal('guide_review')" style="cursor: pointer; display: inline-flex; align-items: center; white-space: nowrap; font-size: 0.9rem; margin-top: 0;">예시 보기 ↗</div>
                        </div>
                    </li>
                </ul>"""

content = content.replace(old_ul, new_ul)

# Fix emojis dynamically
content = re.sub(r'<div class="feature-icon">\d.*</div>', lambda m: f'<div class="feature-icon">{m.group(0)[26]}</div>', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
