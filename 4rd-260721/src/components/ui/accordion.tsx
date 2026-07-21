import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/utils';

export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  type?: 'single' | 'multiple';
  variant?: 'default' | 'block' | 'line-wall';
  defaultValue?: string | string[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  items: {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = 'single', variant = 'default', defaultValue, value, onChange, items, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<string | string[]>(
      value !== undefined ? value : defaultValue !== undefined ? defaultValue : type === 'multiple' ? [] : ''
    );

    const currentValue = value !== undefined ? value : internalValue;

    const handleToggle = (id: string) => {
      let newValue: string | string[];
      if (type === 'multiple') {
        const arr = Array.isArray(currentValue) ? currentValue : [];
        if (arr.includes(id)) {
          newValue = arr.filter(v => v !== id);
        } else {
          newValue = [...arr, id];
        }
      } else {
        newValue = currentValue === id ? '' : id;
      }
      
      setInternalValue(newValue);
      onChange?.(newValue);
    };

    const isExpanded = (id: string) => {
      if (type === 'multiple' && Array.isArray(currentValue)) {
        return currentValue.includes(id);
      }
      return currentValue === id;
    };

    return (
      <div ref={ref} className={cn("flex flex-col w-full", className)} {...props}>
        {items.map((item, index) => {
          const expanded = isExpanded(item.id);
          return (
            <div 
              key={item.id} 
              className={cn(
                "w-full transition-colors",
                variant === 'default' && "border-b border-border last:border-b-0",
                variant === 'block' && "mb-2 border border-border rounded-lg overflow-hidden bg-white last:mb-0",
                variant === 'line-wall' && "border-l-4 pl-4 mb-4 last:mb-0",
                variant === 'line-wall' && expanded ? "border-[#0294de]" : variant === 'line-wall' ? "border-gray-200" : ""
              )}
            >
              <button
                type="button"
                onClick={() => handleToggle(item.id)}
                className={cn(
                  "flex items-center justify-between w-full py-4 font-medium transition-all hover:underline text-left",
                  variant === 'block' && "px-4 bg-gray-50 hover:bg-gray-100 hover:underline-none",
                  variant === 'line-wall' && "py-2"
                )}
                aria-expanded={expanded}
              >
                <div className="flex-1">{item.title}</div>
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200 text-gray-500",
                    expanded && "rotate-180"
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                  !expanded && "hidden"
                )}
              >
                <div className={cn(
                  "pb-4 pt-0 text-sm text-gray-600",
                  variant === 'block' && "p-4 bg-white border-t border-border",
                  variant === 'line-wall' && "py-2"
                )}>
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
Accordion.displayName = 'Accordion';
