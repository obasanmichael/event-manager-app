"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LogOut,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  CalendarDays,
  Users,
  Settings,
  ExternalLink,
} from "lucide-react";
import { signOut } from "@/lib/auth";
import { Logo } from "@/app/components/brand/Logo";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Dashboard", href: "/app", icon: Home },
  { label: "My Events", href: "/app/events", icon: CalendarDays },
  { label: "Attendees", href: "/app/attendees", icon: Users },
  { label: "Settings", href: "/app/settings", icon: Settings },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-40 flex h-14 items-center border-b border-border bg-card px-4 shadow-sm lg:hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground hover:bg-muted"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="ml-3">
          <Logo href="/app" variant="sidebar" />
        </div>
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex h-screen min-h-screen flex-col border-r border-sidebar-border bg-sidebar shadow-sm transition-all duration-300 lg:sticky lg:top-0",
          collapsed ? "lg:w-[72px]" : "lg:w-64",
          isMobileOpen ? "w-64 translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-sidebar-border px-4">
          {!collapsed && <Logo href="/app" variant="sidebar" />}
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="rounded-lg p-1 text-sidebar-foreground hover:bg-muted lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-md hover:text-foreground lg:flex"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-3.5 w-3.5" />
          ) : (
            <ChevronLeft className="h-3.5 w-3.5" />
          )}
        </button>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {menuItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={<item.icon className="h-5 w-5 shrink-0" />}
              label={item.label}
              collapsed={collapsed}
              onClick={() => setIsMobileOpen(false)}
            />
          ))}
        </nav>

        <div className="mt-auto shrink-0 space-y-1 border-t border-sidebar-border px-3 py-4">
          <SidebarLink
            href="/"
            icon={<ExternalLink className="h-5 w-5 shrink-0" />}
            label="Public site"
            collapsed={collapsed}
            onClick={() => setIsMobileOpen(false)}
          />
          <button
            type="button"
            onClick={() => {
              signOut();
              setIsMobileOpen(false);
            }}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-destructive transition hover:bg-red-50 dark:hover:bg-destructive/10",
              collapsed && "justify-center"
            )}
          >
            <LogOut className="h-5 w-5 shrink-0" />
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

function SidebarLink({
  href,
  icon,
  label,
  collapsed,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const active =
    href === "/app" ? pathname === "/app" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
        active
          ? "bg-sidebar-active text-sidebar-active-foreground shadow-sm"
          : "text-sidebar-foreground hover:bg-muted hover:text-foreground",
        collapsed && "justify-center px-2"
      )}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
