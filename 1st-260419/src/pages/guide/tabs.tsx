// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter  } from '@/components/ui/card';
import { Label  } from '@/components/ui/label';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';



const TabsGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Tabs</h1>
        <p className={styles.description}>
          같은 맥락의 여러 뷰를 탭(Tab) 형태로 전환하며 보여줄 수 있는 레이아웃입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Tabs 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>defaultValue</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>초기 선택될 탭의 value 값</td>
                </tr>
                <tr>
                  <td><code>value</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>제어 상태일 때의 선택된 탭 value</td>
                </tr>
                <tr>
                  <td><code>onValueChange</code></td>
                  <td><code>(value: string) =&gt; void</code></td>
                  <td><code>undefined</code></td>
                  <td>탭 변경 시 콜백</td>
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
{`import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter  } from '@/components/ui/card';
import { Label  } from '@/components/ui/label';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';

// Basic Component Usage
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings form...</TabsContent>
  <TabsContent value="password">Password change form...</TabsContent>
</Tabs>`}
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
            
              <Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card><CardHeader><CardTitle>Account</CardTitle><CardDescription>Make changes to your account.</CardDescription></CardHeader><CardContent className="space-y-2"><div className="space-y-1"><Label htmlFor="name">Name</Label><Input id="name" defaultValue="Pedro Duarte" /></div></CardContent><CardFooter><Button>Save changes</Button></CardFooter></Card>
  </TabsContent>
  <TabsContent value="password">
    <Card><CardHeader><CardTitle>Password</CardTitle><CardDescription>Change your password here.</CardDescription></CardHeader><CardContent className="space-y-2"><div className="space-y-1"><Label htmlFor="current">Current password</Label><Input id="current" type="password" /></div></CardContent><CardFooter><Button>Save password</Button></CardFooter></Card>
  </TabsContent>
</Tabs>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings form...</TabsContent>
  <TabsContent value="password">Password change form...</TabsContent>
</Tabs>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & States">
        <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Line Tabs</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>하단 텍스트 밑줄(Border)로 활성화 상태를 나타냅니다.</p>
          <div className={styles.preview}>
            <Tabs defaultValue="tab1" className="w-[400px]">
              <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0">
                <TabsTrigger value="tab1" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2">Profile</TabsTrigger>
                <TabsTrigger value="tab2" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2">Settings</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Pill Tabs</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>둥근 알약 형태의 탭 디자인입니다.</p>
          <div className={styles.preview}>
            <Tabs defaultValue="tab1" className="w-[400px]">
              <TabsList className="rounded-full bg-slate-100 dark:bg-slate-800 p-1">
                <TabsTrigger value="tab1" className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 px-4">Daily</TabsTrigger>
                <TabsTrigger value="tab2" className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 px-4">Weekly</TabsTrigger>
                <TabsTrigger value="tab3" className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 px-4">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.3. Text Tabs</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>배경 없이 텍스트의 굵기나 색상만으로 활성화를 표현합니다.</p>
          <div className={styles.preview}>
            <Tabs defaultValue="tab1" className="w-[400px]">
              <TabsList className="bg-transparent gap-4">
                <TabsTrigger value="tab1" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground p-0 hover:text-primary">Music</TabsTrigger>
                <TabsTrigger value="tab2" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground p-0 hover:text-primary">Podcasts</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.4. Outline Tabs</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>탭 자체에 외곽선을 주어 명확하게 구분하는 형태입니다.</p>
          <div className={styles.preview}>
            <Tabs defaultValue="tab1" className="w-[400px]">
              <TabsList className="bg-transparent border p-1 rounded-md">
                <TabsTrigger value="tab1" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">General</TabsTrigger>
                <TabsTrigger value="tab2" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Security</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default TabsGuidePage;
