// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Avatar } from '@/components/ui/avatar';
import { User } from 'lucide-react';

const AvatarGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Avatar</h1>
        <p className={styles.description}>
          사용자 프로필 이미지나 식별 가능한 그래픽을 둥근 형태로 표시합니다. 이미지가 없을 경우 대체(Fallback) 요소를 보여줍니다.
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
                  <td><code>src</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>이미지 URL을 지정합니다.</td>
                </tr>
                <tr>
                  <td><code>fallback</code></td>
                  <td><code>ReactNode</code></td>
                  <td><code>undefined</code></td>
                  <td>이미지 로드 실패 시 또는 src가 없을 때 보여줄 요소입니다.</td>
                </tr>
                <tr>
                  <td><code>size</code></td>
                  <td><code>'sm' | 'md' | 'lg'</code></td>
                  <td><code>'md'</code></td>
                  <td>아바타의 크기를 지정합니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State</h3>
          <div className={styles.preview}>
            <Avatar src="https://github.com/shadcn.png" fallback="CN" />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { Avatar } from '@/components/ui/avatar';

<Avatar src="https://github.com/shadcn.png" fallback="CN" />`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & States">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Fallback Only</h3>
          <div className={styles.preview}>
            <Avatar fallback="AB" />
            <Avatar fallback={<User size={16} />} />
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Sizes</h3>
          <div className={styles.preview}>
            <Avatar size="sm" src="https://github.com/shadcn.png" fallback="CN" />
            <Avatar size="md" src="https://github.com/shadcn.png" fallback="CN" />
            <Avatar size="lg" src="https://github.com/shadcn.png" fallback="CN" />
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default AvatarGuidePage;
