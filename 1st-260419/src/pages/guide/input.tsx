// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import { Input } from '@/components/ui/input';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Mail, Search } from 'lucide-react';

const InputGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Input</h1>
        <p className={styles.description}>
          사용자로부터 텍스트나 데이터를 입력받을 때 사용하는 기본적인 폼 요소입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
        <p className={styles.description}>
          Input 컴포넌트의 핵심 속성(Props)과 기본 사용법을 안내합니다.
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
                <td><code>inputSize</code></td>
                <td><code>'sm' | 'md' | 'lg'</code></td>
                <td><code>'md'</code></td>
                <td>인풋 필드의 물리적 높이와 폰트 크기</td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>유효성 검사 실패 시 에러 상태(적색 테두리 등) 활성화</td>
              </tr>
              <tr>
                <td><code>fullWidth</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>부모 요소 너비의 100% 차지 여부</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.guideline}>
          <strong>Guideline:</strong> 입력 목적이 명확하도록 <code>placeholder</code>를 반드시 제공하는 것을 권장합니다. 에러 상태일 경우 하단에 피드백 메시지를 함께 제공하세요.
        </div>
        <CodeBlock>
          <pre>
            <code>
{`import { Input } from '@/components/ui/input';

// Basic usage
<Input placeholder="내용을 입력해주세요" />`}
            </code>
          </pre>
        </CodeBlock>
      </GuideSection>

      <GuideSection title="2. Sizes & States">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Sizes</h3>
          <div className={styles.preview} style={{ alignItems: 'flex-start', flexDirection: 'column' }}>
            <Input inputSize="sm" placeholder="Small size (32px)" />
            <Input inputSize="md" placeholder="Medium size (36px)" />
            <Input inputSize="lg" placeholder="Large size (40px)" />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<Input inputSize="sm" placeholder="Small size (32px)" />
<Input inputSize="md" placeholder="Medium size (36px)" />
<Input inputSize="lg" placeholder="Large size (40px)" />`}
              </code>
            </pre>
          </CodeBlock>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.2. States</h3>
          <div className={styles.preview} style={{ flexDirection: 'column' }}>
            <Input placeholder="Default state" />
            <Input disabled placeholder="Disabled state" />
            <Input error placeholder="Error state" defaultValue="Wrong input!" />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<Input placeholder="Default state" />
<Input disabled placeholder="Disabled state" />
<Input error placeholder="Error state" defaultValue="Wrong input!" />`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Icons & Layout">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. With Icons</h3>
          <p className={styles.description}>입력 목적을 시각적으로 돕는 아이콘을 좌/우측에 배치할 수 있습니다.</p>
          <div className={styles.preview} style={{ flexDirection: 'column' }}>
            <Input leftIcon={<Mail size={16} />} placeholder="Email address" />
            <Input rightIcon={<Search size={16} />} placeholder="Search items..." />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<Input leftIcon={<Mail size={16} />} placeholder="Email address" />
<Input rightIcon={<Search size={16} />} placeholder="Search items..." />`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>
    </div>
  );
};

export default InputGuidePage;