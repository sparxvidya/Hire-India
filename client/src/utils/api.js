// All network calls to our own Express backend live here.
// In dev, Vite proxies /api -> http://localhost:5000 (see vite.config.js).
// In production the Express server serves the built client itself, so
// relative /api paths keep working with no extra config.
import { getToken, setToken, clearToken } from "./authToken.js";

async function request(path, options = {}) {
  const token = getToken();
  const res = await fetch(`/api${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json();
}

export function fetchJobs() {
  return request("/jobs");
}

export function createJob(job) {
  return request("/jobs", { method: "POST", body: JSON.stringify(job) });
}

export function deleteJob(id) {
  return request(`/jobs/${id}`, { method: "DELETE" });
}

export function toggleFeatureJob(id) {
  return request(`/jobs/${id}/feature`, { method: "PATCH" });
}

export async function askAI(message, history) {
  try {
    const data = await request("/chat", { method: "POST", body: JSON.stringify({ message, history }) });
    return data.reply;
  } catch (err) {
    return err.message || "Connection error. Please try again.";
  }
}

// Password is checked server-side only — never stored or compared in
// client code. On success, stashes the returned session token.
export async function adminLogin(password) {
  const data = await request("/auth/login", { method: "POST", body: JSON.stringify({ password }) });
  setToken(data.token);
  return data;
}

export async function adminLogout() {
  try {
    await request("/auth/logout", { method: "POST" });
  } finally {
    clearToken();
  }
}

export { getToken };
