// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Separator  } from '@/components/ui/separator';



const SeparatorGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Separator</h1>
        <p className={styles.description}>
          레이아웃 상에서 시각적 또는 의미적으로 콘텐츠를 구분짓는 구분선입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Separator 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>orientation</code></td>
                  <td><code>"horizontal" | "vertical"</code></td>
                  <td><code>"horizontal"</code></td>
                  <td>선의 방향</td>
                </tr>
                <tr>
                  <td><code>decorative</code></td>
                  <td><code>boolean</code></td>
                  <td><code>true</code></td>
                  <td>스크린 리더(접근성)에서 무시할지 여부</td>
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
{`import { Separator  } from '@/components/ui/separator';

// Basic Component Usage
<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`}
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
            
              <div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default SeparatorGuidePage;
