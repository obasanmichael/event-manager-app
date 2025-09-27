import { getProfile } from "@/lib/queries/profile";
import { create } from "zustand";

type Profile = {
    id: string;
    email: string;
    display_name?: string;
    avatar_url?: string;
    is_buyer?: boolean;
    is_seller?: boolean;
}

interface ProfileStore {
    profile: Profile | null
    loading: boolean;
    fetchProfile: () => Promise<void>;
    clearProfile: () => void;
}

const useProfileStore = create<ProfileStore>(set => ({
    profile: null,
    loading: true,
    fetchProfile: async () => {
        set({ loading: true });
        try {
            const profile = await getProfile();
            set({ profile, loading: false });
        }
        catch (error) {
            console.error('failed to fetch profile', error);
            set({ profile: null, loading: false });
        }
    },
    clearProfile: () => set({profile: null})
}))

export default useProfileStore;