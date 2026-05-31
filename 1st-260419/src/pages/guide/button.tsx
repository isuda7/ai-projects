import React from 'react';
import styles from './template.module.scss';
import Button from '@/components/ui/button';
import { Settings, ArrowRight } from 'lucide-react';

const ButtonGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Button</h1>
        <p className={styles.description}>
          사용자가 어떠한 액션을 트리거할 때 사용하는 가장 기본적인 컴포넌트입니다.
        </p>
      </header>

      <section className={styles.section}>
        <div>
          <h2 className={styles.title_h2}>1. Overview & Specs</h2>
          <p className={styles.description}>
            버튼은 4가지의 Variant(Solid, Outline, Ghost, Text)와 3가지의 Size(sm, md, lg), 그리고 시맨틱 컬러 테마를 조합하여 사용합니다.
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
                  <td>버튼의 채움 및 테두리 시각 스타일</td>
                </tr>
                <tr>
                  <td><code>color</code></td>
                  <td><code>'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'</code></td>
                  <td><code>'default'</code></td>
                  <td>의미적(Semantic) 색상 테마</td>
                </tr>
                <tr>
                  <td><code>size</code></td>
                  <td><code>'sm' | 'md' | 'lg' | 'icon'</code></td>
                  <td><code>'md'</code></td>
                  <td>버튼의 물리적 크기</td>
                </tr>
                <tr>
                  <td><code>fullWidth</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>부모 요소 너비의 100% 차지 여부</td>
                </tr>
                <tr>
                  <td><code>loading</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>로딩 상태 활성화 (로딩 스피너 표시 및 클릭 비활성화)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 화면 내 주요 액션에는 <code>Solid</code> 버튼을, 보조 액션에는 <code>Outline</code> 버튼을 사용하세요.
            가장 덜 중요한 취소/닫기 등의 액션에는 <code>Ghost</code>나 <code>Text</code> 형식의 버튼을 배치하여 화면 내 시각적 위계를 조절합니다.
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`import Button from '@/components/ui/button';

// Basic usage
<Button variant="solid" color="primary">Button</Button>`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div>
          <h2 className={styles.title_h2}>2. Variants & Colors</h2>
          <p className={styles.description}>
            액션의 중요도와 목적에 따라 형태(variant)와 시맨틱 컬러(color)를 조합하여 사용합니다.
          </p>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Solid (Primary Actions)</h3>
          <div className={styles.preview}>
            <Button variant="solid" color="default">Default</Button>
            <Button variant="solid" color="primary">Primary</Button>
            <Button variant="solid" color="secondary">Secondary</Button>
            <Button variant="solid" color="success">Success</Button>
            <Button variant="solid" color="danger">Danger</Button>
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Button variant="solid" color="default">Default</Button>
<Button variant="solid" color="primary">Primary</Button>
<Button variant="solid" color="secondary">Secondary</Button>
<Button variant="solid" color="success">Success</Button>
<Button variant="solid" color="danger">Danger</Button>`}
              </code>
            </pre>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.2. Outline (Secondary Actions)</h3>
          <div className={styles.preview}>
            <Button variant="outline" color="default">Default</Button>
            <Button variant="outline" color="primary">Primary</Button>
            <Button variant="outline" color="secondary">Secondary</Button>
            <Button variant="outline" color="success">Success</Button>
            <Button variant="outline" color="danger">Danger</Button>
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Button variant="outline" color="default">Default</Button>
<Button variant="outline" color="primary">Primary</Button>
<Button variant="outline" color="secondary">Secondary</Button>
<Button variant="outline" color="success">Success</Button>
<Button variant="outline" color="danger">Danger</Button>`}
              </code>
            </pre>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.3. Ghost & Text</h3>
          <div className={styles.preview}>
            <Button variant="ghost" color="primary">Ghost Primary</Button>
            <Button variant="text" color="default">Text Default</Button>
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Button variant="ghost" color="primary">Ghost Primary</Button>
<Button variant="text" color="default">Text Default</Button>`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div>
          <h2 className={styles.title_h2}>3. Sizes & States</h2>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Sizes</h3>
          <div className={styles.preview} style={{ alignItems: 'center' }}>
            <Button size="sm">Small (32px)</Button>
            <Button size="md">Medium (36px)</Button>
            <Button size="lg">Large (40px)</Button>
            <Button size="icon" variant="outline"><Settings size={18} /></Button>
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Button size="sm">Small (32px)</Button>
<Button size="md">Medium (36px)</Button>
<Button size="lg">Large (40px)</Button>
<Button size="icon" variant="outline"><Settings size={18} /></Button>`}
              </code>
            </pre>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Interactive States</h3>
          <div className={styles.preview}>
            <Button disabled>Disabled</Button>
            <Button loading>Loading...</Button>
            <Button loading variant="outline" color="primary">Saving</Button>
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Button disabled>Disabled</Button>
<Button loading>Loading...</Button>
<Button loading variant="outline" color="primary">Saving</Button>`}
              </code>
            </pre>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.3. With Icons & Layout</h3>
          <div className={styles.preview} style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Button leftIcon={<Settings />}>Settings</Button>
              <Button rightIcon={<ArrowRight />} variant="outline" color="primary">Next Step</Button>
            </div>
            <Button fullWidth variant="solid" color="primary">Full Width Button</Button>
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<div style={{ display: 'flex', gap: '16px' }}>
  <Button leftIcon={<Settings />}>Settings</Button>
  <Button rightIcon={<ArrowRight />} variant="outline" color="primary">Next Step</Button>
</div>
<Button fullWidth variant="solid" color="primary">Full Width Button</Button>`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonGuidePage;