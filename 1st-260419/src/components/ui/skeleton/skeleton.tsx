// @ts-nocheck
import * as React from "react";
import styles from "./Skeleton.module.scss";
import { cn } from "./utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(styles.skeleton, className)}
      {...props}
    />
  );
}

export { Skeleton };
