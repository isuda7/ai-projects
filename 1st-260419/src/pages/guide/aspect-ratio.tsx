// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { AspectRatio } from '@/components/ui/aspect-ratio/aspect-ratio';



const AspectRatioGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>AspectRatio</h1>
        <p className={styles.description}>
          이미지, 비디오 등 특정 가로세로 비율(Ratio)을 유지해야 하는 컨테이너입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            AspectRatio 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>ratio</code></td>
                  <td><code>number</code></td>
                  <td><code>1</code></td>
                  <td>유지할 가로/세로 비율 (예: 16/9, 4/3, 1)</td>
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
{`import { AspectRatio } from '@/components/ui/aspect-ratio/aspect-ratio';

// Basic Component Usage
<div className="w-[300px]">
  <AspectRatio ratio={16 / 9} className="bg-muted">
    <img src="..." alt="Photo" className="rounded-md object-cover w-full h-full" />
  </AspectRatio>
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
            
              <div className="w-[300px] shadow-sm"><AspectRatio ratio={16 / 9} className="bg-muted"><img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo" className="rounded-md object-cover w-full h-full" /></AspectRatio></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<div className="w-[300px]">
  <AspectRatio ratio={16 / 9} className="bg-muted">
    <img src="..." alt="Photo" className="rounded-md object-cover w-full h-full" />
  </AspectRatio>
</div>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Square Ratio (1:1)</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>아바타나 썸네일 등에 사용하는 1:1 비율입니다.</p>
          <div className={styles.preview}>
            
              <div className="w-[150px] shadow-sm"><AspectRatio ratio={1} className="bg-muted"><img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&dpr=2&q=80" alt="Photo" className="rounded-md object-cover w-full h-full" /></AspectRatio></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<AspectRatio ratio={1}>
  <img src="..." className="object-cover" />
</AspectRatio>`}
              </code>
            </pre>
          </div>
        </div>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Ultrawide (21:9)</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>배너 이미지 등에 사용되는 와이드 비율입니다.</p>
          <div className={styles.preview}>
            
              <div className="w-[400px] shadow-sm"><AspectRatio ratio={21 / 9} className="bg-muted"><img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1200&dpr=2&q=80" alt="Photo" className="rounded-md object-cover w-full h-full" /></AspectRatio></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<AspectRatio ratio={21 / 9}>...</AspectRatio>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default AspectRatioGuidePage;
