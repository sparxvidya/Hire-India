const express = require("express");
const router = express.Router();
const auth = require("../store/adminAuth");

// POST /api/auth/login  { password }
router.post("/login", (req, res) => {
  const ip = req.ip || req.socket.remoteAddress || "unknown";

  if (auth.isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many attempts. Try again in a few minutes." });
  }

  const { password } = req.body || {};
  if (!auth.checkPassword(password)) {
    auth.recordFailedAttempt(ip);
    return res.status(401).json({ error: "Incorrect password." });
  }

  auth.clearAttempts(ip);
  const token = auth.issueToken();
  res.json({ token });
});

// POST /api/auth/logout  { token }  (also sent via Authorization header)
router.post("/logout", (req, res) => {
  const header = req.headers.authorization || "";
  const headerToken = header.startsWith("Bearer ") ? header.slice(7) : null;
  const token = headerToken || (req.body && req.body.token);
  if (token) auth.revokeToken(token);
  res.json({ ok: true });
});

module.exports = router;
