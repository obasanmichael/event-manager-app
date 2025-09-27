"use client";

import { supabase } from "./supabase/client";

export async function signUpWithEmail(
  email: string,
  password: string,
  name: string
) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  });
  if (authError) throw authError;
  const user = authData.user;
  if (!user) return;

   await supabase.from("profiles").upsert([
    {
      id: user.id,
      email: user.email,
      display_name: name,
      is_buyer: true,
      is_seller: false,
    },
  ]);

  return user;
}

export async function signInWithEmail(email: string, password: string) {
  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  const user = authData.user;

  await supabase.from("profiles").upsert([{ id: user.id, email: user.email }]);
  return user;
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000", // send user back here after sign in
    },
  });
  if (error) throw error;
  return data;
}

export async function signInWithFacebook() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo: `${window.location.origin}/app`, // send user back here after sign in
    },
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
