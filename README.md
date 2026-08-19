# HireIndia — Job Portal (React + Node/Express)
Link for this site - https://hire-india.onrender.com
A restructured, deployable version of the original single-file app.
It's now split into a `client` (React + Vite) and a `server` (Node +
Express), with jobs data broken into one small file per category
instead of one giant file.

## What changed from the original

- **140 jobs seeded** — 20 per category (Engineering, Product, Data,
  Design, Marketing, Finance, HR), each with a real company career-page
  apply link.
- **No more giant file.** The old 542-line `JobPortal.jsx` (with ~150
  lines of inline job data) is now ~30 small files: one per job
  category, one per page/section/component.
- **No external AI API at all anymore.** The "AI Career Advisor" is
  now a fully local, rule-based agent (`server/utils/localAdvisor.js`)
  that matches your question against a small knowledge base
  (`server/data/careerKnowledge.js`) and replies with real, relevant
  career info — salary ranges, hiring companies, resume/interview/
  negotiation tips. No API key, no signup, no cost, works offline.
  It won't write freeform prose like a real LLM, but every answer is
  genuinely useful, not filler. See "Upgrading to a real LLM" below if
  you want generative answers later.
- **Jobs are served by the API**, not just localStorage — so job posts
  made in the Admin panel are visible to every visitor, not just the
  browser that posted them, and survive a server restart (stored in
  `server/store/jobs-store.json`).

## Project structure

```
hireindia/
  client/                  React + Vite frontend
    src/
      data/                 small static data: categories, career sites, companies
      components/            Navbar, Footer, JobCard, Toast
      sections/               Hero, JobsSection, PortalsSection, AdvisorSection
      pages/                 Home, Login
        admin/                AdminLayout + one file per admin tab
      styles/theme.js        shared CSS
      utils/                  api.js (backend calls), storage.js (settings)
      App.jsx                 top-level state + routing between pages
  server/                   Node + Express backend
    data/jobs/               engineering.js, product.js, data.js, design.js,
                              marketing.js, finance.js, hr.js — 20 jobs each
    routes/jobs.js           GET/POST/DELETE/PATCH /api/jobs
    routes/chat.js           POST /api/chat  (calls the local advisor, no external API)
    utils/localAdvisor.js    rule-based reply engine — no API/key needed
    data/careerKnowledge.js  the knowledge base the advisor pulls from
    store/jobsStore.js       file-backed persistence for admin edits
    store/adminAuth.js       server-side password check + session tokens
    middleware/requireAdmin.js  guards job-write routes with a session token
    routes/auth.js            POST /api/auth/login, /api/auth/logout
    index.js                 Express app entry point
```

## Run it locally

**1. Server**
```bash
cd server
cp .env.example .env    # no key needed, just copies the default PORT
npm install
npm run dev              # http://localhost:5000
```

**2. Client** (separate terminal)
```bash
cd client
npm install
npm run dev           # http://localhost:5173, proxies /api to the server
```

Open http://localhost:5173. Admin panel password: `xsparx@2024`
(the default — set your own via `ADMIN_PASSWORD` in `server/.env`
before deploying). The password is checked entirely server-side and
never appears in the client code or browser bundle.

## Deploying

This is a normal two-service Node app, so it works on any host that
runs Node (Render, Railway, Fly.io, a VPS, etc.):

1. **Build the client:** `cd client && npm run build` → produces
   `client/dist`.
2. **Serve it from Express:** `server/index.js` already serves
   `client/dist` as static files and falls back to `index.html` for
   client-side routes, so in production you only need to run the
   server — no separate static host required.
3. **Set environment variables on your host (optional):** just `PORT`
   if you want something other than 5000. Nothing else is required —
   there's no API key to configure.
4. **Start command:** `node server/index.js` (or `npm start` inside
   `server/`).

Example (single Node host):
```bash
cd client && npm install && npm run build
cd ../server && npm install
PORT=5000 npm start
```

If you deploy client and server separately (e.g. client on
Vercel/Netlify, server on Render), set `VITE`-side requests to point
at your server's URL instead of a relative `/api` path — update the
`request()` base in `client/src/utils/api.js`.

## Adding more jobs

Each category file in `server/data/jobs/` is a plain array — open the
one you want (e.g. `engineering.js`) and add an object in the same
shape. IDs are reassigned automatically by the store, so you don't
need to worry about collisions.

## Customizing the AI advisor

Everything it knows lives in `server/data/careerKnowledge.js`:

- `categories` — one entry per role type (engineering, data, product…),
  each with a regex to match the question, a salary range, hiring
  companies, key skills, and a tip. Add a new category or edit an
  existing one — no code changes needed elsewhere.
- `general` — bullet-point advice for cross-cutting topics (resume,
  interview, negotiation, switching careers, freshers). Edit the
  arrays or add a new topic + matcher in `server/utils/localAdvisor.js`.

## Upgrading to a real LLM (optional)

If you later want genuinely generated (not template) answers, you can
point `server/routes/chat.js` at any LLM API instead of
`localAdvisor.js` — for example a free-tier key from Google AI Studio
(Gemini) or Groq. The route just needs to take `req.body.message`,
call the provider, and return `{ reply: "..." }`; the rest of the app
(client, jobs, everything else) doesn't need to change. Keep whatever
key you use in `server/.env` and read it with `process.env.YOUR_KEY` —
never put it in client code, since anything in the React bundle is
visible to anyone who opens dev tools.

## Notes / next steps

- Admin auth is now handled server-side (`server/store/adminAuth.js` +
  `server/middleware/requireAdmin.js`): the password is checked on the
  server, sessions use random opaque tokens with a 12-hour expiry, and
  login attempts are rate-limited (6 tries per 15 min per IP). Set
  `ADMIN_PASSWORD` in `server/.env` for anything beyond local testing
  — the default  is fine for trying the app out, not
  for a real deployment. Tokens live in memory, so they reset on
  server restart and won't work across multiple server instances —
  move to Redis/a DB-backed session store if you scale beyond one
  instance.
- Jobs persist to a JSON file on the server's disk. That's fine for a
  small deployment; move to a real database (Postgres/Mongo) if you
  need multiple server instances or heavier traffic.
