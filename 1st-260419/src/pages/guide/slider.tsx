// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Slider  } from '@/components/ui/slider';



const SliderGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Slider</h1>
        <p className={styles.description}>
          사용자가 범위를 지정하여 값을 조절할 수 있는 드래그 슬라이더입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Slider 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>defaultValue</code></td>
                  <td><code>number[]</code></td>
                  <td><code>[]</code></td>
                  <td>초기값(배열 형식)</td>
                </tr>
                <tr>
                  <td><code>value</code></td>
                  <td><code>number[]</code></td>
                  <td><code>undefined</code></td>
                  <td>제어 컴포넌트용 현재값</td>
                </tr>
                <tr>
                  <td><code>onValueChange</code></td>
                  <td><code>(value: number[]) =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>값 변경 시 콜백</td>
                </tr>
                <tr>
                  <td><code>max</code></td>
                  <td><code>number</code></td>
                  <td><code>100</code></td>
                  <td>최대값</td>
                </tr>
                <tr>
                  <td><code>step</code></td>
                  <td><code>number</code></td>
                  <td><code>1</code></td>
                  <td>한 번에 이동하는 간격</td>
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
{`import { Slider  } from '@/components/ui/slider';

// Basic Component Usage
<Slider defaultValue={[33]} max={100} step={1} className="w-[60%]" />`}
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
            
              <Slider defaultValue={[33]} max={100} step={1} className="w-[60%]" />
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Slider defaultValue={[33]} max={100} step={1} className="w-[60%]" />`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default SliderGuidePage;
