"use client";

import { Card, CardContent } from "@/app/components/ui/Card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string | number;
  hint?: string;
  trend?: string;
};

export default function StatCard({
  icon,
  label,
  value,
  hint,
  trend,
}: StatCardProps) {
  return (
    <Card className="shadow-sm transition hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              "grid h-11 w-11 shrink-0 place-items-center rounded-xl",
              "bg-gradient-brand-subtle"
            )}
          >
            {icon}
          </div>
          {trend && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {trend}
            </span>
          )}
        </div>
        <div className="mt-4 min-w-0">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">
            {value}
          </p>
          {hint && (
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {hint}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
