// @ts-nocheck
import * as React from "react";
import styles from "./skeleton.module.scss";
import { cn } from "@/utils/cn";

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
