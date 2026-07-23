// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Skeleton  } from '@/components/ui/skeleton';



const SkeletonGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Skeleton</h1>
        <p className={styles.description}>
          데이터가 로드되기 전에 보여주는 뼈대(플레이스홀더) 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Skeleton 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>className</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>너비(w-), 높이(h-), 둥글기(rounded-) 등 형태를 결정하는 유틸리티 클래스</td>
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
{`import { Skeleton  } from '@/components/ui/skeleton';

// Basic Component Usage
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
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
            
              <div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Card Skeleton</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>카드 형태의 로딩 플레이스홀더 구성입니다.</p>
          <div className={styles.preview}>
            
              <div className="flex flex-col space-y-3 w-[250px]">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<Skeleton className="h-[125px] w-[250px] rounded-xl" />`}
              </code>
            </pre>
          </CodeBlock>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. List Skeleton</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>목록 형태의 데이터가 로딩될 때 사용되는 플레이스홀더입니다.</p>
          <div className={styles.preview}>
            <div className="w-[350px] space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-3 w-[150px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.3. Grid Skeleton</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>그리드 형태의 아이템들이 로딩될 때의 플레이스홀더입니다.</p>
          <div className={styles.preview}>
            <div className="grid grid-cols-2 gap-4 w-[500px]">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <Skeleton className="h-[100px] w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.4. Profile Skeleton</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>배너와 프로필 이미지가 포함된 페이지 상단의 로딩 상태입니다.</p>
          <div className={styles.preview}>
            <div className="w-[500px] border rounded-lg overflow-hidden pb-6">
              <Skeleton className="h-24 w-full rounded-none" />
              <div className="px-6 relative flex flex-col items-start">
                <Skeleton className="h-16 w-16 rounded-full absolute -top-8 border-4 border-white dark:border-slate-950" />
                <div className="mt-10 space-y-2 w-full">
                  <Skeleton className="h-6 w-[150px]" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default SkeletonGuidePage;
