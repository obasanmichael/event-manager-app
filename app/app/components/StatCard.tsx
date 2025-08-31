"use client";

import { Card, CardContent } from "@/app/components/Card";
import { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string | number;
  hint?: string;
};

export default function StatCard({ icon, label, value, hint }: StatCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-5">
        <div className="flex items-center gap-3">
          <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-600/10 text-indigo-600">
            {icon}
          </div>
          <div className="min-w-0">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-xl font-semibold text-gray-900">{value}</p>
            {hint && <p className="text-xs text-gray-500 mt-1">{hint}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
