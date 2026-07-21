import React from 'react';
import { cn } from '@/utils/utils';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  title?: string;
  icon?: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', title, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
          icon ? "pl-11" : "",
          variant === 'default' && "bg-background text-foreground",
          variant === 'destructive' && "border-red-500/50 text-red-600 bg-red-50 [&>svg]:text-red-600",
          variant === 'success' && "border-emerald-500/50 text-emerald-700 bg-emerald-50 [&>svg]:text-emerald-600",
          variant === 'warning' && "border-amber-500/50 text-amber-700 bg-amber-50 [&>svg]:text-amber-600",
          variant === 'info' && "border-blue-500/50 text-blue-700 bg-blue-50 [&>svg]:text-blue-600",
          className
        )}
        {...props}
      >
        {icon && icon}
        {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
        <div className="text-sm [&_p]:leading-relaxed">
          {children}
        </div>
      </div>
    );
  }
);
Alert.displayName = 'Alert';
