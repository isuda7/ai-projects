import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import styles from './input.module.scss';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  inputSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize = 'md', error = false, fullWidth = false, leftIcon, rightIcon, disabled, ...props }, ref) => {
    return (
      <div className={cn(styles.wrapper, fullWidth && styles.full_width, disabled && styles.disabled)}>
        {leftIcon && <span className={styles.icon_left}>{leftIcon}</span>}
        <input
          ref={ref}
          className={cn(
            styles.input,
            styles[`size_${inputSize}`],
            error && styles.error,
            leftIcon && styles.has_left_icon,
            rightIcon && styles.has_right_icon,
            className
          )}
          disabled={disabled}
          {...props}
        />
        {rightIcon && <span className={styles.icon_right}>{rightIcon}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;