import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "border-transparent shadow",
        outline: "bg-transparent",
        soft: "border-transparent",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        danger: "",
        warning: "",
        info: "",
      },
      size: {
        sm: "h-5 px-2 text-[10px]",
        md: "h-6 px-2.5 text-xs",
        lg: "h-7 px-3 text-sm",
      }
    },
    compoundVariants: [
      // Solid Variants
      { variant: "solid", color: "default", className: "bg-gray-900 text-white hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900" },
      { variant: "solid", color: "primary", className: "bg-primary text-primary-foreground hover:bg-primary/80" },
      { variant: "solid", color: "secondary", className: "bg-secondary text-secondary-foreground hover:bg-secondary/80" },
      { variant: "solid", color: "success", className: "bg-success text-success-foreground hover:bg-success/80" },
      { variant: "solid", color: "danger", className: "bg-danger text-danger-foreground hover:bg-danger/80" },
      { variant: "solid", color: "warning", className: "bg-warning text-warning-foreground hover:bg-warning/80" },
      { variant: "solid", color: "info", className: "bg-info text-info-foreground hover:bg-info/80" },
      
      // Outline Variants
      { variant: "outline", color: "default", className: "border-input text-foreground hover:bg-accent" },
      { variant: "outline", color: "primary", className: "border-primary text-primary hover:bg-primary/10" },
      { variant: "outline", color: "secondary", className: "border-secondary text-secondary hover:bg-secondary/10" },
      { variant: "outline", color: "success", className: "border-success text-success hover:bg-success/10" },
      { variant: "outline", color: "danger", className: "border-danger text-danger hover:bg-danger/10" },
      { variant: "outline", color: "warning", className: "border-warning text-warning hover:bg-warning/10" },
      { variant: "outline", color: "info", className: "border-info text-info hover:bg-info/10" },

      // Soft Variants
      { variant: "soft", color: "default", className: "bg-accent text-accent-foreground hover:bg-accent/80" },
      { variant: "soft", color: "primary", className: "bg-primary/10 text-primary hover:bg-primary/20" },
      { variant: "soft", color: "secondary", className: "bg-secondary/10 text-secondary hover:bg-secondary/20" },
      { variant: "soft", color: "success", className: "bg-success/10 text-success hover:bg-success/20" },
      { variant: "soft", color: "danger", className: "bg-danger/10 text-danger hover:bg-danger/20" },
      { variant: "soft", color: "warning", className: "bg-warning/10 text-warning hover:bg-warning/20" },
      { variant: "soft", color: "info", className: "bg-info/10 text-info hover:bg-info/20" },
    ],
    defaultVariants: {
      variant: "solid",
      color: "default",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, color, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, color, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
