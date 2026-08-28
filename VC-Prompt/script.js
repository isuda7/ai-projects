const headerHTML = `
    <header class="glass-header">
        <div class="logo">
            <span class="icon">✨</span>
            <h1>Prompt <span>Convention</span></h1>
        </div>
        <nav>
            <ul>
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="mindmap.html" id="nav-mindmap">Mindmap</a></li>
                <li><a href="playbook.html" id="nav-playbook">Playbook</a></li>
                <li><a href="academy.html" id="nav-academy">Academy</a></li>
                <li><a href="reference.html" id="nav-reference">Reference</a></li>
            </ul>
        </nav>
    </header>
`;

const footerHTML = `
    <footer>
        <p>© 2026 Prompt Convention Project. Built with Advanced AI Assistance.</p>
    </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header and Footer
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    // Highlight active menu based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = {
        'index.html': 'nav-home',
        'mindmap.html': 'nav-mindmap',
        'playbook.html': 'nav-playbook',
        'reference.html': 'nav-reference'
    };
    
    const activeId = navLinks[currentPage];
    if (activeId) {
        const activeElement = document.getElementById(activeId);
        if (activeElement) {
            activeElement.classList.add('active');
        }
    }
});
