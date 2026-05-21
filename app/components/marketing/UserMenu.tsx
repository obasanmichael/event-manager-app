"use client";

import useProfileStore from "@/app/stores/profile/store";
import { signOut } from "@/lib/auth";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const UserMenu = ({ transparent = false }: { transparent?: boolean }) => {
  const { profile } = useProfileStore();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!profile) return null;

  const initial =
    profile.first_name?.charAt(0).toUpperCase() ||
    profile.email?.charAt(0).toUpperCase() ||
    "?";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition",
          transparent
            ? "bg-white/20 text-white ring-2 ring-white/30 hover:bg-white/30"
            : "bg-primary text-primary-foreground ring-2 ring-primary/20"
        )}
      >
        {initial}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-border bg-card shadow-xl">
          <div className="border-b border-border px-4 py-3">
            <p className="truncate text-sm font-medium text-foreground">
              {profile.first_name} {profile.last_name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {profile.email}
            </p>
          </div>
          <ul className="py-1 text-sm">
            <li>
              <Link
                href="/app"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-foreground hover:bg-muted"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  signOut();
                  setOpen(false);
                }}
                className="w-full px-4 py-2.5 text-left text-destructive hover:bg-destructive/10"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
