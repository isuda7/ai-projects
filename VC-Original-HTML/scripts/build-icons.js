const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../assets/icons/src');
const OUTPUT_FILE = path.join(__dirname, '../assets/icons/sprite.svg');

function buildSprite() {
  console.log('🔄 SVG 아이콘 빌드를 시작합니다...');
  
  if (!fs.existsSync(SRC_DIR)) {
    console.error('❌ 에러: 원본 아이콘 폴더를 찾을 수 없습니다.', SRC_DIR);
    return;
  }

  const files = fs.readdirSync(SRC_DIR).filter(file => file.endsWith('.svg'));
  
  if (files.length === 0) {
    console.log('⚠️ 원본 폴더에 SVG 파일이 없습니다.');
    return;
  }

  let spriteContent = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n`;

  files.forEach(file => {
    const name = path.basename(file, '.svg');
    const filePath = path.join(SRC_DIR, file);
    let svgContent = fs.readFileSync(filePath, 'utf-8');

    // <svg ...> 태그를 <symbol id="icon-파일명" ...> 으로 변환
    svgContent = svgContent.replace(
      /<svg([^>]*)>/,
      (match, p1) => {
        // xmlns 속성 제거 (symbol에는 불필요)
        const cleanedAttrs = p1.replace(/\sxmlns="[^"]*"/, '');
        return `  <symbol id="icon-${name}"${cleanedAttrs}>`;
      }
    );
    
    // </svg> 를 </symbol> 로 변환
    svgContent = svgContent.replace(/<\/svg>/, '</symbol>\n');

    spriteContent += svgContent;
    console.log(`  ✓ 추가됨: icon-${name}`);
  });

  spriteContent += `</svg>\n`;

  // 기존 파일 덮어쓰기
  fs.writeFileSync(OUTPUT_FILE, spriteContent, 'utf-8');
  console.log(`\n🎉 성공! 총 ${files.length}개의 아이콘이 하나의 sprite.svg로 빌드되었습니다.`);
}

buildSprite();
