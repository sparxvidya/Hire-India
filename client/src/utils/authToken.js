// Holds the admin session token issued by the server after a
// successful /api/auth/login. sessionStorage clears when the tab
// closes, which is the right lifetime for an admin session.
const KEY = "hireindia-admin-token";

export function getToken() {
  try {
    return sessionStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function setToken(token) {
  try {
    sessionStorage.setItem(KEY, token);
  } catch {
    // sessionStorage unavailable — session just won't persist across reloads
  }
}

export function clearToken() {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
