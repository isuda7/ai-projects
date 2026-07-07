// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut  } from '@/components/ui/command';
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';



const CommandGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Command</h1>
        <p className={styles.description}>
          빠르고 직관적인 키보드 친화적 커맨드 팔레트(Command Menu)입니다. Cmd+K(Mac) 기능에 주로 쓰입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Command 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>value</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>선택된 항목의 값</td>
                </tr>
                <tr>
                  <td><code>onValueChange</code></td>
                  <td><code>(value: string) =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>값 변경 시 콜백</td>
                </tr>
                <tr>
                  <td><code>filter</code></td>
                  <td><code>(value: string, search: string) =&gt; number</code></td>
                  <td><code>fuzzy</code></td>
                  <td>커스텀 필터 함수</td>
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
{`import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut  } from '@/components/ui/command';
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

// Basic Component Usage
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
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
            
              <Command className="rounded-lg border shadow-md md:min-w-[450px]">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem><Calendar className="mr-2 h-4 w-4" /><span>Calendar</span></CommandItem>
      <CommandItem><Smile className="mr-2 h-4 w-4" /><span>Search Emoji</span></CommandItem>
      <CommandItem><Calculator className="mr-2 h-4 w-4" /><span>Calculator</span></CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem><User className="mr-2 h-4 w-4" /><span>Profile</span><CommandShortcut>⌘P</CommandShortcut></CommandItem>
      <CommandItem><CreditCard className="mr-2 h-4 w-4" /><span>Billing</span><CommandShortcut>⌘B</CommandShortcut></CommandItem>
      <CommandItem><Settings className="mr-2 h-4 w-4" /><span>Settings</span><CommandShortcut>⌘S</CommandShortcut></CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default CommandGuidePage;
