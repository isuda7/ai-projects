// @ts-nocheck
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from '../template.module.scss';
import { cn } from '@/utils/utils';

interface GuideSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function GuideSection({ title, children, defaultOpen = true }: GuideSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className={styles.section}>
      <header 
        className={styles.section_header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h2 className={styles.title_h2}>{title}</h2>
        <ChevronDown 
          size={20}
          className={cn("transition-transform duration-300", isOpen && "-rotate-180")} 
        />
      </header>
      
      {isOpen && (
        <div className={styles.section_content}>
          {children}
        </div>
      )}
    </section>
  );
}
