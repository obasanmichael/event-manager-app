"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/Card";
import {
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

type TrendsCardProps = {
  data: { label: string; attendees: number }[];
  title?: string;
  subtitle?: string;
};

const COLORS = [
  "#6366f1", // indigo-500
  "#8b5cf6", // violet-500
  "#ec4899", // pink-500
  "#f59e0b", // amber-500
  "#10b981", // emerald-500
  "#3b82f6", // blue-500
];

export default function TrendsCard({
  data,
  title = "Participation Trends",
  subtitle = "Attendees by month",
}: TrendsCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-xs opacity-90">{subtitle}</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-72 flex flex-col md:flex-row items-center md:items-start">
          {/* Donut chart */}
          <div className="w-full md:w-1/2 h-64">
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
                  cornerRadius={8} // 🔥 rounded edges
                >
                  {data.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    border: "none",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend (mapped colors + labels + percentages) */}
          <div className="mt-6 md:mt-0 md:ml-8 grid grid-cols-2 gap-4 text-sm w-full md:w-1/2">
            {data.map((entry, index) => {
              const total = data.reduce((sum, d) => sum + d.attendees, 0);
              const percent = ((entry.attendees / total) * 100).toFixed(0);

              return (
                <div
                  key={`legend-${index}`}
                  className="flex items-center space-x-2"
                >
                  <span
                    className="h-3 w-3 rounded-sm"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-gray-700">
                    {entry.label} – {percent}%
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
