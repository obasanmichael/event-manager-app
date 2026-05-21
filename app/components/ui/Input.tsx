import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
