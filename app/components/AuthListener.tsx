"use client";
import { useEffect } from "react";
import { AUTH_CHANGE_EVENT } from "@/lib/session";
import useProfileStore from "../stores/profile/store";

const AuthListener = () => {
  const fetchProfile = useProfileStore((s) => s.fetchProfile);
  const clearProfile = useProfileStore((s) => s.clearProfile);

  useEffect(() => {
    fetchProfile();

    const handleAuthChange = () => {
      if (document.cookie.includes("app-session=")) {
        fetchProfile();
      } else {
        clearProfile();
      }
    };

    window.addEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
    return () => window.removeEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
  }, [fetchProfile, clearProfile]);

  return null;
};

export default AuthListener;
