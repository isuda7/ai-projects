import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Button.module.scss";
import { cn } from "./utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "danger" | "link";
  variant?: "fill" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const buttonVariants = cva(
  styles.button,
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        danger: "",
        link: styles["button--link"],
      },
      variant: {
        fill: "",
        outline: "",
        ghost: "",
        // Legacy fallback variants:
        default: "",
        primary: "",
        secondary: "",
        danger: "",
        destructive: "",
      },
      size: {
        default: styles["button--md"],
        md: styles["button--md"],
        sm: styles["button--sm"],
        lg: styles["button--lg"],
        icon: styles["button--icon"],
      },
    },
    compoundVariants: [
      // Primary
      { color: "primary", variant: "fill", className: styles["button--primary-fill"] },
      { color: "primary", variant: "outline", className: styles["button--primary-outline"] },
      { color: "primary", variant: "ghost", className: styles["button--primary-ghost"] },

      // Secondary
      { color: "secondary", variant: "fill", className: styles["button--secondary-fill"] },
      { color: "secondary", variant: "outline", className: styles["button--secondary-outline"] },
      { color: "secondary", variant: "ghost", className: styles["button--secondary-ghost"] },

      // Danger
      { color: "danger", variant: "fill", className: styles["button--danger-fill"] },
      { color: "danger", variant: "outline", className: styles["button--danger-outline"] },
      { color: "danger", variant: "ghost", className: styles["button--danger-ghost"] },

      // Legacy fallback mappings:
      { variant: "default", className: styles["button--primary-fill"] },
      { variant: "primary", className: styles["button--primary-fill"] },
      { variant: "secondary", className: styles["button--secondary-fill"] },
      { variant: "destructive", className: styles["button--danger-fill"] },
      { variant: "danger", className: styles["button--danger-fill"] },
    ],
    defaultVariants: {
      color: "primary",
      variant: "fill",
      size: "md",
    },
  },
);

function Button({
  className,
  color,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ color, variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
