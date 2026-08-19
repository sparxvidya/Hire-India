require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const jobsRouter = require("./routes/jobs");
const chatRouter = require("./routes/chat");
const authRouter = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.set("trust proxy", 1); // needed so req.ip is correct behind Render/Railway/etc.
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobsRouter);
app.use("/api/chat", chatRouter);
app.use("/api/auth", authRouter);

app.get("/api/health", (req, res) => res.json({ ok: true }));

// In production, serve the built React app from ../client/dist
const clientDist = path.join(__dirname, "..", "client", "dist");
app.use(express.static(clientDist));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(clientDist, "index.html"), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`HireIndia API listening on http://localhost:${PORT}`);
});
