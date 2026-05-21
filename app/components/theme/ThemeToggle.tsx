"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/app/stores/theme/store";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  variant?: "icon" | "switch";
};

export function ThemeToggle({ className, variant = "icon" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";

  if (variant === "switch") {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        onClick={toggleTheme}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
          isDark ? "bg-primary" : "bg-muted",
          className
        )}
      >
        <span
          className={cn(
            "inline-flex h-4 w-4 transform items-center justify-center rounded-full bg-card shadow transition-transform",
            isDark ? "translate-x-6" : "translate-x-1"
          )}
        >
          {isDark ? (
            <Moon className="h-2.5 w-2.5 text-primary" />
          ) : (
            <Sun className="h-2.5 w-2.5 text-muted-foreground" />
          )}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground",
        className
      )}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
