// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { HoverCard, HoverCardTrigger, HoverCardContent  } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { Button  } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';



const HoverCardGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>HoverCard</h1>
        <p className={styles.description}>
          마우스 호버 시 자세한 부가 정보를 제공하는 카드 팝업 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            HoverCard 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>openDelay</code></td>
                  <td><code>number</code></td>
                  <td><code>700</code></td>
                  <td>호버 후 카드가 열리기까지의 지연 시간(ms)</td>
                </tr>
                <tr>
                  <td><code>closeDelay</code></td>
                  <td><code>number</code></td>
                  <td><code>300</code></td>
                  <td>마우스가 벗어난 후 카드가 닫히기까지의 지연 시간(ms)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 프로젝트의 디자인 시스템 규칙에 맞추어 사용하세요.
          </div>
          <CodeBlock>
            <pre>
              <code>
{`import { HoverCard, HoverCardTrigger, HoverCardContent  } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { Button  } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

// Basic Component Usage
<HoverCard>
  <HoverCardTrigger asChild><Button variant="link">@nextjs</Button></HoverCardTrigger>
  <HoverCardContent>
    <div>Detail Profile Info</div>
  </HoverCardContent>
</HoverCard>`}
              </code>
            </pre>
          </CodeBlock>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
          <p className={styles.description}>
            가장 기본적인 형태의 렌더링 예제입니다.
          </p>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State</h3>
          <div className={styles.preview}>
            
              <HoverCard>
  <HoverCardTrigger asChild><Button variant="link">@nextjs</Button></HoverCardTrigger>
  <HoverCardContent>
    <div className="flex justify-between space-x-4">
      <Avatar><AvatarImage src="https://github.com/vercel.png" /><AvatarFallback>VC</AvatarFallback></Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm text-slate-500">The React Framework – created and maintained by @vercel.</p>
        <div className="flex items-center pt-2"><CalendarDays className="mr-2 h-4 w-4 opacity-70" /> <span className="text-xs text-slate-500">Joined December 2021</span></div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<HoverCard>
  <HoverCardTrigger asChild><Button variant="link">@nextjs</Button></HoverCardTrigger>
  <HoverCardContent>
    <div>Detail Profile Info</div>
  </HoverCardContent>
</HoverCard>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default HoverCardGuidePage;
