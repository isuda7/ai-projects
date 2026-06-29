import * as React from "react";
import styles from "./Input.module.scss";
import { cn } from "./utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

function Input({ className, type, label, helperText, error, id, ...props }: InputProps) {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        className={cn(
          styles.input,
          error ? styles["input--error"] : "",
          className
        )}
        {...props}
      />
      {(error || helperText) && (
        <p className={cn(styles.helperText, error ? styles["helperText--error"] : "")}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}

export { Input };
