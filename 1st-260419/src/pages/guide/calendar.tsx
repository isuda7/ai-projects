// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Calendar } from '@/components/ui/calendar/calendar';
import { useState } from 'react';

const CalendarDemo = () => {
  const [date, setDate] = React.useState(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow max-w-fit bg-white" />;
};
const CalendarMultipleDemo = () => {
  const [dates, setDates] = React.useState([new Date()]);
  return <Calendar mode="multiple" selected={dates} onSelect={setDates} className="rounded-md border shadow max-w-fit bg-white" />;
};

const CalendarGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Calendar</h1>
        <p className={styles.description}>
          사용자가 단일 날짜, 다중 날짜, 또는 날짜 범위를 선택할 수 있는 달력 컴포넌트입니다. (react-day-picker 래핑)
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Calendar 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>mode</code></td>
                  <td><code>"single" | "multiple" | "range"</code></td>
                  <td><code>"single"</code></td>
                  <td>선택 모드</td>
                </tr>
                <tr>
                  <td><code>selected</code></td>
                  <td><code>Date | Date[] | DateRange</code></td>
                  <td><code>undefined</code></td>
                  <td>현재 선택된 날짜 값</td>
                </tr>
                <tr>
                  <td><code>onSelect</code></td>
                  <td><code>function</code></td>
                  <td><code>undefined</code></td>
                  <td>날짜 선택 시 콜백 함수</td>
                </tr>
                <tr>
                  <td><code>disabled</code></td>
                  <td><code>boolean | function</code></td>
                  <td><code>false</code></td>
                  <td>선택 불가능한 날짜 조건</td>
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
{`import { Calendar } from '@/components/ui/calendar/calendar';
import { useState } from 'react';

// Basic Component Usage
const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border shadow"
/>`}
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
            
              <CalendarDemo />
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border shadow"
/>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Multiple Selection</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>여러 개의 날짜를 동시에 픽할 수 있습니다.</p>
          <div className={styles.preview}>
            
              <CalendarMultipleDemo />
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Calendar mode="multiple" selected={dates} onSelect={setDates} />`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default CalendarGuidePage;
