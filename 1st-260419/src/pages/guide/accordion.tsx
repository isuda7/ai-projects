// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion/accordion';



const AccordionGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Accordion</h1>
        <p className={styles.description}>
          세로로 쌓인 컨텐츠 패널들의 모음입니다. 정보를 그룹화하여 확장/축소할 때 사용합니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Accordion 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>type</code></td>
                  <td><code>"single" | "multiple"</code></td>
                  <td><code>"single"</code></td>
                  <td>아코디언 동작 방식 제어</td>
                </tr>
                <tr>
                  <td><code>collapsible</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>모든 항목을 닫을 수 있는지 여부 (type="single" 전용)</td>
                </tr>
                <tr>
                  <td><code>defaultValue</code></td>
                  <td><code>string | string[]</code></td>
                  <td><code>undefined</code></td>
                  <td>초기 열려있는 항목의 value</td>
                </tr>
                <tr>
                  <td><code>value</code></td>
                  <td><code>string | string[]</code></td>
                  <td><code>undefined</code></td>
                  <td>제어 컴포넌트로 사용할 때의 value</td>
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
{`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion/accordion';

// Basic Component Usage
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>`}
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
            
              <div className="w-full max-w-md"><Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Multiple Selection</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>여러 개의 패널을 동시에 열어둘 수 있습니다.</p>
          <div className={styles.preview}>
            
              <div className="w-full max-w-md"><Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1"><AccordionTrigger>Section 1: General Info</AccordionTrigger><AccordionContent>This is general information about the product.</AccordionContent></AccordionItem>
  <AccordionItem value="item-2"><AccordionTrigger>Section 2: Technical Specs</AccordionTrigger><AccordionContent>These are the technical specifications.</AccordionContent></AccordionItem>
</Accordion></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">...</AccordionItem>
  <AccordionItem value="item-2">...</AccordionItem>
</Accordion>`}
              </code>
            </pre>
          </div>
        </div>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Default Value Opened</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>페이지 진입 시 특정 항목이 열려있게 설정합니다.</p>
          <div className={styles.preview}>
            
              <div className="w-full max-w-md"><Accordion type="single" collapsible defaultValue="item-2" className="w-full">
  <AccordionItem value="item-1"><AccordionTrigger>Payment Options</AccordionTrigger><AccordionContent>Credit Card, PayPal, Bank Transfer</AccordionContent></AccordionItem>
  <AccordionItem value="item-2"><AccordionTrigger>Shipping Policy</AccordionTrigger><AccordionContent>Free shipping on orders over $50. Standard delivery takes 3-5 business days.</AccordionContent></AccordionItem>
</Accordion></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Accordion type="single" collapsible defaultValue="item-2">...</Accordion>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default AccordionGuidePage;
