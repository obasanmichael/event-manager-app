"use client";

import { cn } from "@/lib/utils";

type SwitchProps = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  id?: string;
};

export const Switch = ({
  checked = false,
  onCheckedChange,
  className,
  id,
}: SwitchProps) => {
  return (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={checked}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        checked ? "bg-primary" : "bg-muted",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-card shadow transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
};
