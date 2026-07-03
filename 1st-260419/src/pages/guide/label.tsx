// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Label } from '@/components/ui/label/label';
import { Input } from '@/components/ui/input/input';
import { Checkbox } from '@/components/ui/checkbox/checkbox';



const LabelGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Label</h1>
        <p className={styles.description}>
          폼 입력 필드와 연결되어 접근성을 향상시키는 텍스트 레이블 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Label 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>htmlFor</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>연결할 대상 input 요소의 ID</td>
                </tr>
                <tr>
                  <td><code>asChild</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>자식 요소로 렌더링할지 여부</td>
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
{`import { Label } from '@/components/ui/label/label';
import { Input } from '@/components/ui/input/input';
import { Checkbox } from '@/components/ui/checkbox/checkbox';

// Basic Component Usage
<div className="flex flex-col space-y-2 w-[300px]">
  <Label htmlFor="email">Email address</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
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
            
              <div className="flex flex-col space-y-2 w-[300px]"><Label htmlFor="email">Email address</Label><Input type="email" id="email" placeholder="Email" /></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<div className="flex flex-col space-y-2 w-[300px]">
  <Label htmlFor="email">Email address</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. With Checkbox</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>체크박스와 같은 인라인 요소와 함께 사용될 때 flex 레이아웃을 사용합니다.</p>
          <div className={styles.preview}>
            
              <div className="flex items-center space-x-2"><Checkbox id="terms" /><Label htmlFor="terms">Accept terms and conditions</Label></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default LabelGuidePage;
