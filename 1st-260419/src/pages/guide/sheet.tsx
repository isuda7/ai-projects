// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet/sheet';
import { Button } from '@/components/ui/button/button';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label/label';



const SheetGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Sheet</h1>
        <p className={styles.description}>
          화면의 한쪽 측면에서 슬라이드 되어 나오는 패널(Drawer/Offcanvas)입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Sheet 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>side</code></td>
                  <td><code>"top" | "bottom" | "left" | "right"</code></td>
                  <td><code>"right"</code></td>
                  <td>시트가 등장하는 방향</td>
                </tr>
                <tr>
                  <td><code>open</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>제어 컴포넌트로 사용할 때의 열림 상태</td>
                </tr>
                <tr>
                  <td><code>onOpenChange</code></td>
                  <td><code>(open: boolean) =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>열림/닫힘 상태 변경 콜백</td>
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
{`import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet/sheet';
import { Button } from '@/components/ui/button/button';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label/label';

// Basic Component Usage
<Sheet>
  <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
    <div>Form content goes here...</div>
    <SheetFooter>
      <SheetClose asChild><Button type="submit">Save changes</Button></SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
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
            
              <Sheet>
  <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="name" className="text-right">Name</Label><Input id="name" defaultValue="Pedro Duarte" className="col-span-3" /></div>
      <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="username" className="text-right">Username</Label><Input id="username" defaultValue="@peduarte" className="col-span-3" /></div>
    </div>
    <SheetFooter>
      <SheetClose asChild><Button type="submit">Save changes</Button></SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Sheet>
  <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
    <div>Form content goes here...</div>
    <SheetFooter>
      <SheetClose asChild><Button type="submit">Save changes</Button></SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Side: Left</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>왼쪽에서 오른쪽으로 튀어나오는 메뉴 시트입니다.</p>
          <div className={styles.preview}>
            
              <Sheet>
  <SheetTrigger asChild><Button variant="outline" className="mr-2">Left Side</Button></SheetTrigger>
  <SheetContent side="left"><SheetHeader><SheetTitle>Left Panel</SheetTitle></SheetHeader><div className="py-4">Content aligned to the left.</div></SheetContent>
</Sheet>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<SheetContent side="left">...</SheetContent>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default SheetGuidePage;
