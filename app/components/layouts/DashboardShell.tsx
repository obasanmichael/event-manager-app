import { DashboardSidebar } from "./DashboardSidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}
