import React from 'react';
import styles from './template.module.scss';
import Button from '@/components/ui/button';
import { Settings, ArrowRight } from 'lucide-react';

const ButtonGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Button</h1>
        <p className={styles.description}>
          사용자가 어떠한 액션을 트리거할 때 사용하는 가장 기본적인 컴포넌트입니다.
        </p>
      </header>

      <section className={styles.section}>
        <div>
          <h2 className={styles.title_h2}>1. Variants & Colors</h2>
          <p className={styles.description}>
            액션의 중요도와 목적에 따라 형태(variant)와 시맨틱 컬러(color)를 조합하여 사용합니다.
          </p>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>1.1. Solid (Primary Actions)</h3>
          <div className={styles.content}>
            <Button variant="solid" color="default">Default</Button>
            <Button variant="solid" color="primary">Primary</Button>
            <Button variant="solid" color="secondary">Secondary</Button>
            <Button variant="solid" color="success">Success</Button>
            <Button variant="solid" color="danger">Danger</Button>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>1.2. Outline (Secondary Actions)</h3>
          <div className={styles.content}>
            <Button variant="outline" color="default">Default</Button>
            <Button variant="outline" color="primary">Primary</Button>
            <Button variant="outline" color="secondary">Secondary</Button>
            <Button variant="outline" color="success">Success</Button>
            <Button variant="outline" color="danger">Danger</Button>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>1.3. Ghost & Text</h3>
          <div className={styles.content}>
            <Button variant="ghost" color="primary">Ghost Primary</Button>
            <Button variant="text" color="default">Text Default</Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div>
          <h2 className={styles.title_h2}>2. Sizes & States</h2>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Sizes</h3>
          <div className={styles.content} style={{ alignItems: 'center' }}>
            <Button size="sm">Small (32px)</Button>
            <Button size="md">Medium (36px)</Button>
            <Button size="lg">Large (40px)</Button>
            <Button size="icon" variant="outline"><Settings size={18} /></Button>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.2. Interactive States</h3>
          <div className={styles.content}>
            <Button disabled>Disabled</Button>
            <Button loading>Loading...</Button>
            <Button loading variant="outline" color="primary">Saving</Button>
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.3. With Icons & Layout</h3>
          <div className={styles.content} style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Button leftIcon={<Settings />}>Settings</Button>
              <Button rightIcon={<ArrowRight />} variant="outline" color="primary">Next Step</Button>
            </div>
            <Button fullWidth variant="solid" color="primary">Full Width Button</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonGuidePage;