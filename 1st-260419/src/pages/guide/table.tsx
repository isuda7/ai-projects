// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCaption, TableFooter  } from '@/components/ui/table';



const TableGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Table</h1>
        <p className={styles.description}>
          행과 열로 이루어진 복잡한 데이터를 표시하는 표 형태의 컴포넌트입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            Table 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
          </p>
          
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 프로젝트의 디자인 시스템 규칙에 맞추어 사용하세요.
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCaption, TableFooter  } from '@/components/ui/table';

// Basic Component Usage
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
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
            
              <Table className="border rounded-md shadow-sm">
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow><TableCell className="font-medium">INV001</TableCell><TableCell>Paid</TableCell><TableCell>Credit Card</TableCell><TableCell className="text-right">$250.00</TableCell></TableRow>
    <TableRow><TableCell className="font-medium">INV002</TableCell><TableCell>Pending</TableCell><TableCell>PayPal</TableCell><TableCell className="text-right">$150.00</TableCell></TableRow>
    <TableRow><TableCell className="font-medium">INV003</TableCell><TableCell>Unpaid</TableCell><TableCell>Bank Transfer</TableCell><TableCell className="text-right">$350.00</TableCell></TableRow>
  </TableBody>
  <TableFooter>
    <TableRow><TableCell colSpan={3}>Total</TableCell><TableCell className="text-right">$750.00</TableCell></TableRow>
  </TableFooter>
</Table>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="3. Variants & States">
        <p className={styles.description}>실무에서 자주 사용되는 다양한 옵션과 상태 변화 예시입니다.</p>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Striped Rows</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>행마다 배경색을 다르게 주어 가독성을 높인 스타일입니다.</p>
          <div className={styles.preview}>
            <Table className="border rounded-md shadow-sm overflow-hidden [&_tr:nth-child(even)]:bg-muted/50">
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell className="font-medium">INV001</TableCell><TableCell>Paid</TableCell><TableCell className="text-right">$250.00</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">INV002</TableCell><TableCell>Pending</TableCell><TableCell className="text-right">$150.00</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">INV003</TableCell><TableCell>Unpaid</TableCell><TableCell className="text-right">$350.00</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">INV004</TableCell><TableCell>Paid</TableCell><TableCell className="text-right">$450.00</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.2. Dense (Compact)</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>패딩을 줄여 더 많은 데이터를 한 화면에 보여주는 밀집 형태입니다.</p>
          <div className={styles.preview}>
            <Table className="border rounded-md shadow-sm [&_td]:py-1 [&_th]:py-1">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] h-8">Invoice</TableHead>
                  <TableHead className="h-8">Status</TableHead>
                  <TableHead className="text-right h-8">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell className="font-medium">INV001</TableCell><TableCell>Paid</TableCell><TableCell className="text-right">$250.00</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">INV002</TableCell><TableCell>Pending</TableCell><TableCell className="text-right">$150.00</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">INV003</TableCell><TableCell>Unpaid</TableCell><TableCell className="text-right">$350.00</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.3. Borderless</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>외곽선이나 내부 구분선 없이 깔끔하게 보여주는 형태입니다.</p>
          <div className={styles.preview}>
            <Table className="[&_tr]:border-none">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell className="font-medium">INV001</TableCell><TableCell>Paid</TableCell><TableCell className="text-right">$250.00</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">INV002</TableCell><TableCell>Pending</TableCell><TableCell className="text-right">$150.00</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">INV003</TableCell><TableCell>Unpaid</TableCell><TableCell className="text-right">$350.00</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </GuideSection>
      
    </div>
  );
};

export default TableGuidePage;
