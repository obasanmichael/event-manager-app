import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = { children: ReactNode; className?: string };

export const Card = ({ children, className }: CardProps) => (
  <div
    className={cn(
      "rounded-2xl border border-border bg-card text-card-foreground shadow-sm",
      className
    )}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className }: CardProps) => (
  <div
    className={cn(
      "border-b border-border px-6 py-4",
      className
    )}
  >
    {children}
  </div>
);

export const CardTitle = ({ children, className }: CardProps) => (
  <h2 className={cn("text-lg font-semibold text-card-foreground", className)}>
    {children}
  </h2>
);

export const CardDescription = ({ children, className }: CardProps) => (
  <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
);

export const CardContent = ({ children, className }: CardProps) => (
  <div className={cn("px-6 py-4", className)}>{children}</div>
);

export const CardAccentHeader = ({ children, className }: CardProps) => (
  <div
    className={cn(
      "bg-gradient-brand px-6 py-4 text-white",
      className
    )}
  >
    {children}
  </div>
);
