import { getUserSession, signOut } from "@/lib/auth";
import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface AuthStore {
  user: User | null;
  loading: boolean;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,

  fetchUser: async () => {
    set({ loading: true });

    const {
      data: { user },
      error,
    } = await getUserSession();
    if (error) console.error("Error fetching user session:", error);
    set({ user: user ?? null, loading: false });
  },
  logout: async () => {
    set({ user: null });
    await signOut();
  },
}));


export default useAuthStore;