import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from '../template.module.scss';

/**
 * 가이드 문서의 H2 섹션을 아코디언(접기/펼치기) 형태로 감싸는 공통 컴포넌트
 */
interface GuideSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const GuideSection = ({ title, children, defaultExpanded = true }: GuideSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <section className={styles.section}>
      <div className={styles.section_header} onClick={() => setIsExpanded(!isExpanded)}>
        <h2 className={styles.title_h2}>{title}</h2>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isExpanded && <div className={styles.section_content}>{children}</div>}
    </section>
  );
};

export default GuideSection;