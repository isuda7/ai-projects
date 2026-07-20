// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { ScrollArea  } from '@/components/ui/scroll-area';

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.${a.length - i}`)

const ScrollAreaGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>ScrollArea</h1>
        <p className={styles.description}>
          OS 독립적이고 커스텀 스타일링이 가능한 예쁜 스크롤바를 제공하는 영역입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            ScrollArea 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>type</code></td>
                  <td><code>"auto" | "always" | "scroll" | "hover"</code></td>
                  <td><code>"hover"</code></td>
                  <td>스크롤바 표시 시점 정책</td>
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
{`import { ScrollArea  } from '@/components/ui/scroll-area';

// Basic Component Usage
<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag} className="text-sm">
        {tag}
      </div>
    ))}
  </div>
</ScrollArea>`}
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
            
              <ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {Array.from({ length: 30 }).map((_, i) => (
      <div key={i} className="text-sm border-b py-2">{ `v1.2.${30 - i}` }</div>
    ))}
  </div>
</ScrollArea>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag} className="text-sm">
        {tag}
      </div>
    ))}
  </div>
</ScrollArea>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Horizontal Scrolling</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>콘텐츠 너비가 넓어질 경우 가로 스크롤바가 자동 생성됩니다.</p>
          <div className={styles.preview}>
            
              <ScrollArea className="w-96 whitespace-nowrap rounded-md border shadow-sm">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <figure key={i} className="shrink-0"><div className="overflow-hidden rounded-md"><div className="w-[150px] h-[150px] bg-slate-200 flex items-center justify-center text-slate-500">Image {i}</div></div></figure>
    ))}
  </div>
</ScrollArea>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<ScrollArea className="w-96 whitespace-nowrap">
  <div className="flex w-max space-x-4 p-4">
    {/* Items */}
  </div>
</ScrollArea>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default ScrollAreaGuidePage;
