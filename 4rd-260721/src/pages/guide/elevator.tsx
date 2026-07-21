// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';

const ElevatorBlock = ({ level, varName }: { level: number; varName: string }) => (
  <div 
    className="bg-white p-6 rounded-lg min-w-[200px] flex flex-col items-center justify-center border border-transparent"
    style={{ boxShadow: `var(${varName})` }}
  >
    <p className="font-semibold text-gray-900 m-0">Level {level}</p>
    <p className="text-xs text-gray-500 font-mono m-0 mt-1">{varName}</p>
  </div>
);

const ElevatorGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Elevator (Elevation)</h1>
        <p className={styles.description}>
          UI 요소들의 Z축 깊이감을 나타내는 5단계 그림자 스케일 가이드입니다.
        </p>
      </header>

      <GuideSection title="Shadow Levels">
        <div className="flex flex-wrap gap-8 p-8 bg-gray-50 rounded-md border border-border">
          <ElevatorBlock level={1} varName="--shadow-elevator-1" />
          <ElevatorBlock level={2} varName="--shadow-elevator-2" />
          <ElevatorBlock level={3} varName="--shadow-elevator-3" />
          <ElevatorBlock level={4} varName="--shadow-elevator-4" />
          <ElevatorBlock level={5} varName="--shadow-elevator-5" />
        </div>
        
        <CodeBlock>
          <pre>
            <code>
{`// Tailwind CSS 클래스 사용 시:
<div className="shadow-md">...</div>

// CSS 커스텀 속성 사용 시:
box-shadow: var(--shadow-elevator-2);`}
            </code>
          </pre>
        </CodeBlock>
      </GuideSection>
    </div>
  );
};

export default ElevatorGuidePage;
