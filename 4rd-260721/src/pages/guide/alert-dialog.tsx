// @ts-nocheck
import React, { useState } from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { AlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const AlertDialogGuidePage = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const [openCustom, setOpenCustom] = useState(false);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>AlertDialog</h1>
        <p className={styles.description}>
          사용자에게 중요한 확인을 요청하거나 경고를 보여줄 때 화면 중앙에 나타나는 모달입니다.
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
                  <td><code>open</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>다이얼로그의 노출 여부를 제어합니다.</td>
                </tr>
                <tr>
                  <td><code>onOpenChange</code></td>
                  <td><code>(open: boolean) ={'>'} void</code></td>
                  <td><code>-</code></td>
                  <td>열림/닫힘 상태가 변경될 때 호출됩니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State</h3>
          <div className={styles.preview}>
            <Button onClick={() => setOpenBasic(true)}>Show Dialog</Button>
            
            <AlertDialog 
              open={openBasic}
              onOpenChange={setOpenBasic}
              title="Are you absolutely sure?"
              description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
              cancelText="Cancel"
              actionText="Continue"
            />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { AlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show Dialog</Button>
<AlertDialog 
  open={open}
  onOpenChange={setOpen}
  title="Are you absolutely sure?"
  description="This action cannot be undone."
/>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & States">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. With Custom Actions</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>액션 버튼 영역을 직접 커스터마이징할 수 있습니다.</p>
          <div className={styles.preview}>
            <Button variant="outline" onClick={() => setOpenCustom(true)}>Delete Item</Button>
            
            <AlertDialog 
              open={openCustom}
              onOpenChange={setOpenCustom}
              title="Delete Document"
              description="Are you sure you want to delete this document? You won't be able to recover it."
            >
              <Button variant="outline" onClick={() => setOpenCustom(false)} className="mt-2 sm:mt-0">Cancel</Button>
              <Button variant="solid" className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setOpenCustom(false)}>Yes, delete it</Button>
            </AlertDialog>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default AlertDialogGuidePage;
