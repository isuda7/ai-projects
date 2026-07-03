// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner/sonner";
import { Button } from "@/components/ui/button/button";



const SonnerGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Sonner</h1>
        <p className={styles.description}>
          세련된 디자인과 가벼운 용량을 자랑하는 Toast 알림(Toaster) 시스템입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Sonner 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>position</code></td>
                  <td><code>string</code></td>
                  <td><code>"bottom-right"</code></td>
                  <td>&lt;Toaster&gt; 컴포넌트의 위치</td>
                </tr>
                <tr>
                  <td><code>theme</code></td>
                  <td><code>"light" | "dark" | "system"</code></td>
                  <td><code>"system"</code></td>
                  <td>&lt;Toaster&gt; 컴포넌트의 테마</td>
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
{`import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner/sonner";
import { Button } from "@/components/ui/button/button";

// Basic Component Usage
// In your root layout:
// <Toaster />

// In your component:
<Button
  variant="outline"
  onClick={() =>
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: { label: "Undo", onClick: () => console.log("Undo") }
    })
  }
>
  Show Toast
</Button>`}
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
            
              <div><Toaster /><Button variant="outline" onClick={() => toast("Event has been created", { description: "Sunday, December 03, 2023 at 9:00 AM" })}>Show Toast</Button></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`// In your root layout:
// <Toaster />

// In your component:
<Button
  variant="outline"
  onClick={() =>
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: { label: "Undo", onClick: () => console.log("Undo") }
    })
  }
>
  Show Toast
</Button>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default SonnerGuidePage;
