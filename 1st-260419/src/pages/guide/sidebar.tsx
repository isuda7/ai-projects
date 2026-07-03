// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar/sidebar';



const SidebarGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Sidebar</h1>
        <p className={styles.description}>
          대시보드 레이아웃의 왼쪽을 담당하는 네비게이션 사이드바 컴포넌트 래퍼입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Sidebar 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>side</code></td>
                  <td><code>"left" | "right"</code></td>
                  <td><code>"left"</code></td>
                  <td>사이드바가 위치할 화면의 측면</td>
                </tr>
                <tr>
                  <td><code>variant</code></td>
                  <td><code>"sidebar" | "floating" | "inset"</code></td>
                  <td><code>"sidebar"</code></td>
                  <td>사이드바의 시각적 형태(테마 변형)</td>
                </tr>
                <tr>
                  <td><code>collapsible</code></td>
                  <td><code>"offcanvas" | "icon" | "none"</code></td>
                  <td><code>"offcanvas"</code></td>
                  <td>접혔을 때의 동작 형태</td>
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
{`import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar/sidebar';

// Basic Component Usage
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>Acme Corp</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem><SidebarMenuButton>Dashboard</SidebarMenuButton></SidebarMenuItem>
          <SidebarMenuItem><SidebarMenuButton isActive>Projects</SidebarMenuButton></SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>v1.0.0</SidebarFooter>
  </Sidebar>
  <main><SidebarTrigger /> Main Content</main>
</SidebarProvider>`}
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
            
              <div className="w-[300px] h-[300px] border rounded-md relative overflow-hidden"><SidebarProvider>
  <Sidebar>
    <SidebarHeader className="font-bold p-4">Acme Corp</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem><SidebarMenuButton>Dashboard</SidebarMenuButton></SidebarMenuItem>
          <SidebarMenuItem><SidebarMenuButton isActive>Projects</SidebarMenuButton></SidebarMenuItem>
          <SidebarMenuItem><SidebarMenuButton>Settings</SidebarMenuButton></SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter className="p-4 text-xs text-gray-500">v1.0.0</SidebarFooter>
  </Sidebar>
</SidebarProvider></div>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>Acme Corp</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem><SidebarMenuButton>Dashboard</SidebarMenuButton></SidebarMenuItem>
          <SidebarMenuItem><SidebarMenuButton isActive>Projects</SidebarMenuButton></SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>v1.0.0</SidebarFooter>
  </Sidebar>
  <main><SidebarTrigger /> Main Content</main>
</SidebarProvider>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default SidebarGuidePage;
