import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update modal HTML
old_modal_html = """    <!-- Modal Template -->
    <div id="promptModal" class="modal-overlay">
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <h3 id="modalTitle">제목</h3>
            <div class="modal-body">
                <p id="modalDesc">설명</p>
                <pre><code id="modalPrompt">프롬프트</code></pre>
            </div>
        </div>
    </div>"""

new_modal_html = """    <!-- Modal Template -->
    <div id="promptModal" class="modal-overlay">
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <h3 id="modalTitle">제목</h3>
            <div id="modalTabs" class="modal-tabs" style="display: none;"></div>
            <div class="modal-body">
                <p id="modalDesc">설명</p>
                <pre><code id="modalPrompt">프롬프트</code></pre>
            </div>
        </div>
    </div>"""

content = content.replace(old_modal_html, new_modal_html)

# 2. Update Javascript logic
old_js = """        function openModal(stepId) {
            const data = modalData[stepId];
            if (data) {
                modalTitle.innerText = data.title;
                modalDesc.innerText = data.desc;
                modalPrompt.innerText = data.prompt;
                modal.classList.add('active');
            }
        }"""

new_js = """        function openModal(stepId) {
            const data = modalData[stepId];
            if (data) {
                modalTitle.innerText = data.title;
                const tabsContainer = document.getElementById('modalTabs');
                
                if (data.tabs && data.tabs.length > 0) {
                    tabsContainer.style.display = 'flex';
                    tabsContainer.innerHTML = '';
                    
                    data.tabs.forEach((tab, index) => {
                        const btn = document.createElement('button');
                        btn.className = 'modal-tab-btn' + (index === 0 ? ' active' : '');
                        btn.innerText = tab.tabName;
                        btn.onclick = () => {
                            document.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
                            btn.classList.add('active');
                            modalDesc.innerText = tab.desc;
                            modalPrompt.innerText = tab.prompt;
                        };
                        tabsContainer.appendChild(btn);
                    });
                    
                    modalDesc.innerText = data.tabs[0].desc;
                    modalPrompt.innerText = data.tabs[0].prompt;
                } else {
                    if(tabsContainer) tabsContainer.style.display = 'none';
                    modalDesc.innerText = data.desc;
                    modalPrompt.innerText = data.prompt;
                }
                
                modal.classList.add('active');
            }
        }"""

content = content.replace(old_js, new_js)

# 3. Add scroll support logic for PC mouse wheel
old_end = """        // 탭 전환 로직
        function switchProcessTab(tabId, btnElement) {
            document.querySelectorAll('.process-tab').forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');
            document.querySelectorAll('.process-tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabId + '-tab').classList.add('active');
        }
    </script>
</body>
</html>"""

new_end = """        // 탭 전환 로직
        function switchProcessTab(tabId, btnElement) {
            document.querySelectorAll('.process-tab').forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');
            document.querySelectorAll('.process-tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabId + '-tab').classList.add('active');
        }

        // 탭 영역 PC 마우스 휠 가로 스크롤 지원
        const tabsContainer = document.getElementById('modalTabs');
        if (tabsContainer) {
            tabsContainer.addEventListener('wheel', (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    tabsContainer.scrollLeft += e.deltaY;
                }
            }, { passive: false });
        }
    </script>
</body>
</html>"""

content = content.replace(old_end, new_end)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
