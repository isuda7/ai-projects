// @ts-nocheck
import React, { useState } from 'react';
import { Check, Copy, Code2 } from 'lucide-react';
import styles from '../template.module.scss';
import { cn } from '@/utils/utils';

interface CodeBlockProps {
  children: React.ReactElement; // expected to be <pre><code>...</code></pre>
  defaultOpen?: boolean;
}

export default function CodeBlock({ children, defaultOpen = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  // Extract text content safely assuming <pre><code>{text}</code></pre>
  const textToCopy = children?.props?.children?.props?.children || '';

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  return (
    <div className={styles.code_block_wrapper}>
      <div 
        className={styles.code_block_header}
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className={styles.code_toggle_btn}>
          <Code2 size={16} className={styles.code_toggle_icon} />
          {isOpen ? 'Hide Code' : 'Show Code'}
        </button>
        <button 
          className="bg-transparent border-none p-1 cursor-pointer flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
        </button>
      </div>
      
      {isOpen && (
        <div className={styles.code_view}>
          <pre>
            <code>
              {textToCopy}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}
