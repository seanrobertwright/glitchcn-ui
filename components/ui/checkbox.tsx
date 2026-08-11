"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    data-slot="checkbox"
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-lg border border-[rgb(var(--glitch-border)/50%)] bg-[rgb(var(--glitch-surface))] text-[rgb(var(--glitch-primary))]",
      "shadow-[inset_0_1px_0_0_rgb(var(--glitch-accent)/20%),0_0_0_1px_rgb(var(--glitch-accent)/15%)]",
      "transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--glitch-accent))] focus-visible:ring-offset-2",
      "data-[state=checked]:bg-[rgb(var(--glitch-border-hover))] data-[state=checked]:border-[rgb(var(--glitch-border-hover))] data-[state=checked]:text-[rgb(var(--glitch-surface))]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className="grid place-content-center text-current transition-transform"
    >
      <CheckIcon className="h-3.5 w-3.5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = "Checkbox"

export { Checkbox }
