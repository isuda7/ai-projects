// @ts-nocheck
import React, { useState } from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Calendar } from '@/components/ui/calendar';

const CalendarGuidePage = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Calendar</h1>
        <p className={styles.description}>
          날짜를 선택하거나 일정을 표시할 때 사용하는 달력 컴포넌트입니다.
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
                  <td><code>mode</code></td>
                  <td><code>'single' | 'multiple' | 'range'</code></td>
                  <td><code>'single'</code></td>
                  <td>선택 모드를 지정합니다.</td>
                </tr>
                <tr>
                  <td><code>selected</code></td>
                  <td><code>Date | Date[]</code></td>
                  <td><code>-</code></td>
                  <td>현재 선택된 날짜입니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State</h3>
          <div className={styles.preview}>
            <Calendar 
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

const [date, setDate] = useState<Date>(new Date());

<Calendar 
  mode="single"
  selected={date}
  onSelect={setDate}
/>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & States">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Multiple Selection</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>여러 날짜를 동시에 선택할 수 있습니다.</p>
          <div className={styles.preview}>
            <Calendar 
              mode="multiple"
              selected={multipleDates}
              onSelect={setMultipleDates}
            />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<Calendar 
  mode="multiple"
  selected={dates}
  onSelect={setDates}
/>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>
    </div>
  );
};

export default CalendarGuidePage;
