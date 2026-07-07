// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage  } from '@/components/ui/form';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

const Form1ColumnDemo = () => {
  const form = useForm({ defaultValues: { username: "", email: "" } });
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      {/* 1-Column Layout: space-y-6 만 사용하여 수직으로 쌓임 */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="user@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

const Form2ColumnDemo = () => {
  const form = useForm({ defaultValues: { firstName: "", lastName: "", company: "", title: "" } });
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      {/* 2-Column Layout: grid를 사용하여 다단 구조 생성 */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Corp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="Developer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};


const FormGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Form Layouts</h1>
        <p className={styles.description}>
          Form 요소들을 그룹화하고 전반적인 레이아웃(1단, 2단 등) 구조를 담당합니다. 특정 박스나 컨테이너 디자인에 종속되지 않으며 오직 구획 배치에 집중합니다.
        </p>
      </header>

      <GuideSection title="1. Overview">
          <p className={styles.description}>
            Form의 기본 레이아웃은 개별 Field들을 어떻게 정렬할 것인지 전체 흐름을 관장합니다. 여백(`gap`, `space-y`)과 구조(`grid`, `flex`)에만 관여합니다.
          </p>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 폼 그룹에 박스형 보더나 배경을 넣는 것은 여기서 다루지 않습니다. 오직 필드 간의 뼈대 역할을 합니다.
          </div>
      </GuideSection>

      <GuideSection title="2. Layout Options">
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. 1-Column (Stack) Layout</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>
            가장 기본적인 형태로, 모든 필드가 수직으로 정렬됩니다. `space-y-*` 유틸리티를 활용하여 일정한 세로 간격을 줍니다.
          </p>
          <div className={styles.preview}>
            <Form1ColumnDemo />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<form className="space-y-6 w-full max-w-md">
  <FormField name="username" ... />
  <FormField name="email" ... />
  <Button type="submit">Submit</Button>
</form>`}
              </code>
            </pre>
          </CodeBlock>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.2. 2-Column (Grid) Layout</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>
            공간이 넓은 데스크탑 환경이나 그룹화가 필요한 다단 구조에서 사용합니다. `grid`와 `gap-*` 유틸리티를 활용합니다.
          </p>
          <div className={styles.preview}>
            <Form2ColumnDemo />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<form className="w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <FormField name="firstName" ... />
    <FormField name="lastName" ... />
    <FormField name="company" ... />
    <FormField name="title" ... />
  </div>
  <Button type="submit">Submit</Button>
</form>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default FormGuidePage;
