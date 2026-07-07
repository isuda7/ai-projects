// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose  } from '@/components/ui/dialog';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';
import { Copy } from 'lucide-react';



const DialogGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Dialog</h1>
        <p className={styles.description}>
          현재 페이지 위에 컨텐츠를 오버레이하여 보여주는 모달 다이얼로그 창입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Dialog 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>false</code></td>
                  <td>다이얼로그 열림 상태 (제어)</td>
                </tr>
                <tr>
                  <td><code>onOpenChange</code></td>
                  <td><code>(open: boolean) =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>상태 변경 콜백 함수</td>
                </tr>
                <tr>
                  <td><code>modal</code></td>
                  <td><code>boolean</code></td>
                  <td><code>true</code></td>
                  <td>배경 클릭이나 포커스 트랩 여부</td>
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
{`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose  } from '@/components/ui/dialog';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';
import { Copy } from 'lucide-react';

// Basic Component Usage
<Dialog>
  <DialogTrigger asChild><Button>Edit Profile</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Description goes here.</DialogDescription>
    </DialogHeader>
    <div>Form content...</div>
    <DialogFooter><Button>Save changes</Button></DialogFooter>
  </DialogContent>
</Dialog>`}
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
            
              <Dialog>
  <DialogTrigger asChild><Button variant="outline">Edit Profile</Button></DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="name" className="text-right">Name</Label><Input id="name" defaultValue="Pedro Duarte" className="col-span-3" /></div>
      <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="username" className="text-right">Username</Label><Input id="username" defaultValue="@peduarte" className="col-span-3" /></div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Dialog>
  <DialogTrigger asChild><Button>Edit Profile</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Description goes here.</DialogDescription>
    </DialogHeader>
    <div>Form content...</div>
    <DialogFooter><Button>Save changes</Button></DialogFooter>
  </DialogContent>
</Dialog>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Custom Close Button</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>Footer 내부에 DialogClose 컴포넌트를 사용하여 직접 닫기 버튼을 구성할 수 있습니다.</p>
          <div className={styles.preview}>
            
              <Dialog>
  <DialogTrigger asChild><Button variant="outline">Share Link</Button></DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader><DialogTitle>Share link</DialogTitle><DialogDescription>Anyone who has this link will be able to view this.</DialogDescription></DialogHeader>
    <div className="flex items-center space-x-2">
      <div className="grid flex-1 gap-2"><Label htmlFor="link" className="sr-only">Link</Label><Input id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly /></div>
      <Button type="submit" size="sm" className="px-3"><span className="sr-only">Copy</span><Copy className="h-4 w-4" /></Button>
    </div>
    <DialogFooter className="sm:justify-start">
      <DialogClose asChild><Button type="button" variant="secondary">Close</Button></DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<DialogFooter className="sm:justify-start">
  <DialogClose asChild><Button type="button" variant="secondary">Close</Button></DialogClose>
</DialogFooter>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default DialogGuidePage;
