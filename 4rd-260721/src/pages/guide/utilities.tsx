// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';

const UtilityBlock = ({ title, classNameText, children, description }: any) => (
  <div className="mb-6 p-5 bg-gray-50 rounded-lg border border-border">
    <h4 className="text-lg font-bold mb-1 text-gray-900 flex items-center gap-2">
      {title} <span className="text-primary text-sm font-mono bg-blue-50 px-2 py-0.5 rounded">.{classNameText}</span>
    </h4>
    {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
    <div className="p-4 bg-white rounded-md border border-dashed border-gray-300 min-h-[80px]">
      {children}
    </div>
  </div>
);

const UtilitiesGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Utilities</h1>
        <p className={styles.description}>
          프로젝트 전역에서 공통으로 사용되는 레이아웃 및 정렬 유틸리티 클래스 모음입니다. (Tailwind CSS 기반)
        </p>
      </header>

      <GuideSection title="1. Width (너비)">
        <UtilityBlock 
          title="고정 너비 (Fixed Width)" 
          classNameText="w-[px] (e.g. w-[100px], w-40)"
          description="Tailwind의 기본 w-{size} 스케일이나 Arbitrary value(w-[픽셀])를 사용합니다."
        >
          <div className="flex flex-col gap-2">
            <div className="bg-primary/20 text-primary-foreground text-center py-1 w-[100px]">w-[100px]</div>
            <div className="bg-primary/40 text-primary-foreground text-center py-1 w-[200px]">w-[200px]</div>
            <div className="bg-primary/60 text-primary-foreground text-center py-1 w-64">w-64 (256px)</div>
          </div>
        </UtilityBlock>
        
        <UtilityBlock 
          title="퍼센트 너비 (Percentage Width)" 
          classNameText="w-{fraction} (e.g. w-1/2, w-full)"
          description="Tailwind의 백분율 기반 너비 유틸리티를 사용합니다."
        >
          <div className="flex flex-col gap-2 w-full bg-gray-100 p-2 rounded">
            <div className="bg-emerald-500 text-white text-center py-1 w-1/4">w-1/4 (25%)</div>
            <div className="bg-emerald-500 text-white text-center py-1 w-1/2">w-1/2 (50%)</div>
            <div className="bg-emerald-500 text-white text-center py-1 w-full">w-full (100%)</div>
          </div>
        </UtilityBlock>
      </GuideSection>

      <GuideSection title="2. Grid Layout (그리드)">
        <UtilityBlock 
          title="CSS Grid" 
          classNameText="grid grid-cols-{n} gap-{size}"
          description="그리드 레이아웃과 열(Column), 간격(Gap)을 쉽게 지정할 수 있습니다."
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 h-16 flex items-center justify-center rounded">Col 1</div>
            <div className="bg-gray-200 h-16 flex items-center justify-center rounded">Col 2</div>
            <div className="bg-gray-200 h-16 flex items-center justify-center rounded">Col 3</div>
          </div>
        </UtilityBlock>
      </GuideSection>

      <GuideSection title="3. Alignment (정렬)">
        <UtilityBlock 
          title="Flexbox Alignment" 
          classNameText="items-center justify-center"
          description="텍스트 또는 박스를 Flexbox를 활용해 중앙, 상하좌우 정렬합니다."
        >
          <div className="flex items-center justify-center h-32 bg-gray-100 border border-gray-300 rounded">
            <div className="bg-white px-4 py-2 rounded shadow-sm border border-border">Centered Item</div>
          </div>
        </UtilityBlock>
      </GuideSection>
    </div>
  );
};

export default UtilitiesGuidePage;
