

// import { supabase } from "@/lib/supabase/client";
// import { create } from "zustand";
// import { Profile } from "../profile/store";
// import { User } from "@supabase/supabase-js";

// interface AuthStore {
//     user: User | null;
//     profile: Profile | null;
//     loading: boolean;
//     init: () => Promise<void>;
//     clear: () => void;
// }

// export const useAuthStore = create<AuthStore>((set) => ({
//   user: null,
//   profile: null,
//   loading: true,

//   init: async () => {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();

//     if (user) {
//       set({ user, loading: false });
//       // background fetch
//       const { data: profile } = await supabase
//         .from("profiles")
//         .select("*")
//         .eq("id", user.id)
//         .single();
//       if (profile) set({ profile });
//     } else {
//       set({ user: null, profile: null, loading: false });
//     }
//   },

//   clear: () => set({ user: null, profile: null }),
// }));
