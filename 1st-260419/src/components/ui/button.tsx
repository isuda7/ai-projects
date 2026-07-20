import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid: "shadow-sm",
        outline: "border shadow-sm bg-transparent",
        ghost: "bg-transparent",
        text: "bg-transparent hover:underline",
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
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-9 px-4 py-2",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      fullWidth: {
        true: "w-full",
      }
    },
    compoundVariants: [
      // Solid Variants
      {
        variant: "solid",
        color: "default",
        className: "bg-gray-900 text-white hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900",
      },
      {
        variant: "solid",
        color: "primary",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "solid",
        color: "secondary",
        className: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      {
        variant: "solid",
        color: "success",
        className: "bg-success text-success-foreground hover:bg-success/90",
      },
      {
        variant: "solid",
        color: "danger",
        className: "bg-danger text-danger-foreground hover:bg-danger/90",
      },
      {
        variant: "solid",
        color: "warning",
        className: "bg-warning text-warning-foreground hover:bg-warning/90",
      },
      {
        variant: "solid",
        color: "info",
        className: "bg-info text-info-foreground hover:bg-info/90",
      },
      // Outline Variants
      {
        variant: "outline",
        color: "default",
        className: "border-input text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      {
        variant: "outline",
        color: "primary",
        className: "border-primary text-primary hover:bg-primary/10",
      },
      {
        variant: "outline",
        color: "secondary",
        className: "border-secondary text-secondary hover:bg-secondary/10",
      },
      {
        variant: "outline",
        color: "success",
        className: "border-success text-success hover:bg-success/10",
      },
      {
        variant: "outline",
        color: "danger",
        className: "border-danger text-danger hover:bg-danger/10",
      },
      {
        variant: "outline",
        color: "warning",
        className: "border-warning text-warning hover:bg-warning/10",
      },
      {
        variant: "outline",
        color: "info",
        className: "border-info text-info hover:bg-info/10",
      },
      // Ghost Variants
      {
        variant: "ghost",
        color: "default",
        className: "text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      {
        variant: "ghost",
        color: "primary",
        className: "text-primary hover:bg-primary/10",
      },
      {
        variant: "ghost",
        color: "secondary",
        className: "text-secondary hover:bg-secondary/10",
      },
      {
        variant: "ghost",
        color: "success",
        className: "text-success hover:bg-success/10",
      },
      {
        variant: "ghost",
        color: "danger",
        className: "text-danger hover:bg-danger/10",
      },
      {
        variant: "ghost",
        color: "warning",
        className: "text-warning hover:bg-warning/10",
      },
      {
        variant: "ghost",
        color: "info",
        className: "text-info hover:bg-info/10",
      },
      // Text Variants
      {
        variant: "text",
        color: "default",
        className: "text-foreground",
      },
      {
        variant: "text",
        color: "primary",
        className: "text-primary",
      },
      {
        variant: "text",
        color: "secondary",
        className: "text-secondary",
      },
      {
        variant: "text",
        color: "success",
        className: "text-success",
      },
      {
        variant: "text",
        color: "danger",
        className: "text-danger",
      },
      {
        variant: "text",
        color: "warning",
        className: "text-warning",
      },
      {
        variant: "text",
        color: "info",
        className: "text-info",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "default",
      size: "md",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, fullWidth, loading, asChild = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isDisabled = disabled || loading;
    return (
      <Comp
        className={cn(buttonVariants({ variant, color, size, fullWidth, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
