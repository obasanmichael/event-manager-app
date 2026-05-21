"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/Card";
import { chartColors } from "@/lib/theme/tokens";
import {
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

type TrendsCardProps = {
  data: { label: string; attendees: number }[];
  title?: string;
  subtitle?: string;
};

export default function TrendsCard({
  data,
  title = "Participation Trends",
  subtitle = "Attendee engagement by month",
}: TrendsCardProps) {
  const colors = chartColors.light;
  const total = data.reduce((sum, d) => sum + d.attendees, 0);

  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="border-b border-border bg-muted/40">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex h-72 flex-col items-center md:flex-row md:items-start">
          <div className="h-64 w-full md:w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="attendees"
                  nameKey="label"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={55}
                  paddingAngle={4}
                  cornerRadius={8}
                >
                  {data.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                      stroke="var(--card)"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.75rem",
                    color: "var(--foreground)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid w-full grid-cols-2 gap-3 text-sm md:mt-0 md:ml-6 md:w-1/2">
            {data.map((entry, index) => {
              const percent = ((entry.attendees / total) * 100).toFixed(0);
              return (
                <div
                  key={`legend-${index}`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2"
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: colors[index % colors.length],
                    }}
                  />
                  <span className="text-muted-foreground">
                    {entry.label}{" "}
                    <span className="font-semibold text-foreground">
                      {percent}%
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
