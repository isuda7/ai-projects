// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider  } from '@/components/ui/tooltip';
import { Button  } from '@/components/ui/button';
import { Plus } from 'lucide-react';



const TooltipGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Tooltip</h1>
        <p className={styles.description}>
          마우스가 대상 요소 위에 머무를 때(Hover) 부가적인 설명을 텍스트 풍선으로 보여줍니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Tooltip 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>delayDuration</code></td>
                  <td><code>number</code></td>
                  <td><code>700</code></td>
                  <td>&lt;TooltipProvider&gt; 속성: 툴팁이 뜰 때까지의 지연 시간(ms)</td>
                </tr>
                <tr>
                  <td><code>side</code></td>
                  <td><code>"top" | "bottom" | "left" | "right"</code></td>
                  <td><code>"top"</code></td>
                  <td>&lt;TooltipContent&gt; 속성: 표시 위치</td>
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
{`import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider  } from '@/components/ui/tooltip';
import { Button  } from '@/components/ui/button';
import { Plus } from 'lucide-react';

// Basic Component Usage
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button variant="outline">Hover</Button></TooltipTrigger>
    <TooltipContent>
      <p>Tooltip description</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
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
            
              <TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" size="icon"><Plus className="h-4 w-4" /><span className="sr-only">Add</span></Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button variant="outline">Hover</Button></TooltipTrigger>
    <TooltipContent>
      <p>Tooltip description</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & States">
        <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Direction Cases</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>툴팁이 나타나는 방향을 제어할 수 있습니다.</p>
          <div className={styles.preview}>
            <TooltipProvider>
              <div className="flex flex-wrap gap-4">
                <Tooltip>
                  <TooltipTrigger asChild><Button variant="outline">Top</Button></TooltipTrigger>
                  <TooltipContent side="top"><p>Tooltip on Top</p></TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild><Button variant="outline">Bottom</Button></TooltipTrigger>
                  <TooltipContent side="bottom"><p>Tooltip on Bottom</p></TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild><Button variant="outline">Left</Button></TooltipTrigger>
                  <TooltipContent side="left"><p>Tooltip on Left</p></TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild><Button variant="outline">Right</Button></TooltipTrigger>
                  <TooltipContent side="right"><p>Tooltip on Right</p></TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Without Delay (Fast Hover)</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>호버 즉시 나타나게 하려면 Provider의 delayDuration을 0으로 설정합니다.</p>
          <div className={styles.preview}>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild><Button variant="outline">Fast Hover</Button></TooltipTrigger>
                <TooltipContent><p>Instantly shows up!</p></TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default TooltipGuidePage;
