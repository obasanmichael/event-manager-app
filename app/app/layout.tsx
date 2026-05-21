import { DashboardShell } from "@/app/components/layouts/DashboardShell";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
