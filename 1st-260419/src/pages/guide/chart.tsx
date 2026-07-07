// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { ChartContainer, ChartTooltip, ChartTooltipContent  } from '@/components/ui/chart';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--color-primary)" },
  mobile: { label: "Mobile", color: "var(--color-danger)" },
};

const ChartGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Chart</h1>
        <p className={styles.description}>
          Recharts 라이브러리 위에 강력하고 아름다운 테마와 툴팁을 입힌 차트 시스템입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Chart 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>config</code></td>
                  <td><code>ChartConfig</code></td>
                  <td><code>{}</code></td>
                  <td>데이터 키별 테마, 색상, 라벨을 정의하는 객체</td>
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
{`import { ChartContainer, ChartTooltip, ChartTooltipContent  } from '@/components/ui/chart';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Basic Component Usage
<ChartContainer config={chartConfig}>
  <BarChart data={chartData}>
    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
  </BarChart>
</ChartContainer>`}
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
            
              <div className="w-full max-w-lg border p-4 rounded-lg bg-background shadow-sm"><h3 className="font-semibold mb-4">Monthly Traffic (Bar)</h3><div className="h-[250px] w-full"><ChartContainer config={chartConfig} className="h-full w-full"><ResponsiveContainer width="100%" height="100%"><BarChart data={chartData}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="month" /><YAxis /><ChartTooltip content={<ChartTooltipContent />} /><Bar dataKey="desktop" fill="var(--color-desktop)" radius={[4, 4, 0, 0]} /><Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></ChartContainer></div></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<ChartContainer config={chartConfig}>
  <BarChart data={chartData}>
    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
  </BarChart>
</ChartContainer>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Line Chart</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>BarChart 대신 LineChart를 사용하여 선형 그래프를 구성합니다.</p>
          <div className={styles.preview}>
            
              <div className="w-full max-w-lg border p-4 rounded-lg bg-background shadow-sm"><h3 className="font-semibold mb-4">Monthly Trend (Line)</h3><div className="h-[250px] w-full"><ChartContainer config={chartConfig} className="h-full w-full"><ResponsiveContainer width="100%" height="100%"><LineChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="month" /><YAxis /><ChartTooltip content={<ChartTooltipContent />} /><Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" strokeWidth={3} dot={{r: 4}} /><Line type="monotone" dataKey="mobile" stroke="var(--color-mobile)" strokeWidth={3} dot={{r: 4}} /></LineChart></ResponsiveContainer></ChartContainer></div></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<ChartContainer config={chartConfig}>
  <LineChart data={chartData}>
    <Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" strokeWidth={3} />
  </LineChart>
</ChartContainer>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default ChartGuidePage;
