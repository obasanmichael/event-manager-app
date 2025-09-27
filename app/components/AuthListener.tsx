"use client";
import { useEffect } from "react";
import useProfileStore from "../stores/profile/store"
import { supabase } from "@/lib/supabase/client";


const AuthListener = () => {
    const fetchProfile = useProfileStore(s => s.fetchProfile);
    const clearProfile = useProfileStore(s => s.clearProfile);

    useEffect(() => {
        fetchProfile();

        const { data: subscription } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                if (session?.user) {
                    await fetchProfile();
                }
                else {
                    clearProfile();
                }
            }
        );

        return () => {
            subscription.subscription.unsubscribe();
        };
    } , [fetchProfile, clearProfile])

    return null;
}

export default AuthListener;