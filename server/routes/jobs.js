const express = require("express");
const router = express.Router();
const store = require("../store/jobsStore");
const requireAdmin = require("../middleware/requireAdmin");

const COLORS = ["#4285F4", "#FF9900", "#0CAA41", "#E63946", "#6E45E2", "#FC8019", "#0A66C2", "#5B21B6"];

// GET /api/jobs — list every job (public)
router.get("/", (req, res) => {
  res.json(store.getAll());
});

// POST /api/jobs — admin: create a job
router.post("/", requireAdmin, (req, res) => {
  const { title, company, location, type, salary, category, tags, applyLink, featured } = req.body || {};
  if (!title || !company) {
    return res.status(400).json({ error: "title and company are required" });
  }
  const job = {
    title,
    company,
    location: location || "Remote",
    type: type || "Full-time",
    salary: salary || "Not disclosed",
    category: category || "Engineering",
    logo: company.charAt(0).toUpperCase(),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    tags: Array.isArray(tags) ? tags : String(tags || "").split(",").map((t) => t.trim()).filter(Boolean),
    featured: Boolean(featured),
    applyLink: applyLink || "",
  };
  res.status(201).json(store.add(job));
});

// DELETE /api/jobs/:id — admin: remove a job
router.delete("/:id", requireAdmin, (req, res) => {
  store.remove(req.params.id);
  res.json({ ok: true });
});

// PATCH /api/jobs/:id/feature — admin: toggle featured flag
router.patch("/:id/feature", requireAdmin, (req, res) => {
  const job = store.toggleFeature(req.params.id);
  if (!job) return res.status(404).json({ error: "not found" });
  res.json(job);
});

module.exports = router;
