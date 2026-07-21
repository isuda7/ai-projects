// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import Checkbox from '@/components/ui/checkbox';

const CheckboxGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Checkbox</h1>
        <p className={styles.description}>
          다중 선택이 가능한 옵션을 제공할 때 사용하는 폼 컨트롤입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
        <div className={styles.spec_table_wrapper}>
          <table className={styles.spec_table}>
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
                <td><code>label</code></td>
                <td><code>string</code></td>
                <td><code>undefined</code></td>
                <td>체크박스 우측 레이블 텍스트</td>
              </tr>
              <tr>
                <td><code>description</code></td>
                <td><code>string</code></td>
                <td><code>undefined</code></td>
                <td>레이블 하단의 보조 설명 텍스트</td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>에러 상태(적색 테두리) 표시 여부</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock>
          <pre>
            <code>
{`import Checkbox from '@/components/ui/checkbox';

<Checkbox label="Accept terms and conditions" />`}
            </code>
          </pre>
        </CodeBlock>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default</h3>
          <div className={styles.preview}>
            <Checkbox label="Remember me" />
          </div>
        </div>
      </GuideSection>

      <GuideSection title="3. Descriptions & States">
        <div className={styles.sub_section}>
          
          <h3 className={styles.title_h3}>3.1. With Description</h3>
          <div className={styles.preview}>
            <Checkbox 
              label="Subscribe to newsletter" 
              description="Get the latest updates and offers delivered directly to your inbox."
            />
          </div>

          <h3 className={styles.title_h3} style={{ marginTop: '24px' }}>3.2. States</h3>
          <div className={styles.preview} style={{ flexDirection: 'column', gap: '20px' }}>
            <Checkbox label="Disabled uncheked" disabled />
            <Checkbox label="Disabled checked" disabled checked readOnly />
            <Checkbox label="Error state" error />
          </div>

        </div>
      </GuideSection>
    </div>
  );
};

export default CheckboxGuidePage;
