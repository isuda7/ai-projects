// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Badge } from '@/components/ui/badge';

const BadgeGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Badge</h1>
        <p className={styles.description}>
          상태, 태그, 알림 개수 등을 작고 눈에 띄게 표시하는 컴포넌트입니다.
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
                  <td><code>variant</code></td>
                  <td><code>'solid' | 'outline' | 'soft'</code></td>
                  <td><code>'solid'</code></td>
                  <td>배지의 시각적 스타일을 지정합니다.</td>
                </tr>
                <tr>
                  <td><code>color</code></td>
                  <td><code>'default' | 'primary' | 'success' | 'warning' | 'danger'</code></td>
                  <td><code>'default'</code></td>
                  <td>배지의 색상 테마를 지정합니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
      </GuideSection>

      <GuideSection title="2. Variants & Colors">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Solid</h3>
          <div className={styles.preview}>
            <Badge variant="solid" color="default">Default</Badge>
            <Badge variant="solid" color="primary">Primary</Badge>
            <Badge variant="solid" color="success">Success</Badge>
            <Badge variant="solid" color="warning">Warning</Badge>
            <Badge variant="solid" color="danger">Danger</Badge>
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { Badge } from '@/components/ui/badge';

<Badge variant="solid" color="primary">Primary</Badge>`}
              </code>
            </pre>
          </CodeBlock>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.2. Outline</h3>
          <div className={styles.preview}>
            <Badge variant="outline" color="default">Default</Badge>
            <Badge variant="outline" color="primary">Primary</Badge>
            <Badge variant="outline" color="success">Success</Badge>
            <Badge variant="outline" color="warning">Warning</Badge>
            <Badge variant="outline" color="danger">Danger</Badge>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.3. Soft</h3>
          <div className={styles.preview}>
            <Badge variant="soft" color="default">Default</Badge>
            <Badge variant="soft" color="primary">Primary</Badge>
            <Badge variant="soft" color="success">Success</Badge>
            <Badge variant="soft" color="warning">Warning</Badge>
            <Badge variant="soft" color="danger">Danger</Badge>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="3. Sizes">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>Sizes</h3>
          <div className={styles.preview}>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default BadgeGuidePage;
