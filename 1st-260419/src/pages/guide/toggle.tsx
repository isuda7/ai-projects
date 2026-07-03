// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Toggle } from '@/components/ui/toggle/toggle';
import { Bold, Italic } from 'lucide-react';



const ToggleGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Toggle</h1>
        <p className={styles.description}>
          클릭할 때마다 켜짐(Pressed)/꺼짐(Unpressed) 상태가 반전되는 단일 버튼입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Toggle 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>pressed</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>토글 버튼의 눌림(활성화) 상태</td>
                </tr>
                <tr>
                  <td><code>onPressedChange</code></td>
                  <td><code>(pressed: boolean) =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>상태 변화 시 호출</td>
                </tr>
                <tr>
                  <td><code>variant</code></td>
                  <td><code>"default" | "outline"</code></td>
                  <td><code>"default"</code></td>
                  <td>스타일 지정</td>
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
{`import { Toggle } from '@/components/ui/toggle/toggle';
import { Bold, Italic } from 'lucide-react';

// Basic Component Usage
<Toggle aria-label="Toggle italic"><Bold className="h-4 w-4" /></Toggle>`}
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
            
              <Toggle aria-label="Toggle italic"><Bold className="h-4 w-4" /></Toggle>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Toggle aria-label="Toggle italic"><Bold className="h-4 w-4" /></Toggle>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Outline Variant with Text</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>아이콘과 텍스트가 결합된 Outline 토글 버튼입니다.</p>
          <div className={styles.preview}>
            
              <Toggle variant="outline" aria-label="Toggle italic"><Italic className="mr-2 h-4 w-4" /> Italic</Toggle>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Toggle variant="outline" aria-label="Toggle italic"><Italic className="mr-2 h-4 w-4" /> Italic</Toggle>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default ToggleGuidePage;
