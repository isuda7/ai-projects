// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose  } from '@/components/ui/drawer';
import { Button  } from '@/components/ui/button';



const DrawerGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Drawer</h1>
        <p className={styles.description}>
          모바일 환경에서 주로 쓰이는 하단(또는 측면) 서랍(Drawer) 모달 컴포넌트입니다. (vaul 패키지 기반)
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Drawer 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>direction</code></td>
                  <td><code>"top" | "bottom" | "left" | "right"</code></td>
                  <td><code>"bottom"</code></td>
                  <td>서랍이 나오는 방향</td>
                </tr>
                <tr>
                  <td><code>shouldScaleBackground</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>오픈 시 배경(body)을 스케일 다운할지 여부</td>
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
{`import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose  } from '@/components/ui/drawer';
import { Button  } from '@/components/ui/button';

// Basic Component Usage
<Drawer>
  <DrawerTrigger asChild><Button>Open</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
    </DrawerHeader>
    <div className="p-4">Content here</div>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
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
            
              <Drawer>
  <DrawerTrigger asChild><Button variant="outline">Open Drawer</Button></DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0 flex items-center justify-center h-32">
        <span className="text-5xl font-bold tracking-tighter">350 <span className="text-[0.70rem] uppercase text-muted-foreground">CAL/DAY</span></span>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<Drawer>
  <DrawerTrigger asChild><Button>Open</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
    </DrawerHeader>
    <div className="p-4">Content here</div>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default DrawerGuidePage;
