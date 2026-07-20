import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Badge.module.scss";
import { cn } from "./utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "default" | "primary" | "success" | "warning" | "danger";
  variant?: "fill" | "outline";
  asChild?: boolean;
}

const badgeVariants = cva(
  styles.badge,
  {
    variants: {
      color: {
        default: "",
        primary: "",
        success: "",
        warning: "",
        danger: "",
      },
      variant: {
        fill: "",
        outline: "",
        // Legacy fallback variants:
        default: "",
        primary: "",
        success: "",
        warning: "",
        danger: "",
      },
    },
    compoundVariants: [
      // Default
      { color: "default", variant: "fill", className: styles["badge--default-fill"] },
      { color: "default", variant: "outline", className: styles["badge--default-outline"] },

      // Primary
      { color: "primary", variant: "fill", className: styles["badge--primary-fill"] },
      { color: "primary", variant: "outline", className: styles["badge--primary-outline"] },

      // Success
      { color: "success", variant: "fill", className: styles["badge--success-fill"] },
      { color: "success", variant: "outline", className: styles["badge--success-outline"] },

      // Warning
      { color: "warning", variant: "fill", className: styles["badge--warning-fill"] },
      { color: "warning", variant: "outline", className: styles["badge--warning-outline"] },

      // Danger
      { color: "danger", variant: "fill", className: styles["badge--danger-fill"] },
      { color: "danger", variant: "outline", className: styles["badge--danger-outline"] },

      // Legacy fallback mappings:
      { variant: "default", className: styles["badge--default-fill"] },
      { variant: "primary", className: styles["badge--primary-fill"] },
      { variant: "success", className: styles["badge--success-fill"] },
      { variant: "warning", className: styles["badge--warning-fill"] },
      { variant: "danger", className: styles["badge--danger-fill"] },
      { variant: "outline", className: styles["badge--default-outline"] },
    ],
    defaultVariants: {
      color: "default",
      variant: "fill",
    },
  },
);

function Badge({
  className,
  color,
  variant,
  asChild = false,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ color, variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
