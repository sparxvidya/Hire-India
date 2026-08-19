const auth = require("../store/adminAuth");

// Protects write routes (create/delete/feature-toggle jobs, etc.).
// Expects "Authorization: Bearer <token>" from a prior /api/auth/login.
module.exports = function requireAdmin(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!auth.isValidToken(token)) {
    return res.status(401).json({ error: "Not authorized. Please log in again." });
  }
  next();
};
