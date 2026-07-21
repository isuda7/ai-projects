import React from 'react';
import { cn } from '@/utils/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'solid' | 'outline' | 'soft';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'solid', color = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          size === 'sm' && "px-2 py-0.5 text-[10px]",
          size === 'md' && "px-2.5 py-0.5 text-xs",
          size === 'lg' && "px-3 py-1 text-sm",
          
          variant === 'solid' && color === 'default' && "bg-gray-900 text-white hover:bg-gray-800",
          variant === 'solid' && color === 'primary' && "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === 'solid' && color === 'success' && "bg-emerald-600 text-white hover:bg-emerald-700",
          variant === 'solid' && color === 'warning' && "bg-amber-500 text-white hover:bg-amber-600",
          variant === 'solid' && color === 'danger' && "bg-red-600 text-white hover:bg-red-700",
          
          variant === 'outline' && "border border-gray-200 text-gray-900 bg-white hover:bg-gray-100",
          variant === 'outline' && color === 'primary' && "border-primary text-primary hover:bg-primary/10",
          variant === 'outline' && color === 'success' && "border-emerald-600 text-emerald-700 hover:bg-emerald-50",
          variant === 'outline' && color === 'warning' && "border-amber-500 text-amber-700 hover:bg-amber-50",
          variant === 'outline' && color === 'danger' && "border-red-600 text-red-700 hover:bg-red-50",
          
          variant === 'soft' && color === 'default' && "bg-gray-100 text-gray-800 hover:bg-gray-200",
          variant === 'soft' && color === 'primary' && "bg-primary/10 text-primary hover:bg-primary/20",
          variant === 'soft' && color === 'success' && "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
          variant === 'soft' && color === 'warning' && "bg-amber-100 text-amber-800 hover:bg-amber-200",
          variant === 'soft' && color === 'danger' && "bg-red-100 text-red-800 hover:bg-red-200",
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';
