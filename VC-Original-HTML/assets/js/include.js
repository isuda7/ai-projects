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
  
  // Initialize Bootstrap Tooltips and Popovers if Bootstrap exists
  if (typeof bootstrap !== 'undefined') {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => {
      const isAlways = tooltipTriggerEl.getAttribute('data-bs-show') === 'always';
      const tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
        trigger: isAlways ? 'manual' : 'hover focus'
      });
      if (isAlways) tooltip.show();
      return tooltip;
    });

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
  }
}

function updateActiveNav() {
  const currentPath = window.location.pathname;
  let filename = currentPath.split('/').pop() || 'index.html';
  
  const navLinks = document.querySelectorAll('.guide_nav a');
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
  
  const gnbLinks = document.querySelectorAll('.guide_gnb .gnb_link');
  
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
  const logoLink = document.querySelector('.guide_topbar .logo a');
  
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

    // Create main wrapper to hold both the button and the collapsing code block
    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'code_block_wrapper';

    // Transfer all margin utility classes from block to mainWrapper
    // to preserve external spacing without breaking internal layout
    const marginClasses = Array.from(block.classList).filter(cls => /^m[tyb]?-/.test(cls));
    marginClasses.forEach(cls => {
      block.classList.remove(cls);
      mainWrapper.classList.add(cls);
    });

    // Explicitly remove margins from the collapsing child to guarantee smooth animation
    block.style.marginTop = '0';
    block.style.marginBottom = '0';

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

    // Insert mainWrapper into the DOM
    block.parentNode.insertBefore(mainWrapper, block);
    
    // Move components into the mainWrapper
    mainWrapper.appendChild(btnContainer);
    mainWrapper.appendChild(collapseWrapper);
    collapseWrapper.appendChild(block);

    // Create Copy Button
    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'code_copy_btn';
    copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
    copyBtn.setAttribute('title', 'Copy code');
    copyBtn.setAttribute('aria-label', 'Copy code');
    
    copyBtn.addEventListener('click', async () => {
      const codeEl = block.querySelector('code');
      const codeText = codeEl ? codeEl.innerText.trim() : block.innerText.trim();
      
      try {
        await navigator.clipboard.writeText(codeText);
        copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        copyBtn.style.color = '#10b981'; // Success color
        copyBtn.style.borderColor = '#10b981';
        setTimeout(() => {
          copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
    
    block.style.position = 'relative';
    block.appendChild(copyBtn);
  });
}

