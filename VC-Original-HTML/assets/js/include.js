/**
 * include.js
 * HTML 템플릿(헤더, 푸터, 사이드바 등)을 동적으로 로드하여 공통 관리하기 위한 스크립트.
 * [data-include="경로"] 속성을 가진 요소를 찾아 HTML을 fetch 후 치환합니다.
 */

document.addEventListener("DOMContentLoaded", () => {
  includeHTML();
});

async function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  const promises = Array.from(elements).map(async (el) => {
    const file = el.getAttribute("data-include");
    if (!file) return;

    try {
      const response = await fetch(file);
      if (response.ok) {
        const html = await response.text();
        el.outerHTML = html;
      } else {
        console.error(`Error loading include: ${file} (Status: ${response.status})`);
        el.innerHTML = `<div>Error loading template: ${file}</div>`;
      }
    } catch (error) {
      console.error(`Fetch error for include: ${file}`, error);
    }
  });

  // Wait for all includes to finish
  await Promise.all(promises);

  // After all includes are loaded, update active navigation states
  updateActiveNav();
  updateGlobalGnb();
  updateGlobalLogo();
  initCodeBlocks();
}

function updateActiveNav() {
  const currentPath = window.location.pathname;
  let filename = currentPath.split('/').pop() || 'index.html';
  
  const navLinks = document.querySelectorAll('.guide-nav a');
  navLinks.forEach(link => {
    link.removeAttribute('style');
    link.classList.remove('active');
    
    const linkHref = link.getAttribute('href');
    if (linkHref && linkHref.endsWith(filename)) {
      link.style.color = '#2563eb';
      link.style.fontWeight = '700';
    }
  });
}

function updateGlobalGnb() {
  const currentPath = window.location.pathname;
  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get('view');
  
  const gnbLinks = document.querySelectorAll('.global-gnb .gnb-link');
  
  gnbLinks.forEach(link => {
    link.classList.remove('active');
    const target = link.getAttribute('data-target');
    
    if (currentPath.endsWith('index.html') || currentPath === '/') {
      // Dashboard view
      if (target === 'front' && view === 'front') {
        link.classList.add('active');
      } else if (target === 'guide' && view !== 'front') {
        link.classList.add('active');
      }
    }
    // Subpage view에서는 헤더의 링크가 대시보드를 가리키므로 활성화하지 않음
  });
}

function updateGlobalLogo() {
  const currentPath = window.location.pathname;
  const logoLink = document.querySelector('.global-header .logo a');
  
  if (logoLink) {
    if (currentPath.endsWith('index.html') || currentPath === '/') {
      logoLink.textContent = 'Dashboard';
    } else {
      logoLink.textContent = 'Design System';
    }
  }
}

function initCodeBlocks() {
  const codeBlocks = document.querySelectorAll('.code_block');
  codeBlocks.forEach((block, index) => {
    // If it's already wrapped, skip
    if (block.parentElement.classList.contains('collapse')) return;

    const id = `codeBlock-${index}`;
    
    // Create wrapper
    const collapseWrapper = document.createElement('div');
    collapseWrapper.className = 'collapse';
    collapseWrapper.id = id;

    // Create button container for alignment
    const btnContainer = document.createElement('div');
    btnContainer.style.width = '100%';
    btnContainer.style.marginBottom = '8px';

    // Create button
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn_outline';
    btn.setAttribute('data-bs-toggle', 'collapse');
    btn.setAttribute('data-bs-target', `#${id}`);
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'View Code';

    // Block button styling
    btn.style.width = '100%';
    btn.style.display = 'block';
    btn.style.fontSize = '13px';
    btn.style.padding = '8px 16px';
    btn.style.color = '#4b5563';
    btn.style.backgroundColor = '#f9fafb';
    btn.style.borderColor = '#e5e7eb';
    btn.style.fontWeight = '500';
    btn.style.transition = 'background-color 0.2s';
    
    // Add simple hover effect manually since it's inline styled heavily
    btn.addEventListener('mouseover', () => btn.style.backgroundColor = '#f3f4f6');
    btn.addEventListener('mouseout', () => btn.style.backgroundColor = '#f9fafb');
    
    // Listen to collapse events to change text
    collapseWrapper.addEventListener('show.bs.collapse', () => {
      btn.textContent = 'Hide Code';
    });
    collapseWrapper.addEventListener('hide.bs.collapse', () => {
      btn.textContent = 'View Code';
    });

    btnContainer.appendChild(btn);

    // Insert button container before block
    block.parentNode.insertBefore(btnContainer, block);
    // Move block into wrapper
    block.parentNode.insertBefore(collapseWrapper, block);
    collapseWrapper.appendChild(block);
  });
}
