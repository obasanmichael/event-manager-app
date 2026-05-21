import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  variant?: "default" | "light" | "sidebar";
};

export function Logo({
  href = "/",
  className,
  iconClassName,
  textClassName,
  variant = "default",
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-brand",
          iconClassName
        )}
      >
        <CalendarDays
          className={cn(
            "h-5 w-5",
            variant === "light" ? "text-white" : "text-primary-foreground"
          )}
        />
      </span>
      <span
        className={cn(
          "text-xl font-bold tracking-tight",
          variant === "light"
            ? "text-white"
            : variant === "sidebar"
              ? "text-foreground"
              : "text-gradient-brand",
          textClassName
        )}
      >
        Me-event
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
