// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage  } from '@/components/ui/form';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

const FormDemoComponent = () => {
  const form = useForm({ defaultValues: { username: "" } });
  
  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted! check console');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[400px] border p-6 rounded-lg bg-white shadow-sm">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

const FormGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Form</h1>
        <p className={styles.description}>
          React Hook Form과 Zod를 결합하여 복잡한 폼 검증과 에러 메시지를 쉽게 처리할 수 있게 해주는 래퍼 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Form 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
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
                  <td><code>form</code></td>
                  <td><code>UseFormReturn</code></td>
                  <td><code>undefined</code></td>
                  <td>react-hook-form의 return 객체</td>
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
{`import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage  } from '@/components/ui/form';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

// Basic Component Usage
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>`}
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
            
              <FormDemoComponent />
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default FormGuidePage;
