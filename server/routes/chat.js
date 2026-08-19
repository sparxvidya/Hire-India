const express = require("express");
const router = express.Router();
const { getAdvisorReply } = require("../utils/localAdvisor");

// POST /api/chat  { message, history? }
// Fully local — no external API, no key required. See utils/localAdvisor.js.
router.post("/", (req, res) => {
  const { message, history } = req.body || {};
  const latest = message || (Array.isArray(history) && history.length ? history[history.length - 1].content : "");

  if (!latest) {
    return res.status(400).json({ error: "message is required" });
  }

  const reply = getAdvisorReply(latest);
  res.json({ reply });
});

module.exports = router;
