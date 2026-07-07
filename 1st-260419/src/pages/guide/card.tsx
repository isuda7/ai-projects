// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';



const CardGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Card</h1>
        <p className={styles.description}>
          관련된 정보와 액션을 그룹화하는 유연하고 확장 가능한 컨테이너 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Card 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>className</code></td>
                  <td><code>string</code></td>
                  <td><code>undefined</code></td>
                  <td>커스텀 스타일링을 위한 클래스</td>
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
{`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';

// Basic Component Usage
<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content area</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
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
            
              <Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5"><Label htmlFor="name">Name</Label><Input id="name" placeholder="Name of your project" /></div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content area</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Simple Card</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>Header와 Footer 없이 단순 텍스트 컨텐츠만 담는 스타일입니다.</p>
          <div className={styles.preview}>
            
              <Card className="p-6 bg-slate-50 w-[350px]">
  <h3 className="font-semibold text-lg mb-2">Notice</h3>
  <p className="text-sm text-slate-500">This is a simple card without headers and footers. Ideal for brief notifications or stats.</p>
</Card>
            </div>
          <CodeBlock>
            <pre>
              <code>
{`<Card className="p-6">...</Card>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Horizontal Thumbnail</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>이미지가 좌측에 배치되는 가로형 카드입니다.</p>
          <div className={styles.preview}>
            <Card className="flex flex-row w-[500px] overflow-hidden">
              <div className="w-2/5 shrink-0 bg-muted">
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80" alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="font-bold text-lg mb-1">Building the Future</h3>
                <p className="text-sm text-muted-foreground mb-4">Discover how AI is transforming the web development landscape.</p>
                <div className="mt-auto flex gap-2">
                  <Button variant="outline" size="sm">Read More</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.3. Vertical Thumbnail</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>상단에 큰 이미지가 배치되는 세로형 카드입니다.</p>
          <div className={styles.preview}>
            <Card className="w-[350px] overflow-hidden">
              <div className="w-full h-[200px] bg-muted">
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80" alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Design System</CardTitle>
                <CardDescription>A comprehensive guide to creating scalable UIs.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button fullWidth>View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.4. Overlay Thumbnail</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>이미지 위에 텍스트가 오버레이 되는 카드입니다.</p>
          <div className={styles.preview}>
            <Card className="relative w-[350px] h-[250px] overflow-hidden text-white border-0">
              <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80" alt="Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-bold text-xl mb-1 text-white">Next.js Conf</h3>
                <p className="text-sm text-gray-300">Join us for the ultimate React framework event of the year.</p>
              </div>
            </Card>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default CardGuidePage;
