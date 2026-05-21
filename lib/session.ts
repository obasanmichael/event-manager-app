export const SESSION_COOKIE = "app-session";
export const PROFILES_STORAGE_KEY = "app-profiles";
export const AUTH_CHANGE_EVENT = "auth-change";

export type Profile = {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  display_name?: string;
  avatar_url?: string;
  is_buyer?: boolean;
  is_seller?: boolean;
};

export type AppUser = {
  id: string;
  email: string;
};

export type SessionPayload = {
  id: string;
  email: string;
};

export function parseSessionCookie(value: string | undefined): SessionPayload | null {
  if (!value) return null;
  try {
    const session = JSON.parse(decodeURIComponent(value)) as SessionPayload;
    if (session?.id && session?.email) return session;
  } catch {
    return null;
  }
  return null;
}

export function serializeSession(session: SessionPayload): string {
  return encodeURIComponent(JSON.stringify(session));
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getSessionFromCookie(): SessionPayload | null {
  if (!isBrowser()) return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${SESSION_COOKIE}=`));
  if (!match) return null;
  return parseSessionCookie(match.split("=").slice(1).join("="));
}

export function setSessionCookie(session: SessionPayload): void {
  if (!isBrowser()) return;
  const maxAge = 60 * 60 * 24 * 30;
  document.cookie = `${SESSION_COOKIE}=${serializeSession(session)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function clearSessionCookie(): void {
  if (!isBrowser()) return;
  document.cookie = `${SESSION_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}

export function getStoredProfiles(): Record<string, Profile> {
  if (!isBrowser()) return {};
  try {
    const raw = localStorage.getItem(PROFILES_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, Profile>) : {};
  } catch {
    return {};
  }
}

export function saveProfile(profile: Profile): void {
  if (!isBrowser()) return;
  const profiles = getStoredProfiles();
  profiles[profile.id] = profile;
  localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));
}

export function getProfileById(id: string): Profile | null {
  return getStoredProfiles()[id] ?? null;
}

export function findProfileByEmail(email: string): Profile | null {
  const normalized = email.toLowerCase();
  return (
    Object.values(getStoredProfiles()).find(
      (p) => p.email.toLowerCase() === normalized
    ) ?? null
  );
}

export function notifyAuthChange(): void {
  if (!isBrowser()) return;
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}
