import { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';

interface PreviewBlockProps {
  children: React.ReactNode;
  code: string;
}

export function PreviewBlock({ children, code }: PreviewBlockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 mb-12">
      <div className="mb-6">
        {children}
      </div>
      <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-3 bg-slate-50 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <span className="flex items-center gap-2"><Code2 className="w-4 h-4" /> Code</span>
          <span>{isOpen ? '접기' : '펼치기'}</span>
        </button>
        {isOpen && (
          <div className="relative border-t border-slate-200 bg-[#0d1117] group">
            <button
              onClick={copyToClipboard}
              className="absolute top-3 right-3 p-2 rounded-lg bg-slate-800 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white"
              title="Copy code"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre className="p-4 overflow-x-auto text-sm text-slate-300 font-mono leading-relaxed">
              <code>{code.trim()}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}