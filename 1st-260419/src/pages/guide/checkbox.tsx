// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Checkbox  } from '@/components/ui/checkbox';
import { Label  } from '@/components/ui/label';



const CheckboxGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Checkbox</h1>
        <p className={styles.description}>
          사용자가 여러 개의 옵션 중 독립적으로 선택할 수 있는 입력 요소입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Checkbox 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>checked</code></td>
                  <td><code>boolean | "indeterminate"</code></td>
                  <td><code>false</code></td>
                  <td>현재 체크 상태 (제어)</td>
                </tr>
                <tr>
                  <td><code>onCheckedChange</code></td>
                  <td><code>(checked: boolean | "indeterminate") =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>체크 상태 변경 콜백</td>
                </tr>
                <tr>
                  <td><code>disabled</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>클릭 불가 비활성화 처리</td>
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
{`import { Checkbox  } from '@/components/ui/checkbox';
import { Label  } from '@/components/ui/label';

// Basic Component Usage
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
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
            
              <div className="flex items-center space-x-2"><Checkbox id="terms" /><Label htmlFor="terms">Accept terms and conditions</Label></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Disabled Checkbox</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>선택할 수 없는 비활성 체크박스 상태입니다.</p>
          <div className={styles.preview}>
            
              <div className="flex items-center space-x-2"><Checkbox id="terms2" disabled /><Label htmlFor="terms2" className="text-gray-400">Accept terms and conditions</Label></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Checkbox id="terms2" disabled />`}
              </code>
            </pre>
          </div>
        </div>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. With Description</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>라벨 하단에 추가적인 설명 텍스트를 배치합니다.</p>
          <div className={styles.preview}>
            
              <div className="items-top flex space-x-2">
  <Checkbox id="terms1" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="terms1">Accept terms and conditions</Label>
    <p className="text-sm text-slate-500">You agree to our Terms of Service and Privacy Policy.</p>
  </div>
</div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<div className="items-top flex space-x-2">
  <Checkbox id="terms1" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="terms1">Accept terms and conditions</Label>
    <p className="text-sm text-muted-foreground">You agree to our Terms...</p>
  </div>
</div>`}
              </code>
            </pre>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.3. Block Type</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>체크박스를 숨기고 전체 영역을 클릭 가능한 블록 형태로 만듭니다.</p>
          <div className={styles.preview}>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <Label htmlFor="plan-basic" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/5 cursor-pointer">
                <Checkbox id="plan-basic" className="sr-only" />
                <span className="font-semibold">Basic Plan</span>
                <span className="text-sm text-muted-foreground">$9.99/mo</span>
              </Label>
              <Label htmlFor="plan-pro" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/5 cursor-pointer">
                <Checkbox id="plan-pro" className="sr-only" />
                <span className="font-semibold">Pro Plan</span>
                <span className="text-sm text-muted-foreground">$29.99/mo</span>
              </Label>
            </div>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.4. Image Type</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>이미지를 선택하는 시각적인 체크박스 예시입니다.</p>
          <div className={styles.preview}>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <Label htmlFor="img1" className="relative cursor-pointer rounded-lg border-2 border-transparent hover:border-primary/50 has-[:checked]:border-primary overflow-hidden">
                <Checkbox id="img1" className="sr-only" />
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=300&q=80" alt="Theme 1" className="object-cover w-full h-24" />
              </Label>
              <Label htmlFor="img2" className="relative cursor-pointer rounded-lg border-2 border-transparent hover:border-primary/50 has-[:checked]:border-primary overflow-hidden">
                <Checkbox id="img2" className="sr-only" />
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=300&q=80" alt="Theme 2" className="object-cover w-full h-24 grayscale" />
              </Label>
            </div>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default CheckboxGuidePage;
