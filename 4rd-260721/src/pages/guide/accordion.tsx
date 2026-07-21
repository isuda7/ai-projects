// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Accordion } from '@/components/ui/accordion';

const AccordionGuidePage = () => {
  const basicItems = [
    { id: '1', title: 'What is your return policy?', content: 'You can return any item within 30 days of purchase.' },
    { id: '2', title: 'How long does shipping take?', content: 'Shipping usually takes 3-5 business days.' },
    { id: '3', title: 'Do you offer international shipping?', content: 'Yes, we ship to over 50 countries worldwide.' },
  ];

  const complexTitleItems = [
    { 
      id: '1', 
      title: (
        <div className="flex flex-col text-left">
          <span className="text-sm font-semibold text-gray-900">Premium Subscription</span>
          <span className="text-xs text-gray-500 font-normal mt-1">Billed annually at $99/year. Includes priority support.</span>
        </div>
      ), 
      content: 'Enjoy ad-free experience, offline downloads, and early access to new features.' 
    },
    { 
      id: '2', 
      title: (
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0294de] text-white text-xs">2</span>
          <span>Security Settings</span>
        </div>
      ), 
      content: 'Manage your password, two-factor authentication, and login sessions here.' 
    },
  ];

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Accordion</h1>
        <p className={styles.description}>
          수직으로 쌓인 상호작용 요소로, 클릭 시 콘텐츠를 펼치거나 접어 정보를 효율적으로 배치합니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            컴포넌트의 핵심 속성(Props)과 기본 사용법을 안내합니다.
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
                  <td><code>'default' | 'block' | 'line-wall'</code></td>
                  <td><code>'default'</code></td>
                  <td>아코디언의 시각적 형태를 지정합니다.</td>
                </tr>
                <tr>
                  <td><code>type</code></td>
                  <td><code>'single' | 'multiple'</code></td>
                  <td><code>'single'</code></td>
                  <td>단일 선택 또는 다중 선택을 지정합니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State</h3>
          
          <div className={styles.preview}>
            <div className="w-full max-w-lg">
              <Accordion items={basicItems} />
            </div>
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { Accordion } from '@/components/ui/accordion';

<Accordion items={basicItems} />`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & States">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Multiple Selection</h3>
          <div className={styles.preview}>
            <div className="w-full max-w-lg">
              <Accordion type="multiple" items={basicItems} />
            </div>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Default Value Opened</h3>
          <div className={styles.preview}>
            <div className="w-full max-w-lg">
              <Accordion defaultValue="2" items={basicItems} />
            </div>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.3. Block Type (블록형)</h3>
          <div className={styles.preview}>
            <div className="w-full max-w-lg">
              <Accordion variant="block" items={basicItems} />
            </div>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.4. Line Wall Type (라인벽형)</h3>
          <div className={styles.preview}>
            <div className="w-full max-w-lg">
              <Accordion variant="line-wall" items={basicItems} />
            </div>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.5. Complex Title Type (타이틀 복합형)</h3>
          <div className={styles.preview}>
            <div className="w-full max-w-lg">
              <Accordion items={complexTitleItems} />
            </div>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default AccordionGuidePage;
