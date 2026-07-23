import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code } from 'lucide-react';
import styles from '../template.module.scss';

interface CodeBlockProps {
  children: React.ReactNode;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.code_block_wrapper}>
      <div className={styles.code_block_header} onClick={() => setIsOpen(!isOpen)}>
        <button className={styles.code_toggle_btn}>
          <Code size={16} className={styles.code_toggle_icon} />
          <span>{isOpen ? 'Hide Code' : 'View Code'}</span>
        </button>
        {isOpen ? <ChevronUp size={16} className={styles.code_toggle_icon} /> : <ChevronDown size={16} className={styles.code_toggle_icon} />}
      </div>
      {isOpen && (
        <div className={styles.code_view}>
          {children}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
