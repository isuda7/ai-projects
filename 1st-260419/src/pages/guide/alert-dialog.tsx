// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction  } from '@/components/ui/alert-dialog';
import { Button  } from '@/components/ui/button';



const AlertDialogGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>AlertDialog</h1>
        <p className={styles.description}>
          사용자의 액션을 중단시키고 확인/취소를 요구하는 중요 경고 모달 창입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            AlertDialog 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>open</code></td>
                  <td><code>boolean</code></td>
                  <td><code>undefined</code></td>
                  <td>제어 컴포넌트로 사용할 때의 열림 상태</td>
                </tr>
                <tr>
                  <td><code>defaultOpen</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>비제어 상태에서의 초기 열림 여부</td>
                </tr>
                <tr>
                  <td><code>onOpenChange</code></td>
                  <td><code>(open: boolean) =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>모달 상태 변경 시 콜백</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 프로젝트의 디자인 시스템 규칙에 맞추어 사용하세요.
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction  } from '@/components/ui/alert-dialog';
import { Button  } from '@/components/ui/button';

// Basic Component Usage
<AlertDialog>
  <AlertDialogTrigger asChild><Button>Delete Account</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone...</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
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
            
              <AlertDialog>
  <AlertDialogTrigger asChild><Button variant="outline">Delete Account</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<AlertDialog>
  <AlertDialogTrigger asChild><Button>Delete Account</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone...</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. With Custom Actions</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>버튼 스타일을 커스터마이징하여 더 명확한 시각적 단서를 제공합니다.</p>
          <div className={styles.preview}>
            
              <AlertDialog>
  <AlertDialogTrigger asChild><Button variant="destructive">Revoke Access</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Revoke Access</AlertDialogTitle>
      <AlertDialogDescription>Are you sure you want to revoke API access? The integrations will break immediately.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Keep Access</AlertDialogCancel>
      <AlertDialogAction className="bg-red-600 text-white hover:bg-red-700">Yes, Revoke</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<AlertDialogAction className="bg-red-600 text-white hover:bg-red-700">Yes, Revoke</AlertDialogAction>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default AlertDialogGuidePage;
