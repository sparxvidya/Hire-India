// Simple file-backed store so admin changes (add/delete/feature) survive
// a server restart without needing a real database. Swap this module out
// for a proper DB (Postgres/Mongo) later without touching the routes.
const fs = require("fs");
const path = require("path");
const seedJobs = require("../data/jobs");

const STORE_PATH = path.join(__dirname, "jobs-store.json");

function load() {
  if (fs.existsSync(STORE_PATH)) {
    try {
      const raw = fs.readFileSync(STORE_PATH, "utf-8");
      return JSON.parse(raw);
    } catch {
      // fall through to reseed on a corrupt file
    }
  }
  save(seedJobs);
  return seedJobs;
}

function save(jobs) {
  fs.writeFileSync(STORE_PATH, JSON.stringify(jobs, null, 2));
}

let jobs = load();

module.exports = {
  getAll() {
    return jobs;
  },
  add(job) {
    const nextId = jobs.length ? Math.max(...jobs.map((j) => j.id)) + 1 : 1;
    const withId = { ...job, id: nextId, posted: "Just now" };
    jobs = [withId, ...jobs];
    save(jobs);
    return withId;
  },
  remove(id) {
    jobs = jobs.filter((j) => j.id !== Number(id));
    save(jobs);
  },
  toggleFeature(id) {
    jobs = jobs.map((j) => (j.id === Number(id) ? { ...j, featured: !j.featured } : j));
    save(jobs);
    return jobs.find((j) => j.id === Number(id));
  },
  reset() {
    jobs = seedJobs;
    save(jobs);
    return jobs;
  },
};
