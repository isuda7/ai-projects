// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuPortal  } from '@/components/ui/dropdown-menu';
import { Button  } from '@/components/ui/button';
import { CreditCard, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from "lucide-react";



const DropdownMenuGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>DropdownMenu</h1>
        <p className={styles.description}>
          버튼 등의 트리거를 클릭할 때 열리는 옵션 및 액션 메뉴 창입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            DropdownMenu 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>open</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>메뉴 열림 제어</td>
                </tr>
                <tr>
                  <td><code>modal</code></td>
                  <td><code>boolean</code></td>
                  <td><code>true</code></td>
                  <td>외부 스크롤 잠금 및 모달 기능 활성화 여부</td>
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
{`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuPortal  } from '@/components/ui/dropdown-menu';
import { Button  } from '@/components/ui/button';
import { CreditCard, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from "lucide-react";

// Basic Component Usage
<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Open Menu</Button></DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
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
            
              <DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Open Menu</Button></DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem><User className="mr-2 h-4 w-4" /><span>Profile</span><DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut></DropdownMenuItem>
      <DropdownMenuItem><CreditCard className="mr-2 h-4 w-4" /><span>Billing</span><DropdownMenuShortcut>⌘B</DropdownMenuShortcut></DropdownMenuItem>
      <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /><span>Settings</span><DropdownMenuShortcut>⌘S</DropdownMenuShortcut></DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem><Users className="mr-2 h-4 w-4" /><span>Team</span></DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger><UserPlus className="mr-2 h-4 w-4" /><span>Invite users</span></DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem><Mail className="mr-2 h-4 w-4" /><span>Email</span></DropdownMenuItem>
            <DropdownMenuItem><MessageSquare className="mr-2 h-4 w-4" /><span>Message</span></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><PlusCircle className="mr-2 h-4 w-4" /><span>More...</span></DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuItem><Plus className="mr-2 h-4 w-4" /><span>New Team</span><DropdownMenuShortcut>⌘+T</DropdownMenuShortcut></DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem><LifeBuoy className="mr-2 h-4 w-4" /><span>Support</span></DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /><span>Log out</span><DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Open Menu</Button></DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default DropdownMenuGuidePage;
