// @ts-nocheck
"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import styles from "./separator.module.scss";
import { cn } from "@/utils/cn";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        styles.separator,
        styles[`separator--${orientation}`],
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
