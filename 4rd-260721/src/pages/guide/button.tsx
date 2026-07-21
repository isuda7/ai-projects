// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import Button from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

const ButtonGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Button</h1>
        <p className={styles.description}>
          사용자의 이벤트를 받아 액션을 트리거하는 가장 기본적이고 범용적인 상호작용 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
        <p className={styles.description} style={{marginBottom: '16px'}}>
          버튼의 핵심 속성(Props)과 기본 사용법을 안내합니다.
        </p>
        <div className={styles.spec_table_wrapper}>
          <table className={styles.spec_table}>
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
                <td><code>variant</code></td>
                <td><code>'solid' | 'outline' | 'ghost' | 'text'</code></td>
                <td><code>'solid'</code></td>
                <td>버튼의 시각적 형태</td>
              </tr>
              <tr>
                <td><code>color</code></td>
                <td><code>'default' | 'primary' | 'success' | 'danger' ...</code></td>
                <td><code>'default'</code></td>
                <td>의미적 색상 테마</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'sm' | 'md' | 'lg' | 'icon'</code></td>
                <td><code>'md'</code></td>
                <td>버튼의 물리적 크기</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock>
          <pre>
            <code>
{`import Button from '@/components/ui/button';

// Basic usage
<Button variant="solid" color="primary">Action</Button>`}
            </code>
          </pre>
        </CodeBlock>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Primary State</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>가장 기본이 되는 디폴트 상태의 렌더링입니다.</p>
          <div className={styles.preview}>
            <Button>Default Button</Button>
            <Button color="primary">Primary Button</Button>
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<Button>Default Button</Button>
<Button color="primary">Primary Button</Button>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & Colors">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Solid</h3>
          <div className={styles.preview}>
            <Button variant="solid" color="default">Default</Button>
            <Button variant="solid" color="primary">Primary</Button>
            <Button variant="solid" color="secondary">Secondary</Button>
            <Button variant="solid" color="success">Success</Button>
            <Button variant="solid" color="danger">Danger</Button>
            <Button variant="solid" color="warning">Warning</Button>
          </div>

          <h3 className={styles.title_h3} style={{marginTop: '24px'}}>3.2. Outline</h3>
          <div className={styles.preview}>
            <Button variant="outline" color="default">Default</Button>
            <Button variant="outline" color="primary">Primary</Button>
            <Button variant="outline" color="success">Success</Button>
            <Button variant="outline" color="danger">Danger</Button>
          </div>

          <h3 className={styles.title_h3} style={{marginTop: '24px'}}>3.3. Ghost</h3>
          <div className={styles.preview}>
            <Button variant="ghost" color="default">Default</Button>
            <Button variant="ghost" color="primary">Primary</Button>
            <Button variant="ghost" color="danger">Danger</Button>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="4. Sizes & States">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>4.1. Sizes</h3>
          <div className={styles.preview}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Mail size={16} /></Button>
          </div>

          <h3 className={styles.title_h3} style={{marginTop: '24px'}}>4.2. States & Icons</h3>
          <div className={styles.preview}>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button leftIcon={<Mail size={16} />}>Login with Email</Button>
            <Button rightIcon={<ArrowRight size={16} />} color="primary">Continue</Button>
          </div>

          <h3 className={styles.title_h3} style={{marginTop: '24px'}}>4.3. Full Width</h3>
          <div className={styles.preview} style={{display: 'block'}}>
            <Button fullWidth color="primary">Block Level Button</Button>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default ButtonGuidePage;
