// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';



const ToggleGroupGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>ToggleGroup</h1>
        <p className={styles.description}>
          서로 관련된 여러 개의 토글 버튼들을 하나로 묶어주는 그룹 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            ToggleGroup 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>"single" | "multiple"</code></td>
                  <td><code>"single"</code></td>
                  <td>단일 선택 모드 또는 다중 선택 모드</td>
                </tr>
                <tr>
                  <td><code>variant</code></td>
                  <td><code>"default" | "outline"</code></td>
                  <td><code>"default"</code></td>
                  <td>그룹 내 토글 버튼들의 스타일 테마</td>
                </tr>
                <tr>
                  <td><code>size</code></td>
                  <td><code>"default" | "sm" | "lg"</code></td>
                  <td><code>"default"</code></td>
                  <td>버튼들의 크기 지정</td>
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
{`import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';

// Basic Component Usage
<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
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
            
              <ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
</ToggleGroup>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Single Selection (Outline)</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>단일 선택만 가능한 Outline 테마 토글 그룹입니다.</p>
          <div className={styles.preview}>
            
              <ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<ToggleGroup type="single" variant="outline">...</ToggleGroup>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default ToggleGroupGuidePage;
