import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono tracking-[0.2em] uppercase text-lg font-bold transition-all duration-150 disabled:pointer-events-none disabled:opacity-25 [&_svg:not([class*='size-'])]:size-4 outline-none relative overflow-hidden group cursor-pointer [clip-path:polygon(0_8px,8px_0,calc(100%-8px)_0,100%_8px,100%_calc(100%-8px),calc(100%-8px)_100%,8px_100%,0_calc(100%-8px))]",
  {
    variants: {
      variant: {
        default: `
          bg-[rgb(var(--glitch-surface))] text-[rgb(var(--glitch-primary)/90%)] border border-[rgb(var(--glitch-border)/70%)]
          hover:bg-[rgb(var(--glitch-surface-hover))] hover:border-[rgb(var(--glitch-border-hover))] hover:text-[rgb(var(--glitch-primary))]
          shadow-[inset_0_1px_0_0_rgb(var(--glitch-accent)/25%),0_0_0_1px_rgb(var(--glitch-accent)/20%)]
          hover:shadow-[inset_0_1px_0_0_rgb(var(--glitch-accent)/40%),0_0_16px_rgb(var(--glitch-accent)/50%),0_0_24px_rgb(var(--glitch-accent)/30%)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgb(var(--glitch-accent)/25%),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-500
          after:absolute after:inset-0 after:bg-[linear-gradient(0deg,transparent_0%,rgb(var(--glitch-accent)/10%)_50%,transparent_100%)]
          after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300
          hover:[animation:glitch_0.3s_cubic-bezier(0.25,0.46,0.45,0.94)_2]
        `,
        destructive: `
          bg-[rgb(var(--glitch-destructive-surface))] text-[rgb(var(--glitch-destructive))] border border-[rgb(var(--glitch-destructive-border)/70%)]
          hover:bg-[rgb(var(--glitch-destructive-surface-hover))] hover:border-[rgb(var(--glitch-destructive-border-hover))]
          shadow-[inset_0_1px_0_0_rgb(var(--glitch-destructive-glow)/25%),0_0_0_1px_rgb(var(--glitch-destructive-glow)/20%)]
          hover:shadow-[inset_0_1px_0_0_rgb(var(--glitch-destructive-glow)/40%),0_0_16px_rgb(var(--glitch-destructive-glow)/50%),0_0_24px_rgb(var(--glitch-destructive-glow)/30%)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgb(var(--glitch-destructive-glow)/25%),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-500
          after:absolute after:inset-0 after:bg-[linear-gradient(0deg,transparent_0%,rgb(var(--glitch-destructive-glow)/10%)_50%,transparent_100%)]
          after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300
          hover:[animation:glitch_0.3s_cubic-bezier(0.25,0.46,0.45,0.94)_2]
        `,
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 py-1.5 text-[10px]",
        lg: "h-12 px-8 py-3 text-sm",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Comp>
  )
}

export { Button, buttonVariants }