// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable/resizable';



const ResizableGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Resizable</h1>
        <p className={styles.description}>
          마우스 드래그로 각 패널의 크기를 마음대로 조절할 수 있는 레이아웃 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Resizable 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>"horizontal" | "vertical"</code></td>
                  <td><code>"horizontal"</code></td>
                  <td>패널 분할 방향</td>
                </tr>
                <tr>
                  <td><code>defaultSize</code></td>
                  <td><code>number</code></td>
                  <td><code>none</code></td>
                  <td>&lt;ResizablePanel&gt; 초기 사이즈(%)</td>
                </tr>
                <tr>
                  <td><code>minSize</code></td>
                  <td><code>number</code></td>
                  <td><code>0</code></td>
                  <td>&lt;ResizablePanel&gt; 최소 사이즈(%)</td>
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
{`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable/resizable';

// Basic Component Usage
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50} minSize={20}>
    <div>Sidebar</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div>Content</div>
  </ResizablePanel>
</ResizablePanelGroup>`}
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
            
              <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border w-full">
  <ResizablePanel defaultSize={50} minSize={20}>
    <div className="flex h-[200px] items-center justify-center p-6 bg-slate-50">
      <span className="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50} minSize={20}>
    <div>Sidebar</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div>Content</div>
  </ResizablePanel>
</ResizablePanelGroup>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Vertical Split & Nested</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>세로 분할 및 패널 그룹 중첩을 통해 복잡한 IDE 레이아웃을 구현할 수 있습니다.</p>
          <div className={styles.preview}>
            
              <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
  <ResizablePanel defaultSize={25}><div className="flex h-[200px] items-center justify-center p-6 bg-slate-50"><span className="font-semibold">Left</span></div></ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={70}><div className="flex h-full items-center justify-center p-6"><span className="font-semibold">Top Right</span></div></ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={30}><div className="flex h-full items-center justify-center p-6 bg-slate-100"><span className="font-semibold">Bottom Right</span></div></ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<ResizablePanelGroup direction="vertical">...</ResizablePanelGroup>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default ResizableGuidePage;
