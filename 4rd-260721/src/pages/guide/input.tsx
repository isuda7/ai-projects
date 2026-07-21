// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import Input from '@/components/ui/input';
import { Search, Mail } from 'lucide-react';

const InputGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Input</h1>
        <p className={styles.description}>
          사용자로부터 짧은 텍스트나 데이터를 입력받는 가장 기본적인 폼(Form) 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
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
                <td>인풋의 크기</td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>에러 상태 표시 여부</td>
              </tr>
              <tr>
                <td><code>leftIcon / rightIcon</code></td>
                <td><code>ReactNode</code></td>
                <td><code>undefined</code></td>
                <td>내부 좌/우 아이콘</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock>
          <pre>
            <code>
{`import Input from '@/components/ui/input';

<Input placeholder="Enter text..." />`}
            </code>
          </pre>
        </CodeBlock>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default Input</h3>
          <div className={styles.preview} style={{ maxWidth: '400px' }}>
            <Input placeholder="Enter your email" fullWidth />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<Input placeholder="Enter your email" />`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Sizes & States">
        <div className={styles.sub_section}>
          
          <h3 className={styles.title_h3}>3.1. Sizes</h3>
          <div className={styles.preview} style={{ maxWidth: '400px', flexDirection: 'column' }}>
            <Input inputSize="sm" placeholder="Small size (sm)" fullWidth />
            <Input inputSize="md" placeholder="Medium size (md) - Default" fullWidth />
            <Input inputSize="lg" placeholder="Large size (lg)" fullWidth />
          </div>

          <h3 className={styles.title_h3} style={{ marginTop: '24px' }}>3.2. States</h3>
          <div className={styles.preview} style={{ maxWidth: '400px', flexDirection: 'column' }}>
            <Input disabled placeholder="Disabled state" fullWidth />
            <Input error placeholder="Error state" defaultValue="Invalid input" fullWidth />
          </div>

          <h3 className={styles.title_h3} style={{ marginTop: '24px' }}>3.3. With Icons</h3>
          <div className={styles.preview} style={{ maxWidth: '400px', flexDirection: 'column' }}>
            <Input leftIcon={<Search size={16} />} placeholder="Search..." fullWidth />
            <Input rightIcon={<Mail size={16} />} placeholder="Email address" fullWidth />
          </div>

        </div>
      </GuideSection>
    </div>
  );
};

export default InputGuidePage;
