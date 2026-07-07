// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import { Badge } from '@/components/ui/badge';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';

const BadgeGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Badge</h1>
        <p className={styles.description}>
          상태를 나타내거나, 특정 카테고리를 강조할 때 사용하는 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            배지는 3가지의 Variant(Solid, Outline, Soft)와 3가지의 Size(sm, md, lg), 그리고 시맨틱 컬러 테마를 조합하여 사용합니다.
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
                  <td><code>'solid' | 'outline' | 'soft'</code></td>
                  <td><code>'solid'</code></td>
                  <td>배지의 시각적 스타일</td>
                </tr>
                <tr>
                  <td><code>color</code></td>
                  <td><code>'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'</code></td>
                  <td><code>'default'</code></td>
                  <td>의미적(Semantic) 색상 테마</td>
                </tr>
                <tr>
                  <td><code>size</code></td>
                  <td><code>'sm' | 'md' | 'lg'</code></td>
                  <td><code>'md'</code></td>
                  <td>배지의 물리적 크기</td>
                </tr>
              </tbody>
            </table>
          </div>
      </GuideSection>

      <GuideSection title="2. Variants & Colors">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Solid</h3>
          <div className={styles.preview} style={{ gap: '8px' }}>
            <Badge variant="solid" color="default">Default</Badge>
            <Badge variant="solid" color="primary">Primary</Badge>
            <Badge variant="solid" color="secondary">Secondary</Badge>
            <Badge variant="solid" color="success">Success</Badge>
            <Badge variant="solid" color="danger">Danger</Badge>
            <Badge variant="solid" color="warning">Warning</Badge>
            <Badge variant="solid" color="info">Info</Badge>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.2. Outline</h3>
          <div className={styles.preview} style={{ gap: '8px' }}>
            <Badge variant="outline" color="default">Default</Badge>
            <Badge variant="outline" color="primary">Primary</Badge>
            <Badge variant="outline" color="secondary">Secondary</Badge>
            <Badge variant="outline" color="success">Success</Badge>
            <Badge variant="outline" color="danger">Danger</Badge>
            <Badge variant="outline" color="warning">Warning</Badge>
            <Badge variant="outline" color="info">Info</Badge>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.3. Soft</h3>
          <div className={styles.preview} style={{ gap: '8px' }}>
            <Badge variant="soft" color="default">Default</Badge>
            <Badge variant="soft" color="primary">Primary</Badge>
            <Badge variant="soft" color="secondary">Secondary</Badge>
            <Badge variant="soft" color="success">Success</Badge>
            <Badge variant="soft" color="danger">Danger</Badge>
            <Badge variant="soft" color="warning">Warning</Badge>
            <Badge variant="soft" color="info">Info</Badge>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="3. Sizes">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>Sizes</h3>
          <div className={styles.preview} style={{ alignItems: 'center', gap: '8px' }}>
            <Badge size="sm">Small (20px)</Badge>
            <Badge size="md">Medium (24px)</Badge>
            <Badge size="lg">Large (28px)</Badge>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default BadgeGuidePage;
