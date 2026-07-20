// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { RadioGroup, RadioGroupItem  } from '@/components/ui/radio-group';
import { Label  } from '@/components/ui/label';



const RadioGroupGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>RadioGroup</h1>
        <p className={styles.description}>
          여러 개의 옵션 중 단 하나만 선택할 수 있는 라디오 버튼 모음입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            RadioGroup 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>defaultValue</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>초기 선택된 아이템의 value</td>
                </tr>
                <tr>
                  <td><code>value</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>제어 상태의 선택된 값</td>
                </tr>
                <tr>
                  <td><code>onValueChange</code></td>
                  <td><code>(value: string) =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>값 변경 시 콜백</td>
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
{`import { RadioGroup, RadioGroupItem  } from '@/components/ui/radio-group';
import { Label  } from '@/components/ui/label';

// Basic Component Usage
<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`}
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
            
              <RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Disabled Option</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>특정 항목을 선택 불가능하게 만듭니다.</p>
          <div className={styles.preview}>
            
              <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="o1" />
    <Label htmlFor="o1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="o2" disabled />
    <Label htmlFor="o2" className="text-gray-400">Option Two (Disabled)</Label>
  </div>
</RadioGroup>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<RadioGroupItem value="option-two" id="o2" disabled />`}
              </code>
            </pre>
          </CodeBlock>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Block Type</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>라디오 버튼을 숨기고 영역 전체를 버튼처럼 만듭니다.</p>
          <div className={styles.preview}>
            <RadioGroup defaultValue="cpu" className="grid grid-cols-3 gap-4 max-w-lg">
              <Label htmlFor="cpu-i5" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/5 cursor-pointer">
                <RadioGroupItem value="cpu" id="cpu-i5" className="sr-only" />
                <span className="font-semibold text-lg">Core i5</span>
                <span className="text-sm text-muted-foreground">Standard</span>
              </Label>
              <Label htmlFor="cpu-i7" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/5 cursor-pointer">
                <RadioGroupItem value="i7" id="cpu-i7" className="sr-only" />
                <span className="font-semibold text-lg">Core i7</span>
                <span className="text-sm text-muted-foreground">Performance</span>
              </Label>
              <Label htmlFor="cpu-i9" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/5 cursor-pointer">
                <RadioGroupItem value="i9" id="cpu-i9" className="sr-only" />
                <span className="font-semibold text-lg">Core i9</span>
                <span className="text-sm text-muted-foreground">Extreme</span>
              </Label>
            </RadioGroup>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.3. Image Type</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>시각적인 썸네일을 선택하는 라디오 버튼입니다.</p>
          <div className={styles.preview}>
            <RadioGroup defaultValue="light" className="flex gap-4">
              <Label htmlFor="theme-light" className="relative cursor-pointer rounded-lg border-2 border-transparent hover:border-primary/50 has-[:checked]:border-primary overflow-hidden">
                <RadioGroupItem value="light" id="theme-light" className="sr-only" />
                <div className="w-32 h-20 bg-slate-100 flex items-center justify-center font-semibold text-slate-800">Light</div>
              </Label>
              <Label htmlFor="theme-dark" className="relative cursor-pointer rounded-lg border-2 border-transparent hover:border-primary/50 has-[:checked]:border-primary overflow-hidden">
                <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
                <div className="w-32 h-20 bg-slate-900 flex items-center justify-center font-semibold text-slate-100">Dark</div>
              </Label>
            </RadioGroup>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default RadioGroupGuidePage;
