"use client";

import { v4 as uuidv4, v5 as uuidv5 } from "uuid";
import {
  AppUser,
  clearSessionCookie,
  findProfileByEmail,
  getProfileById,
  getSessionFromCookie,
  notifyAuthChange,
  Profile,
  saveProfile,
  setSessionCookie,
} from "./session";

const USER_NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";

function toAppUser(profile: Profile): AppUser {
  return { id: profile.id, email: profile.email };
}

function establishSession(profile: Profile): AppUser {
  saveProfile(profile);
  setSessionCookie({ id: profile.id, email: profile.email });
  notifyAuthChange();
  return toAppUser(profile);
}

export async function signUpWithEmail(
  email: string,
  _password: string,
  fName: string,
  lName: string,
) {
  const existing = findProfileByEmail(email);
  if (existing) {
    throw new Error("An account with this email already exists. Please sign in.");
  }

  const profile: Profile = {
    id: uuidv4(),
    email,
    first_name: fName,
    last_name: lName,
    display_name: `${fName} ${lName}`,
    is_buyer: true,
    is_seller: false,
  };

  return establishSession(profile);
}

export async function signInWithEmail(email: string, _password: string) {
  const existing = findProfileByEmail(email);
  const profile: Profile = existing ?? {
    id: uuidv5(email.toLowerCase(), USER_NAMESPACE),
    email,
    display_name: email.split("@")[0],
    is_buyer: true,
    is_seller: false,
  };

  return establishSession(profile);
}

export async function getUserSession() {
  const session = getSessionFromCookie();
  if (!session) {
    return { data: { user: null }, error: null };
  }

  const profile = getProfileById(session.id);
  const user: AppUser | null = profile
    ? toAppUser(profile)
    : { id: session.id, email: session.email };

  return { data: { user }, error: null };
}

export async function signOut() {
  clearSessionCookie();
  notifyAuthChange();
}
