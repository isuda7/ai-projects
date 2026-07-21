// @ts-nocheck
import React from 'react';
import { AlertCircle, Terminal, CheckCircle, Info } from 'lucide-react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Alert } from '@/components/ui/alert';

const AlertGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Alert</h1>
        <p className={styles.description}>
          사용자의 주의를 환기시키는 중요한 메시지나 피드백을 전달하는 컴포넌트입니다.
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
                  <td><code>variant</code></td>
                  <td><code>'default' | 'destructive' | 'success' | 'warning' | 'info'</code></td>
                  <td><code>'default'</code></td>
                  <td>얼럿의 성격과 색상을 지정합니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State</h3>
          <div className={styles.preview}>
            <div className="w-full max-w-xl">
              <Alert icon={<Terminal className="h-4 w-4" />} title="Heads up!">
                You can add components to your app using the cli.
              </Alert>
            </div>
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { Alert } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

<Alert icon={<Terminal className="h-4 w-4" />} title="Heads up!">
  You can add components to your app using the cli.
</Alert>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & States">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Destructive / Error</h3>
          <div className={styles.preview}>
            <div className="w-full max-w-xl">
              <Alert variant="destructive" icon={<AlertCircle className="h-4 w-4" />} title="Error">
                Your session has expired. Please log in again.
              </Alert>
            </div>
          </div>
        </div>
        
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Success & Info</h3>
          <div className={styles.preview_column}>
            <div className="w-full max-w-xl">
              <Alert variant="success" icon={<CheckCircle className="h-4 w-4" />} title="Success">
                Your data has been saved successfully.
              </Alert>
            </div>
            <div className="w-full max-w-xl mt-4">
              <Alert variant="info" icon={<Info className="h-4 w-4" />} title="Information">
                There is a new update available for your application.
              </Alert>
            </div>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default AlertGuidePage;
