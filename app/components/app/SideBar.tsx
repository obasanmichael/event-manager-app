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
} from "lucide-react";
import { signOut } from "@/lib/auth";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    {label: 'Dashboard', href: '/app', icon: Home},
    {label: 'My Events', href: '/app/events', icon: CalendarDays},
    {label: 'Attendees', href: '/app/attendees', icon: Users},
    {label: 'Settings', href: '/app/settings', icon: Settings},
  ]

  return (
    <>
      <div className="lg:hidden pt-2 pl-4 fixed w-full bg-gray-50 z-50">
        <button onClick={() => setIsMobileOpen(true)}>
          <Menu size={24} />
        </button>
      </div>
      {/* Backdrop for Mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <div
        className={`h-screen lg:relative fixed top-0 left-0 z-50 transition-all duration-300 flex flex-col
        ${collapsed ? "lg:w-15" : "lg:w-64"} 
        bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 text-white 
        ${
          isMobileOpen
            ? "translate-x-0 w-45"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="lg:hidden flex justify-between p-4">

          <span className="text-xl font-bold">Me-event</span>
          <button onClick={() => setIsMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:block absolute top-4 -right-3 bg-indigo-700 border border-indigo-500 
                 rounded-full p-1.5 shadow text-white hover:bg-indigo-600"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        {/* App Name / Logo */}
        <div className="hidden lg:block text-center mt-6">
          {!collapsed && <span className="text-xl font-bold">Me-event</span>}
        </div>

        {/* Nav Links */}
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <nav className="mt-10 space-y-2">
              {menuItems.map((item) => (
                <SidebarLink
                  onClick={() => setIsMobileOpen(false)}
                  key={item.href}
                  href={item.href}
                  icon={<item.icon size={20} />}
                  label={item.label}
                  collapsed={collapsed}
                />
              ))}
            </nav>
          </div>

          {/* Logout at bottom */}
          <div className="mb-6">
            <SidebarLink
              onClick={() => {
                signOut()
                setIsMobileOpen(false)
              }}
              href="/login"
              icon={<LogOut size={20} />}
              label="Logout"
              collapsed={collapsed}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const SidebarLink = ({
  href,
  icon,
  label,
  collapsed,
  onClick
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
collapsed: boolean;
onClick: ()=>void
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
      onClick={onClick}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
      
    </Link>
  );
};

export default Sidebar;
