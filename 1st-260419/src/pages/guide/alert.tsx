// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Alert, AlertTitle, AlertDescription  } from '@/components/ui/alert';
import { AlertCircle, Terminal } from 'lucide-react';



const AlertGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Alert</h1>
        <p className={styles.description}>
          사용자에게 중요한 메세지나 경고를 강조하여 전달합니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Alert 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>variant</code></td>
                  <td><code>"default" | "destructive"</code></td>
                  <td><code>"default"</code></td>
                  <td>알림의 시각적 형태 테마</td>
                </tr>
                <tr>
                  <td><code>className</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>커스텀 스타일링을 위한 클래스</td>
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
{`import { Alert, AlertTitle, AlertDescription  } from '@/components/ui/alert';
import { AlertCircle, Terminal } from 'lucide-react';

// Basic Component Usage
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>`}
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
            
              <Alert className="max-w-md">
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Destructive / Error</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>치명적인 오류나 경고를 나타낼 때 사용합니다.</p>
          <div className={styles.preview}>
            
              <Alert variant="destructive" className="max-w-md">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired. Please log in again to continue.</AlertDescription>
</Alert>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired...</AlertDescription>
</Alert>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default AlertGuidePage;
