"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Calendar,
  PlusCircle,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen relative transition-all duration-300 flex flex-col
    ${collapsed ? "w-20" : "w-64"} 
    bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 text-white`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-4 -right-3 bg-indigo-700 border border-indigo-500 
               rounded-full p-1.5 shadow text-white hover:bg-indigo-600"
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      {/* App Name / Logo */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {/* Replace with your logo image/icon */}
        {!collapsed && <span className="text-xl font-bold">Me-event</span>}
      </div>

      {/* Nav Links */}
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <nav className="mt-10 space-y-2">
            <SidebarLink
              href="/app"
              icon={<Home size={20} />}
              label="Dashboard"
              collapsed={collapsed}
            />
            <SidebarLink
              href="/app/events"
              icon={<Calendar size={20} />}
              label="My Events"
              collapsed={collapsed}
            />
            <SidebarLink
              href="/app/create"
              icon={<PlusCircle size={20} />}
              label="Create Event"
              collapsed={collapsed}
            />
            <SidebarLink
              href="/app/settings"
              icon={<Settings size={20} />}
              label="Settings"
              collapsed={collapsed}
            />
          </nav>
        </div>

        {/* Logout at bottom */}
        <div className="mb-6">
          <SidebarLink
            href="/login"
            icon={<LogOut size={20} />}
            label="Logout"
            collapsed={collapsed}
          />
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({
  href,
  icon,
  label,
  collapsed,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-md transition 
        ${
          active
            ? "bg-white/20 text-white border-l-4 border-indigo-400"
            : "text-gray-200 hover:bg-white/10"
        }`}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </Link>
  );
};

export default Sidebar;
