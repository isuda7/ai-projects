// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Spinner } from '@/components/ui/spinner';

const SpinnerGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Spinner</h1>
        <p className={styles.description}>
          데이터 로딩 및 처리 중임을 나타내는 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Spinner 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>size</code></td>
                  <td><code>"sm" | "md" | "lg" | "xl"</code></td>
                  <td><code>"md"</code></td>
                  <td>로딩 스피너의 크기를 지정합니다.</td>
                </tr>
                <tr>
                  <td><code>variant</code></td>
                  <td><code>"default" | "primary" | "secondary" | "white"</code></td>
                  <td><code>"default"</code></td>
                  <td>스피너의 색상 테마를 결정합니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 버튼 내부나 전체 화면 로딩 오버레이 등에 적절한 크기로 사용하세요.
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { Spinner } from '@/components/ui/spinner';

// Basic Component Usage
<Spinner />`}
              </code>
            </pre>
          </CodeBlock>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
          <p className={styles.description}>
            가장 기본적인 형태의 렌더링 예제입니다.
          </p>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State</h3>
          <div className={styles.preview}>
            <Spinner />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<Spinner />`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Sizes</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>상황에 맞게 다양한 크기를 제공합니다.</p>
          <div className={styles.preview}>
            <div className="flex items-end gap-6">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </div>
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`}
              </code>
            </pre>
          </CodeBlock>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Colors (Variants)</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>브랜드 컬러 또는 배경색에 맞게 스피너 색상을 조절합니다.</p>
          <div className={styles.preview}>
            <div className="flex items-center gap-6">
              <Spinner variant="default" />
              <Spinner variant="primary" />
              <Spinner variant="secondary" />
              <div className="bg-gray-900 p-2 rounded-md">
                <Spinner variant="white" />
              </div>
            </div>
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<Spinner variant="default" />
<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="white" />`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default SpinnerGuidePage;
