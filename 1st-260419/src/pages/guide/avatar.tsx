// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Avatar, AvatarImage, AvatarFallback  } from '@/components/ui/avatar';



const AvatarGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Avatar</h1>
        <p className={styles.description}>
          사용자의 프로필 사진이나 이니셜을 나타내는 이미지 요소입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Avatar 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>delayMs</code></td>
                  <td><code>number</code></td>
                  <td><code>undefined</code></td>
                  <td>Fallback 렌더링 지연 시간(ms)</td>
                </tr>
                <tr>
                  <td><code>asChild</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>하위 요소를 슬롯으로 렌더링</td>
                </tr>
                <tr>
                  <td><code>size</code></td>
                  <td><code>"sm" | "md" | "lg" | "xl" | "2xl"</code></td>
                  <td><code>"md"</code></td>
                  <td>아바타의 크기를 지정합니다.</td>
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
{`import { Avatar, AvatarImage, AvatarFallback  } from '@/components/ui/avatar';

// Basic Component Usage
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
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
            
              <Avatar><AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /><AvatarFallback>CN</AvatarFallback></Avatar>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Fallback Only</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>이미지 로드에 실패하거나 src가 없을 때 텍스트 이니셜을 표시합니다.</p>
          <div className={styles.preview}>
            
              <Avatar><AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">JD</AvatarFallback></Avatar>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
              </code>
            </pre>
          </div>
        </div>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Sizes</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>Avatar 컴포넌트의 w, h 클래스를 조정하여 크기를 바꿉니다.</p>
          <div className={styles.preview}>
            
              <div className="flex items-center space-x-4">
  <Avatar size="sm"><AvatarImage src="https://github.com/shadcn.png" /></Avatar>
  <Avatar size="md"><AvatarImage src="https://github.com/shadcn.png" /></Avatar>
  <Avatar size="lg"><AvatarImage src="https://github.com/shadcn.png" /></Avatar>
  <Avatar size="xl"><AvatarImage src="https://github.com/shadcn.png" /></Avatar>
  <Avatar size="2xl"><AvatarImage src="https://github.com/shadcn.png" /></Avatar>
</div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Avatar size="xl">...</Avatar>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default AvatarGuidePage;
