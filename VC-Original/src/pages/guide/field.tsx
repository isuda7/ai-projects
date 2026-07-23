// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage  } from '@/components/ui/form';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';

const FieldVerticalDemo = () => {
  const form = useForm({ defaultValues: { verticalInput: "" } });
  
  return (
    <Form {...form}>
      <form className="w-full max-w-sm">
        <FormField
          control={form.control}
          name="verticalInput"
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
      </form>
    </Form>
  );
};

const FieldHorizontalDemo = () => {
  const form = useForm({ defaultValues: { horizontalInput: "" } });
  
  return (
    <Form {...form}>
      <form className="w-full max-w-lg">
        <FormField
          control={form.control}
          name="horizontalInput"
          render={({ field }) => (
            <FormItem className="flex flex-col sm:flex-row sm:items-start gap-4 space-y-0">
              <FormLabel className="sm:w-1/3 sm:mt-3 text-left">Email Address</FormLabel>
              <div className="flex-1 flex flex-col gap-2">
                <FormControl>
                  <Input placeholder="user@example.com" {...field} />
                </FormControl>
                <FormDescription>We will never share your email with anyone else.</FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const FieldGroupDemo = () => {
  const form = useForm({ defaultValues: { firstName: "", lastName: "", isSubscribed: true } });
  
  return (
    <Form {...form}>
      <form className="w-full max-w-md space-y-6">
        {/* 복합 컨트롤 요소: 두 개의 Input을 나란히 배치 */}
        <FormField
          control={form.control}
          name="firstName"
          render={() => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                  )}
                />
              </div>
              <FormDescription>Please enter your legal name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 체크박스 구조: 컨트롤이 좌측, 라벨이 우측 */}
        <FormField
          control={form.control}
          name="isSubscribed"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-md">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Subscribe to newsletter
                </FormLabel>
                <FormDescription>
                  You will receive emails about new products, features, and more.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const FieldGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Field Layouts</h1>
        <p className={styles.description}>
          입력 컨트롤(Input, Select 등)과 라벨(Label), 보조 메세지(Description), 에러 메세지(Error)가 결합되는 단일 필드 유닛의 구조를 담당합니다.
        </p>
      </header>

      <GuideSection title="1. Overview">
          <p className={styles.description}>
            Field는 사용자의 입력을 받는 최소 단위의 그룹입니다. 레이아웃(수직/수평)에 따라 라벨과 컨트롤의 배치 방식이 달라집니다.
          </p>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 에러 메세지와 보조 설명은 항상 입력 컨트롤 바로 아래 또는 근접한 영역에 구조화되어야 합니다.
          </div>
      </GuideSection>

      <GuideSection title="2. Layout Options">
          
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Vertical Layout (Default)</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>
            가장 기본적인 구조로, [라벨] - [컨트롤] - [설명/에러] 순으로 위에서 아래로 떨어지는 형태입니다.
          </p>
          <div className={styles.preview}>
            <FieldVerticalDemo />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<FormItem>
  <FormLabel>Username</FormLabel>
  <FormControl>
    <Input placeholder="shadcn" {...field} />
  </FormControl>
  <FormDescription>This is your public display name.</FormDescription>
  <FormMessage />
</FormItem>`}
              </code>
            </pre>
          </CodeBlock>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.2. Horizontal Layout</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>
            좌측에 라벨, 우측에 입력 컨트롤과 메세지들이 위치하는 형태입니다. FormItem에 \`flex\` 유틸리티를 활용하고 메세지 영역을 묶어줍니다.
          </p>
          <div className={styles.preview}>
            <FieldHorizontalDemo />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<FormItem className="flex flex-col sm:flex-row sm:items-start gap-4 space-y-0">
  <FormLabel className="sm:w-1/3 sm:mt-3 text-left">Email Address</FormLabel>
  
  <div className="flex-1 flex flex-col gap-2">
    <FormControl>
      <Input placeholder="user@example.com" {...field} />
    </FormControl>
    <FormDescription>We will never share your email...</FormDescription>
    <FormMessage />
  </div>
</FormItem>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Complex Combinations">
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Grouped Controls & Checkbox</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>
            한 필드 안에 여러 개의 Input이 나란히 들어가거나, Checkbox처럼 컨트롤 요소가 좌측에 배치되어야 할 때의 구조화 방식입니다.
          </p>
          <div className={styles.preview}>
            <FieldGroupDemo />
          </div>
          <CodeBlock>
            <pre>
              <code>
{`// 1. Grouped Controls (First / Last Name)
<FormItem>
  <FormLabel>Full Name</FormLabel>
  <div className="flex gap-4">
    <FormControl><Input placeholder="First" /></FormControl>
    <FormControl><Input placeholder="Last" /></FormControl>
  </div>
  <FormMessage />
</FormItem>

// 2. Checkbox Layout (Control on Left, Text on Right)
<FormItem className="flex flex-row items-start space-x-3 space-y-0 border p-4">
  <FormControl>
    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
  </FormControl>
  <div className="space-y-1 leading-none">
    <FormLabel>Subscribe</FormLabel>
    <FormDescription>Receive emails...</FormDescription>
  </div>
</FormItem>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default FieldGuidePage;
