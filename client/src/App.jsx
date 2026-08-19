import { useState, useEffect, useRef } from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import { DEFAULT_SETTINGS } from "./data/categories.js";
import { loadSettings, saveSettings } from "./utils/storage.js";
import { fetchJobs, createJob, deleteJob, toggleFeatureJob, askAI, adminLogin, adminLogout, getToken } from "./utils/api.js";

const EMPTY_NEW_JOB = { title: "", company: "", location: "", type: "Full-time", salary: "", category: "Engineering", tags: "", applyLink: "", featured: false };

export default function App() {
  const [page, setPage] = useState("home");
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [jobs, setJobs] = useState([]);
  const [jobsError, setJobsError] = useState("");

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [heroSearch, setHeroSearch] = useState("");
  const [heroResult, setHeroResult] = useState("");
  const [heroLoading, setHeroLoading] = useState(false);

  const [aiMessages, setAiMessages] = useState([
    { role: "assistant", content: "Hi! I'm your AI Career Advisor. Ask me about salaries, interviews, resume tips, career switches, or best companies in India! 🚀" },
  ]);
  const [aiQuery, setAiQuery] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const [adminPass, setAdminPass] = useState("");
  const [adminError, setAdminError] = useState("");
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminTab, setAdminTab] = useState("jobs");
  const [newJob, setNewJob] = useState(EMPTY_NEW_JOB);

  const [toast, setToast] = useState("");
  const [portalTab, setPortalTab] = useState("portals");

  const jobsRef = useRef(null);
  const portalsRef = useRef(null);
  const advisorRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setSettings(loadSettings(DEFAULT_SETTINGS));
  }, []);

  useEffect(() => {
    fetchJobs()
      .then(setJobs)
      .catch((err) => setJobsError(err.message));
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [aiMessages]);

  // Safety net: never render the admin page without a session token,
  // even if page state gets set some other way later.
  useEffect(() => {
    if (page === "admin" && !getToken()) setPage("login");
  }, [page]);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  function handleSettingsChange(next) {
    setSettings(next);
    saveSettings(next);
  }

  const refs = { jobsRef, portalsRef, advisorRef };

  function handleNav(key, tabOverride) {
    if (page !== "home") { setPage("home"); }
    if (tabOverride) setPortalTab(tabOverride);
    const target = { jobs: jobsRef, portals: portalsRef, advisor: advisorRef }[key];
    setTimeout(() => target?.current?.scrollIntoView({ behavior: "smooth", block: "start" }), page !== "home" ? 80 : 0);
  }

  async function handleLogin() {
    setAdminLoading(true);
    setAdminError("");
    try {
      await adminLogin(adminPass);
      setPage("admin");
      setAdminPass("");
    } catch (err) {
      setAdminError(err.message || "Login failed.");
    } finally {
      setAdminLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await adminLogout();
    } finally {
      setPage("home");
    }
  }

  async function handleAddJob() {
    if (!newJob.title || !newJob.company) return showToast("Title and company are required.");
    try {
      const job = await createJob(newJob);
      setJobs((prev) => [job, ...prev]);
      setNewJob(EMPTY_NEW_JOB);
      showToast("✅ Job posted successfully!");
      setAdminTab("jobs");
    } catch (err) {
      if (err.message?.includes("Not authorized")) return setPage("login");
      showToast(`❌ ${err.message}`);
    }
  }

  async function handleDelete(id) {
    setJobs((prev) => prev.filter((j) => j.id !== id));
    try {
      await deleteJob(id);
      showToast("🗑 Deleted.");
    } catch (err) {
      if (err.message?.includes("Not authorized")) return setPage("login");
      showToast(`❌ ${err.message}`);
    }
  }

  async function handleFeature(id) {
    setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, featured: !j.featured } : j)));
    try {
      await toggleFeatureJob(id);
    } catch (err) {
      if (err.message?.includes("Not authorized")) return setPage("login");
      showToast(`❌ ${err.message}`);
    }
  }

  async function handleHeroSearch() {
    if (!heroSearch.trim()) return;
    setHeroLoading(true); setHeroResult("");
    const r = await askAI(`Career insights for: "${heroSearch}". Top companies in India, key skills, salary range.`);
    setHeroResult(r); setHeroLoading(false);
  }

  async function handleChatSend() {
    if (!aiQuery.trim()) return;
    const msgs = [...aiMessages, { role: "user", content: aiQuery }];
    setAiMessages(msgs); setAiQuery(""); setAiLoading(true);
    const history = msgs.map((m) => ({ role: m.role, content: m.content }));
    const r = await askAI(aiQuery, history);
    setAiMessages((prev) => [...prev, { role: "assistant", content: r }]);
    setAiLoading(false);
  }

  if (jobsError && jobs.length === 0) {
    return (
      <div style={{ background: "#07090F", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#E24B4A", fontFamily: "sans-serif", padding: 24, textAlign: "center" }}>
        Couldn't reach the API ({jobsError}). Is the Express server running on port 5000?
      </div>
    );
  }

  if (page === "login") {
    return <Login adminPass={adminPass} setAdminPass={setAdminPass} adminError={adminError} adminLoading={adminLoading} onLogin={handleLogin} onBack={() => setPage("home")} />;
  }

  if (page === "admin") {
    return (
      <AdminLayout
        siteName={settings.siteName}
        toast={toast}
        adminTab={adminTab}
        setAdminTab={setAdminTab}
        jobs={jobs}
        onDelete={handleDelete}
        onFeature={handleFeature}
        newJob={newJob}
        setNewJob={setNewJob}
        onSubmitJob={handleAddJob}
        settings={settings}
        onSettingsChange={handleSettingsChange}
        onViewSite={() => setPage("home")}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <Home
      settings={settings}
      jobs={jobs}
      toast={toast}
      search={search} setSearch={setSearch}
      activeCategory={activeCategory} setActiveCategory={setActiveCategory}
      heroSearch={heroSearch} setHeroSearch={setHeroSearch}
      heroResult={heroResult} heroLoading={heroLoading} onHeroSearch={handleHeroSearch}
      aiMessages={aiMessages} aiQuery={aiQuery} setAiQuery={setAiQuery} aiLoading={aiLoading}
      onChatSend={handleChatSend} chatEndRef={chatEndRef}
      portalTab={portalTab} setPortalTab={setPortalTab}
      refs={refs}
      onNav={handleNav}
      onAdmin={() => setPage("login")}
    />
  );
}
