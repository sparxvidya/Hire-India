// Server-side admin auth. The password never ships to the browser —
// it's checked here, and only an opaque session token goes back to
// the client. Tokens live in memory, so they reset on server restart
// (fine for a small deployment; swap for Redis/DB if you run multiple
// server instances).
const crypto = require("crypto");

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "xsparx@2024";
const TOKEN_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

const tokens = new Map(); // token -> expiresAt
const attempts = new Map(); // ip -> { count, resetAt }

const MAX_ATTEMPTS = 6;
const ATTEMPT_WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip) {
  const rec = attempts.get(ip);
  if (!rec || Date.now() > rec.resetAt) return false;
  return rec.count >= MAX_ATTEMPTS;
}

function recordFailedAttempt(ip) {
  const rec = attempts.get(ip);
  if (!rec || Date.now() > rec.resetAt) {
    attempts.set(ip, { count: 1, resetAt: Date.now() + ATTEMPT_WINDOW_MS });
  } else {
    rec.count += 1;
  }
}

function clearAttempts(ip) {
  attempts.delete(ip);
}

function checkPassword(password) {
  if (typeof password !== "string" || password.length === 0) return false;
  // Constant-time comparison to avoid leaking password length/content via timing.
  const a = Buffer.from(password);
  const b = Buffer.from(ADMIN_PASSWORD);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function issueToken() {
  const token = crypto.randomBytes(32).toString("hex");
  tokens.set(token, Date.now() + TOKEN_TTL_MS);
  return token;
}

function isValidToken(token) {
  if (!token) return false;
  const expiresAt = tokens.get(token);
  if (!expiresAt) return false;
  if (Date.now() > expiresAt) {
    tokens.delete(token);
    return false;
  }
  return true;
}

function revokeToken(token) {
  tokens.delete(token);
}

module.exports = {
  isRateLimited,
  recordFailedAttempt,
  clearAttempts,
  checkPassword,
  issueToken,
  isValidToken,
  revokeToken,
};
