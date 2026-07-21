// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';

const TypeRow = ({ name, size, weight, sample }: { name: string; size: number; weight: number; sample: string }) => (
  <div className="flex flex-col md:flex-row gap-6 p-4 border-b border-border last:border-0 hover:bg-gray-50 transition-colors">
    <div className="w-[180px] shrink-0 flex flex-col">
      <span className="font-semibold text-gray-900">{name}</span>
      <span className="text-xs text-gray-500 font-mono mt-1">
        {size}px / W{weight}
      </span>
    </div>
    <div
      className="flex-1 text-gray-800 truncate"
      style={{ fontSize: `${size}px`, fontWeight: weight, lineHeight: 1.5 }}
    >
      {sample}
    </div>
  </div>
);

const TypographyGuidePage = () => {
  const sampleText = 'The quick brown fox jumps over the lazy dog. 디자인 시스템 가이드입니다.';

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Typography</h1>
        <p className={styles.description}>
          용도별로 세분화된 4단계 타이포그래피 스케일(Headline, Title, Body, Label)을 정의합니다.
        </p>
      </header>

      <GuideSection title="1. Headline (20~36px)">
        <div className="border border-border rounded-md">
          <TypeRow name="Headline 1" size={36} weight={800} sample={sampleText} />
          <TypeRow name="Headline 2" size={30} weight={700} sample={sampleText} />
          <TypeRow name="Headline 3" size={24} weight={700} sample={sampleText} />
          <TypeRow name="Headline 4" size={20} weight={600} sample={sampleText} />
        </div>
      </GuideSection>

      <GuideSection title="2. Title (14~18px)">
        <div className="border border-border rounded-md">
          <TypeRow name="Title 1" size={18} weight={600} sample={sampleText} />
          <TypeRow name="Title 2" size={16} weight={600} sample={sampleText} />
          <TypeRow name="Title 3" size={14} weight={600} sample={sampleText} />
        </div>
      </GuideSection>

      <GuideSection title="3. Body (14~18px)">
        <div className="border border-border rounded-md">
          <TypeRow name="Body 1 (Large)" size={18} weight={400} sample={sampleText} />
          <TypeRow name="Body 2 (Base)" size={16} weight={400} sample={sampleText} />
          <TypeRow name="Body 3 (Small)" size={14} weight={400} sample={sampleText} />
        </div>
      </GuideSection>

      <GuideSection title="4. Label (10~13px)">
        <div className="border border-border rounded-md">
          <TypeRow name="Label 1" size={13} weight={500} sample={sampleText} />
          <TypeRow name="Label 2" size={12} weight={500} sample={sampleText} />
          <TypeRow name="Label 3 (Tiny)" size={10} weight={500} sample={sampleText} />
        </div>
      </GuideSection>

    </div>
  );
};

export default TypographyGuidePage;
