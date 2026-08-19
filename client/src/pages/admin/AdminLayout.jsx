import { CSS } from "../../styles/theme.js";
import Toast from "../../components/Toast.jsx";
import AdminJobsTab from "./AdminJobsTab.jsx";
import AdminAddJobTab from "./AdminAddJobTab.jsx";
import AdminSettingsTab from "./AdminSettingsTab.jsx";

const TABS = [["jobs", "📋 Jobs"], ["add", "➕ Post Job"], ["settings", "⚙ Settings"]];

export default function AdminLayout({
  siteName, toast, adminTab, setAdminTab,
  jobs, onDelete, onFeature,
  newJob, setNewJob, onSubmitJob,
  settings, onSettingsChange,
  onViewSite, onLogout,
}) {
  return (
    <div style={{ background: "#07090F", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#E8EAF0" }}>
      <style>{CSS}</style>
      <Toast message={toast} />
      <nav style={{ borderBottom: "1px solid #1E2133", padding: "0 36px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, background: "rgba(7,9,15,.97)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#6C63FF,#A855F7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: "#fff" }}>⚙</div>
          <span style={{ fontWeight: 800, fontSize: 15 }}>Admin — <span style={{ color: "#6C63FF" }}>{siteName}</span></span>
        </div>
        <div style={{ display: "flex", gap: 9 }}>
          <button className="ob" style={{ fontSize: 12.5, padding: "7px 16px" }} onClick={onViewSite}>← View Site</button>
          <button className="ob" style={{ color: "#E24B4A", borderColor: "#3A1A1A", fontSize: 12.5, padding: "7px 16px" }} onClick={onLogout}>Logout</button>
        </div>
      </nav>
      <div style={{ display: "flex", borderBottom: "1px solid #1E2133", padding: "0 36px", background: "#0A0C14" }}>
        {TABS.map(([t, l]) => (
          <button key={t} className={`tb${adminTab === t ? " on" : ""}`} onClick={() => setAdminTab(t)}>{l}</button>
        ))}
      </div>
      <div style={{ padding: "28px 36px", maxWidth: 940, margin: "0 auto" }}>
        {adminTab === "jobs" && (
          <AdminJobsTab jobs={jobs} onAddNew={() => setAdminTab("add")} onDelete={onDelete} onFeature={onFeature} />
        )}
        {adminTab === "add" && (
          <AdminAddJobTab newJob={newJob} setNewJob={setNewJob} onSubmit={onSubmitJob} onCancel={() => setAdminTab("jobs")} />
        )}
        {adminTab === "settings" && (
          <AdminSettingsTab settings={settings} onChange={onSettingsChange} />
        )}
      </div>
    </div>
  );
}
