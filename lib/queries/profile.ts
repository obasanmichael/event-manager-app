import { supabase } from "../supabase/client";


export async function getProfile() {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return null;

    const { data: profile, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();

    if (error) throw error;
    return profile;
}