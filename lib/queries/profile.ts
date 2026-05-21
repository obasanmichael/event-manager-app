import {
  getProfileById,
  getSessionFromCookie,
} from "../session";

export async function getProfile() {
  const session = getSessionFromCookie();
  if (!session) return null;

  return getProfileById(session.id);
}
