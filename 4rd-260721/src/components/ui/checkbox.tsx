import React, { forwardRef } from 'react';
import { cn } from '@/utils/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
  error?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, disabled, id, ...props }, ref) => {
    // Generate a unique ID if none is provided but a label exists
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    return (
      <div className={cn("flex items-start gap-2", className)}>
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            disabled={disabled}
            className={cn(
              "peer h-4 w-4 shrink-0 appearance-none rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:text-primary-foreground",
              error && "border-destructive focus-visible:ring-destructive checked:bg-destructive"
            )}
            {...props}
          />
          <Check className="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
        </div>
        
        {(label || description) && (
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={checkboxId}
                className={cn(
                  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  disabled && "cursor-not-allowed opacity-50",
                  error && "text-destructive"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p className={cn("text-sm text-muted-foreground", disabled && "opacity-50")}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
