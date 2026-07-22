const headerHTML = `
    <header>
        <div class="container">
            <nav>
                <div class="logo">VibeCoding. <span class="version-badge">v0.3</span></div>
                <ul class="nav-links">
                    <li class="dropdown">
                        <a href="index.html#about" class="dropbtn" data-menu="index">개요 <svg class="dropdown-icon" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg></a>
                        <div class="dropdown-content">
                            <a href="index.html#about">Intro</a>
                            <a href="index.html#preparation">에디터 선택</a>
                            <a href="index.html#process">전체 흐름</a>
                            <a href="index.html#practical">치트시트</a>
                            <a href="index.html#workflow">작업 사이클</a>
                            <a href="index.html#archive">자산화</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="system.html" class="dropbtn" data-menu="system">시스템 <span class="ing-badge">ING</span> <svg class="dropdown-icon" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg></a>
                        <div class="dropdown-content">
                            <a href="system.html#overview">Overview</a>
                            <a href="system.html#setup">개발환경</a>
                            <a href="system.html#architecture">구조설계</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="guide.html" class="dropbtn" data-menu="guide">산출물 <svg class="dropdown-icon" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg></a>
                        <div class="dropdown-content">
                            <a href="guide.html#dashboard">페이지리스트</a>
                            <a href="guide.html#design-system">디자인시스템</a>
                            <a href="guide.html#prototype">프로토타입</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="implementation.html" class="dropbtn" data-menu="implementation">구현/검증 <svg class="dropdown-icon"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg></a>
                        <div class="dropdown-content">
                            <a href="implementation.html#micro-prompt">마이크로 프롬프트</a>
                            <a href="implementation.html#arch-prompt">아키텍쳐 프롬프트</a>
                            <a href="implementation.html#refactor-prompt">리팩토링 프롬프트</a>
                            <a href="implementation.html#review-prompt">코드리뷰 프롬프트</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="rules.html" class="dropbtn" data-menu="rules">학습/감시 <svg class="dropdown-icon" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg></a>
                        <div class="dropdown-content">
                            <a href="rules.html#a11y">웹 접근성 (A11y)</a>
                            <a href="rules.html#custom-rules">퍼블리싱 커스텀 룰</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
`;

const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-content" style="text-align: center; color: rgba(255, 255, 255, 0.4); padding: 40px 0; border-top: 1px solid rgba(255,255,255,0.05);">
                <div class="logo" style="margin-bottom: 16px; font-size: 1.25rem; font-weight: 700; color: #fff;">
                    VibeCoding. <span class="version-badge" style="font-size: 0.7rem; background: var(--primary-color); padding: 2px 6px; border-radius: 4px; vertical-align: middle;">v0.3</span>
                </div>
                <p>&copy; 2026 VibeCoding Guide. All rights reserved.</p>
            </div>
        </div>
    </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const existingHeader = document.querySelector('header');
    if (existingHeader) {
        existingHeader.outerHTML = headerHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Set Active Menu
    const newHeader = document.querySelector('header');
    if (newHeader) {
        let currentPage = window.location.pathname.split('/').pop();
        if (!currentPage || currentPage === '') currentPage = 'index.html';
        const menuKey = currentPage.replace('.html', '');
        const activeLink = newHeader.querySelector(`[data-menu="${menuKey}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        } else if (menuKey === 'index' || currentPage === '') {
            const indexLink = newHeader.querySelector('[data-menu="index"]');
            if (indexLink) indexLink.classList.add('active');
        }
    }

    // Inject Footer
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});
