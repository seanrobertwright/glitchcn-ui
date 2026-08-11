import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-md",
        "bg-[rgb(var(--glitch-surface-hover))] border border-[rgb(var(--glitch-border)/30%)]",
        "shadow-[inset_0_1px_0_0_rgb(var(--glitch-accent)/10%)]",
        "dark:bg-[rgb(var(--glitch-surface-hover))] dark:border-[rgb(var(--glitch-border)/30%)]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }