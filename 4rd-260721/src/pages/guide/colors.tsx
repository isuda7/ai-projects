// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';

const ColorBlock = ({ label, hex, main }: { label: string; hex: string; main?: boolean }) => (
  <div className="flex items-center gap-4 p-4 border border-border rounded-md bg-white hover:bg-gray-50 transition-colors w-full">
    <div className="w-16 h-16 rounded-md flex items-center justify-center relative shadow-sm border border-black/10 shrink-0" style={{ backgroundColor: hex }}>
      {main && (
        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_2px_rgba(0,0,0,0.5)] absolute" />
      )}
    </div>
    <div className="flex flex-col">
      <p className="font-semibold text-sm m-0 text-gray-800 flex items-center gap-1">
        {label} {main && <span className="text-[10px]" style={{ color: hex }}>★</span>}
      </p>
      <p className="font-mono text-xs text-gray-500 m-0 mt-1 uppercase">{hex}</p>
    </div>
  </div>
);

const ColorsGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Colors</h1>
        <p className={styles.description}>
          디자인 시스템에서 사용되는 시맨틱 색상 팔레트입니다. 모든 핵심 컬러는 50부터 900까지 10단계 명도 스케일로 구성됩니다.
        </p>
      </header>

      <GuideSection title="Brand & Semantic Colors">
        <div className="flex flex-col gap-8">
          
          <div>
            <h3 className={styles.title_h3}>Primary (Brand)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorBlock label="50" hex="#f0f9ff" />
              <ColorBlock label="100" hex="#e0f2fe" />
              <ColorBlock label="200" hex="#bae6fd" />
              <ColorBlock label="300" hex="#7dd3fc" />
              <ColorBlock label="400" hex="#38bdf8" />
              <ColorBlock label="500" hex="#0ea5e9" main />
              <ColorBlock label="600" hex="#0284c7" />
              <ColorBlock label="700" hex="#0369a1" />
              <ColorBlock label="800" hex="#075985" />
              <ColorBlock label="900" hex="#0c4a6e" />
            </div>
          </div>

          <div>
            <h3 className={styles.title_h3}>Neutral (Gray)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorBlock label="50" hex="#f9fafb" />
              <ColorBlock label="100" hex="#f3f4f6" />
              <ColorBlock label="200" hex="#e5e7eb" />
              <ColorBlock label="300" hex="#d1d5db" />
              <ColorBlock label="400" hex="#9ca3af" />
              <ColorBlock label="500" hex="#6b7280" main />
              <ColorBlock label="600" hex="#4b5563" />
              <ColorBlock label="700" hex="#374151" />
              <ColorBlock label="800" hex="#1f2937" />
              <ColorBlock label="900" hex="#111827" />
            </div>
          </div>

          <div>
            <h3 className={styles.title_h3}>Success (Emerald)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorBlock label="50" hex="#ecfdf5" />
              <ColorBlock label="100" hex="#d1fae5" />
              <ColorBlock label="200" hex="#a7f3d0" />
              <ColorBlock label="300" hex="#6ee7b7" />
              <ColorBlock label="400" hex="#34d399" />
              <ColorBlock label="500" hex="#10b981" main />
              <ColorBlock label="600" hex="#059669" />
              <ColorBlock label="700" hex="#047857" />
              <ColorBlock label="800" hex="#065f46" />
              <ColorBlock label="900" hex="#064e3b" />
            </div>
          </div>

          <div>
            <h3 className={styles.title_h3}>Danger (Rose)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorBlock label="50" hex="#fff1f2" />
              <ColorBlock label="100" hex="#ffe4e6" />
              <ColorBlock label="200" hex="#fecdd3" />
              <ColorBlock label="300" hex="#fda4af" />
              <ColorBlock label="400" hex="#fb7185" />
              <ColorBlock label="500" hex="#f43f5e" main />
              <ColorBlock label="600" hex="#e11d48" />
              <ColorBlock label="700" hex="#be123c" />
              <ColorBlock label="800" hex="#9f1239" />
              <ColorBlock label="900" hex="#881337" />
            </div>
          </div>

        </div>
      </GuideSection>
    </div>
  );
};

export default ColorsGuidePage;
