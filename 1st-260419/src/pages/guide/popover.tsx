// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Popover, PopoverTrigger, PopoverContent  } from '@/components/ui/popover';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';



const PopoverGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Popover</h1>
        <p className={styles.description}>
          버튼 등의 요소를 클릭했을 때 복잡한 컨텐츠를 담은 팝업 레이어를 띄웁니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Popover 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td>팝오버 열림 상태</td>
                </tr>
                <tr>
                  <td><code>modal</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>배경 상호작용 차단 및 포커스 트랩 여부</td>
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
{`import { Popover, PopoverTrigger, PopoverContent  } from '@/components/ui/popover';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';

// Basic Component Usage
<Popover>
  <PopoverTrigger asChild><Button variant="outline">Open Popover</Button></PopoverTrigger>
  <PopoverContent>
    <div>Popover Content (Forms, Inputs, etc.)</div>
  </PopoverContent>
</Popover>`}
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
            
              <Popover>
  <PopoverTrigger asChild><Button variant="outline">Open Popover</Button></PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4"><Label htmlFor="width">Width</Label><Input id="width" defaultValue="100%" className="col-span-2 h-8" /></div>
        <div className="grid grid-cols-3 items-center gap-4"><Label htmlFor="maxWidth">Max. width</Label><Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" /></div>
      </div>
    </div>
  </PopoverContent>
</Popover>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<Popover>
  <PopoverTrigger asChild><Button variant="outline">Open Popover</Button></PopoverTrigger>
  <PopoverContent>
    <div>Popover Content (Forms, Inputs, etc.)</div>
  </PopoverContent>
</Popover>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default PopoverGuidePage;
