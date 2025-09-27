"use client"
import useProfileStore from '@/app/stores/profile/store';
import { signOut } from '@/lib/auth';
import React, { useState } from 'react'

const UserMenu = () => {
  const { profile } = useProfileStore();
  const [open, setOpen] = useState(false);

  if (!profile) return null;

  const initial =
    profile.display_name?.charAt(0).toUpperCase() ||
    profile.email?.charAt(0).toUpperCase() ||
    "?";


  return (
    <div className="relative">
      {/* Avatar circle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-bold"
      >
        {initial}
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black/5 z-50 overflow-hidden">
          <ul className="flex flex-col text-sm text-gray-700">
            <li>
              <a
                href="/app"
                className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
              >
                Host an event
              </a>
            </li>
            <li className="border-t border-gray-100">
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 transition-colors duration-150"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserMenu