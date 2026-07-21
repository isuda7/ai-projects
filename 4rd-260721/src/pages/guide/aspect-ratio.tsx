// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AspectRatioGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>AspectRatio</h1>
        <p className={styles.description}>
          요소의 너비에 맞춰 지정된 비율로 높이를 유지하는 컨테이너입니다. 반응형 이미지나 비디오에 유용합니다.
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
                  <td><code>ratio</code></td>
                  <td><code>number</code></td>
                  <td><code>1</code></td>
                  <td>가로/세로 비율을 정의합니다. (예: 16/9, 4/3, 1)</td>
                </tr>
              </tbody>
            </table>
          </div>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State (16:9)</h3>
          <div className={styles.preview}>
            <div className="w-full max-w-sm">
              <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-md">
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  className="rounded-md object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { AspectRatio } from '@/components/ui/aspect-ratio';

<AspectRatio ratio={16 / 9}>
  <img src="..." alt="Image" className="object-cover w-full h-full" />
</AspectRatio>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & States">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Square Ratio (1:1)</h3>
          <div className={styles.preview}>
            <div className="w-[200px]">
              <AspectRatio ratio={1} className="bg-gray-100 rounded-md border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Square photo"
                  className="rounded-md object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
        
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Ultrawide (21:9)</h3>
          <div className={styles.preview}>
            <div className="w-full max-w-lg">
              <AspectRatio ratio={21 / 9} className="bg-gray-100 rounded-md border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Ultrawide photo"
                  className="rounded-md object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default AspectRatioGuidePage;
