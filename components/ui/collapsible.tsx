"use client"

import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cn } from "@/lib/utils"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn(
        "flex w-full items-center justify-between gap-4 py-4 px-6 text-left font-mono tracking-wider uppercase text-sm font-bold",
        "text-[rgb(var(--glitch-primary))]",
        "transition-all duration-300 outline-none group/trigger",
        "hover:text-[rgb(var(--glitch-primary))] hover:[text-shadow:0_0_8px_rgb(var(--glitch-accent)/60%)]",
        "focus-visible:text-[rgb(var(--glitch-primary))] focus-visible:[text-shadow:0_0_8px_rgb(var(--glitch-accent)/60%)]",
        "disabled:pointer-events-none disabled:opacity-25",
        "relative overflow-hidden",
        "border-b border-[rgb(var(--glitch-border)/30%)]",
        "before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgb(var(--glitch-accent)/10%),transparent)]",
        "before:-translate-x-full hover:before:translate-x-full before:duration-500 before:pointer-events-none",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[linear-gradient(to_right,transparent,rgb(var(--glitch-accent)/50%),transparent)]",
        className
      )}
      {...props}
    />
  )
}

function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      className={cn(
        "overflow-hidden transition-all duration-300",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        "relative",
        "before:absolute before:inset-0 before:bg-[linear-gradient(0deg,transparent_0%,rgb(var(--glitch-accent)/3%)_50%,transparent_100%)] before:bg-size[100%_4px] before:pointer-events-none",
        "px-6 pb-4 pt-0 font-mono text-sm",
        "text-[rgb(var(--glitch-primary)/90%)]",
        className
      )}
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }