// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Switch  } from '@/components/ui/switch';
import { Label  } from '@/components/ui/label';



const SwitchGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Switch</h1>
        <p className={styles.description}>
          상태를 켜거나(On) 끄는(Off) 토글 스위치입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Switch 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>스위치가 켜진 상태 제어</td>
                </tr>
                <tr>
                  <td><code>onCheckedChange</code></td>
                  <td><code>(checked: boolean) =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>토글 콜백</td>
                </tr>
                <tr>
                  <td><code>disabled</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>사용자 상호작용 비활성화</td>
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
{`import { Switch  } from '@/components/ui/switch';
import { Label  } from '@/components/ui/label';

// Basic Component Usage
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
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
            
              <div className="flex items-center space-x-2"><Switch id="airplane-mode" /><Label htmlFor="airplane-mode">Airplane Mode</Label></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Disabled Form</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>스위치를 비활성화하여 조작할 수 없게 만듭니다.</p>
          <div className={styles.preview}>
            
              <div className="flex items-center space-x-2"><Switch id="bluetooth" disabled checked /><Label htmlFor="bluetooth" className="text-gray-400">Bluetooth (Always On)</Label></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Switch id="bluetooth" disabled checked />`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default SwitchGuidePage;
