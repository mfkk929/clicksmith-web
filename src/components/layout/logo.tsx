import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  const markBg =
    variant === "dark"
      ? "bg-[var(--color-primary)]"
      : "bg-white";
  const markFg =
    variant === "dark"
      ? "text-[var(--color-action)]"
      : "text-[var(--color-primary)]";
  const wordFg =
    variant === "dark"
      ? "text-[var(--color-primary)]"
      : "text-white";

  return (
    <Link
      href="/"
      aria-label="ClickSmith — home"
      className={cn(
        "inline-flex items-center gap-2.5 font-bold tracking-tight",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-lg font-display text-lg",
          markBg,
          markFg
        )}
        aria-hidden="true"
      >
        C
      </span>
      <span className={cn("font-display text-lg", wordFg)}>ClickSmith</span>
    </Link>
  );
}
