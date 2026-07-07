// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Textarea  } from '@/components/ui/textarea';
import { Label  } from '@/components/ui/label';
import { Button  } from '@/components/ui/button';



const TextareaGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Textarea</h1>
        <p className={styles.description}>
          사용자가 여러 줄의 텍스트(예: 설명, 메시지, 코멘트)를 입력할 수 있는 입력 요소입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Textarea 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>placeholder</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>입력 필드가 비어있을 때 표시될 텍스트</td>
                </tr>
                <tr>
                  <td><code>disabled</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>입력 불가능 처리 여부</td>
                </tr>
                <tr>
                  <td><code>rows</code></td>
                  <td><code>number</code></td>
                  <td><code>undefined</code></td>
                  <td>기본으로 노출되는 줄(세로) 수</td>
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
{`import { Textarea  } from '@/components/ui/textarea';
import { Label  } from '@/components/ui/label';
import { Button  } from '@/components/ui/button';

// Basic Component Usage
<Textarea placeholder="Type your message here." />`}
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
            
              <div className="grid w-full max-w-sm items-center gap-1.5"><Label htmlFor="message">Your message</Label><Textarea placeholder="Type your message here." id="message" /></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Textarea placeholder="Type your message here." />`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. With Button (Form)</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>제출 버튼과 결합된 Textarea 폼 형태입니다.</p>
          <div className={styles.preview}>
            
              <div className="grid w-full max-w-sm gap-2"><Textarea placeholder="Type your message here." /><Button>Send message</Button></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<div className="grid w-full gap-2">
  <Textarea placeholder="Type your message here." />
  <Button>Send message</Button>
</div>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default TextareaGuidePage;
