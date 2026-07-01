// @ts-nocheck
import styles from './textarea.module.scss';
import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(styles.textarea_1,
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
