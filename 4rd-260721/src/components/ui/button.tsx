import React, { forwardRef } from 'react';
import { cn } from '@/utils/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost' | 'text';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'solid',
      color = 'default',
      size = 'md',
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Tailwind base classes
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    // Variant & Color Maps
    const variants = {
      solid: {
        default: "bg-gray-900 text-gray-50 hover:bg-gray-900/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success: "bg-emerald-500 text-white hover:bg-emerald-600",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        warning: "bg-amber-500 text-white hover:bg-amber-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
      },
      outline: {
        default: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        primary: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        success: "border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white",
        danger: "border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground",
        warning: "border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white",
        info: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
      },
      ghost: {
        default: "hover:bg-accent hover:text-accent-foreground",
        primary: "text-primary hover:bg-primary/10",
        secondary: "text-secondary hover:bg-secondary/10",
        success: "text-emerald-500 hover:bg-emerald-500/10",
        danger: "text-destructive hover:bg-destructive/10",
        warning: "text-amber-500 hover:bg-amber-500/10",
        info: "text-blue-500 hover:bg-blue-500/10",
      },
      text: {
        default: "text-gray-900 hover:underline px-0",
        primary: "text-primary hover:underline px-0",
        secondary: "text-secondary hover:underline px-0",
        success: "text-emerald-500 hover:underline px-0",
        danger: "text-destructive hover:underline px-0",
        warning: "text-amber-500 hover:underline px-0",
        info: "text-blue-500 hover:underline px-0",
      }
    };

    const sizes = {
      sm: "h-9 rounded-md px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          baseClasses,
          variants[variant][color],
          variant !== 'text' && sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
