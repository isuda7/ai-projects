// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Progress } from '@/components/ui/progress/progress';
import { useState, useEffect } from 'react';

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  return <Progress value={progress} className="w-[60%]" />
}

const ProgressGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Progress</h1>
        <p className={styles.description}>
          작업의 진행 상태나 소요 퍼센티지를 시각적으로 나타내는 바(Bar)입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Progress 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
          </p>
          
          <div className={styles['spec_table_wrapper']}>
            <table className={styles['spec_table']}>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>value</code></td>
                  <td><code>number</code></td>
                  <td><code>0</code></td>
                  <td>현재 진행도 퍼센트 (0~100)</td>
                </tr>
                <tr>
                  <td><code>indicatorClassName</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>내부 채워지는 바 커스텀 스타일</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 프로젝트의 디자인 시스템 규칙에 맞추어 사용하세요.
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`import { Progress } from '@/components/ui/progress/progress';
import { useState, useEffect } from 'react';

// Basic Component Usage
const [progress, setProgress] = React.useState(13)

React.useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500)
  return () => clearTimeout(timer)
}, [])

return <Progress value={progress} className="w-[60%]" />`}
              </code>
            </pre>
          </div>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
          <p className={styles.description}>
            가장 기본적인 형태의 렌더링 예제입니다.
          </p>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State</h3>
          <div className={styles.preview}>
            
              <ProgressDemo />
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`const [progress, setProgress] = React.useState(13)

React.useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500)
  return () => clearTimeout(timer)
}, [])

return <Progress value={progress} className="w-[60%]" />`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Completed State</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>100% 채워진 완료 상태입니다.</p>
          <div className={styles.preview}>
            
              <Progress value={100} className="w-full" />
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Progress value={100} className="w-full" />`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default ProgressGuidePage;
