// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Collapsible, CollapsibleTrigger, CollapsibleContent  } from '@/components/ui/collapsible';
import { Button  } from '@/components/ui/button';
import { ChevronDown, ChevronsUpDown } from 'lucide-react';



const CollapsibleGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Collapsible</h1>
        <p className={styles.description}>
          토글 버튼을 통해 긴 내용이나 세부 사항을 접었다 폈다 할 수 있는 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Collapsible 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td>열림 상태 제어</td>
                </tr>
                <tr>
                  <td><code>onOpenChange</code></td>
                  <td><code>(open: boolean) =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>상태 변경 콜백</td>
                </tr>
                <tr>
                  <td><code>defaultOpen</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>비제어 시 초기 상태</td>
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
{`import { Collapsible, CollapsibleTrigger, CollapsibleContent  } from '@/components/ui/collapsible';
import { Button  } from '@/components/ui/button';
import { ChevronDown, ChevronsUpDown } from 'lucide-react';

// Basic Component Usage
<Collapsible>
  <div className="flex items-center justify-between">
    <h4>Title</h4>
    <CollapsibleTrigger asChild><Button variant="ghost"><ChevronsUpDown /></Button></CollapsibleTrigger>
  </div>
  <div className="content-always-visible">Always visible</div>
  <CollapsibleContent>
    <div>Hidden Content 1</div>
    <div>Hidden Content 2</div>
  </CollapsibleContent>
</Collapsible>`}
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
            
              <Collapsible className="w-[300px] space-y-2">
  <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-md shadow-sm bg-white">
    <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
    <CollapsibleTrigger asChild><Button variant="ghost" size="sm" className="w-9 p-0"><ChevronsUpDown className="h-4 w-4" /><span className="sr-only">Toggle</span></Button></CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-3 font-mono text-sm bg-slate-50">@radix-ui/primitives</div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 font-mono text-sm bg-slate-50">@radix-ui/colors</div>
    <div className="rounded-md border px-4 py-3 font-mono text-sm bg-slate-50">@stitches/react</div>
  </CollapsibleContent>
</Collapsible>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Collapsible>
  <div className="flex items-center justify-between">
    <h4>Title</h4>
    <CollapsibleTrigger asChild><Button variant="ghost"><ChevronsUpDown /></Button></CollapsibleTrigger>
  </div>
  <div className="content-always-visible">Always visible</div>
  <CollapsibleContent>
    <div>Hidden Content 1</div>
    <div>Hidden Content 2</div>
  </CollapsibleContent>
</Collapsible>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & States">
        <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Specific Target (Show Details)</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>특정 대상(상세 정보 등)만 열어서 보여주는 UI 패턴입니다.</p>
          <div className={styles.preview}>
            <Collapsible className="w-[400px] rounded-md border bg-background p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg">Transaction #8924</h4>
                  <p className="text-sm text-muted-foreground">Successful payment</p>
                </div>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm">Show details</Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="mt-4 text-sm text-muted-foreground border-t pt-4">
                <ul className="space-y-2">
                  <li className="flex justify-between"><span>Date:</span> <span>Oct 24, 2026</span></li>
                  <li className="flex justify-between"><span>Amount:</span> <span>$149.00</span></li>
                  <li className="flex justify-between"><span>Card:</span> <span>**** **** **** 4242</span></li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Expand Height (Animation)</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>숨겨진 높이만큼 부드럽게 애니메이션되며 확장되는 케이스입니다. (animate-collapsible-down/up)</p>
          <div className={styles.preview}>
            <Collapsible className="w-[400px] overflow-hidden rounded-md border bg-background shadow-sm group">
              <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-accent hover:text-accent-foreground font-semibold">
                Advanced Settings
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 border-t bg-slate-50 data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up text-sm">
                <p className="mb-2">Enable beta features</p>
                <p className="mb-2">Developer mode</p>
                <p>Delete account data</p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.3. Expand Count</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>기본 목록을 보여주고, '더보기'를 통해 숨겨진 항목들을 노출합니다.</p>
          <div className={styles.preview}>
            <Collapsible className="w-[300px] space-y-2">
              <div className="rounded-md border bg-background px-4 py-2 text-sm font-semibold">Top 2 Users</div>
              <div className="rounded-md border bg-background px-4 py-2 text-sm text-muted-foreground">1. Alice</div>
              <div className="rounded-md border bg-background px-4 py-2 text-sm text-muted-foreground">2. Bob</div>
              
              <CollapsibleContent className="space-y-2 data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                <div className="rounded-md border bg-background px-4 py-2 text-sm text-muted-foreground">3. Charlie</div>
                <div className="rounded-md border bg-background px-4 py-2 text-sm text-muted-foreground">4. Dave</div>
                <div className="rounded-md border bg-background px-4 py-2 text-sm text-muted-foreground">5. Eve</div>
              </CollapsibleContent>

              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-full text-muted-foreground text-xs">
                  Show 3 more...
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default CollapsibleGuidePage;
