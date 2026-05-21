"use client";

import useProfileStore from "@/app/stores/profile/store";
import { Bell } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/Avatar";

type DashboardHeaderProps = {
  title: string;
  description?: string;
};

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  const { profile } = useProfileStore();
  const initials =
    [profile?.first_name?.[0], profile?.last_name?.[0]]
      .filter(Boolean)
      .join("")
      .toUpperCase() || "?";

  return (
    <header className="sticky top-0 z-30 shrink-0 border-b border-border bg-card shadow-sm">
      <div className="flex h-16 items-center justify-between gap-4 px-4 lg:px-8">
        <div className="min-w-0 pl-10 lg:pl-0">
          <h1 className="truncate text-lg font-semibold text-foreground lg:text-xl">
            {title}
          </h1>
          {description && (
            <p className="truncate text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <Bell className="h-4 w-4" />
          </button>
          <Avatar className="h-9 w-9 ring-2 ring-primary/15">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
