const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');
const dom = new JSDOM(html, { runScripts: "outside-only" });

// Mock IntersectionObserver
dom.window.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
};

dom.window.eval(js);

// Remove the manual DOMContentLoaded dispatch to see if it was already fired
setTimeout(() => {
    const document = dom.window.document;
    
    const headers = document.querySelectorAll('.category-header');
    
    // Check initial state
    let activeCount = document.querySelectorAll('.category-section.active').length;
    console.log("Initial active sections:", activeCount);
    
    // Click second header
    headers[1].click();
    
    activeCount = document.querySelectorAll('.category-section.active').length;
    console.log("Active sections after clicking 2nd:", activeCount);
    console.log("Is 2nd section active?", headers[1].closest('.category-section').classList.contains('active'));
    
}, 100);
