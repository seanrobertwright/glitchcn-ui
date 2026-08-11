import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 border px-3 py-1 text-base shadow-xs transition-all outline-none",
        "bg-[rgb(var(--glitch-surface))] text-[rgb(var(--glitch-primary))] border-[rgb(var(--glitch-border)/50%)]",
        "placeholder:text-[rgb(var(--glitch-primary)/40%)] placeholder:font-mono",
        "font-mono tracking-wide",
        "[clip-path:polygon(0_4px,4px_0,calc(100%-4px)_0,100%_4px,100%_calc(100%-4px),calc(100%-4px)_100%,4px_100%,0_calc(100%-4px))]",
        "relative",
        "shadow-[inset_0_1px_0_0_rgb(var(--glitch-accent)/10%),0_0_0_1px_rgb(var(--glitch-accent)/10%)]",
        "focus:border-[rgb(var(--glitch-border-hover))] focus:shadow-[0_0_8px_rgb(var(--glitch-accent)/30%),inset_0_1px_0_0_rgb(var(--glitch-accent)/20%)]",
        "hover:border-[rgb(var(--glitch-border-hover)/70%)]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[rgb(var(--glitch-primary))]",
        "selection:bg-[rgb(var(--glitch-accent)/30%)] selection:text-[rgb(var(--glitch-primary))]",
        "aria-invalid:border-[rgb(var(--glitch-destructive-border)/70%)] aria-invalid:shadow-[0_0_8px_rgb(var(--glitch-destructive-glow)/30%)]",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }