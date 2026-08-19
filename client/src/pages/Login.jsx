import { CSS } from "../styles/theme.js";

export default function Login({ adminPass, setAdminPass, adminError, adminLoading, onLogin, onBack }) {
  return (
    <div style={{ background: "#07090F", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
      <style>{CSS}</style>
      <div style={{ background: "#0E1118", border: "1px solid #1E2133", borderRadius: 20, padding: 40, width: 380 }}>
        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <div style={{ width: 46, height: 46, borderRadius: 14, background: "linear-gradient(135deg,#6C63FF,#A855F7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, margin: "0 auto 12px" }}>⚙</div>
          <h2 style={{ color: "#E8EAF0", fontSize: 21, fontWeight: 800 }}>Admin Panel</h2>
          <p style={{ color: "#6B6E8A", fontSize: 12.5, marginTop: 5 }}>Post jobs, manage listings & settings</p>
        </div>
        <label className="lbl">Password</label>
        <input
          className="inp"
          type="password"
          placeholder="Enter admin password"
          value={adminPass}
          onChange={(e) => setAdminPass(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !adminLoading && onLogin()}
          style={{ marginBottom: 14 }}
          autoFocus
        />
        {adminError && (
          <div style={{ color: "#E24B4A", fontSize: 12.5, marginBottom: 12, background: "#1A0808", padding: "8px 12px", borderRadius: 8, border: "1px solid #3A1010" }}>
            {adminError}
          </div>
        )}
        <button className="gb" style={{ width: "100%" }} onClick={onLogin} disabled={adminLoading}>
          {adminLoading ? "Checking..." : "Login →"}
        </button>
        <button style={{ width: "100%", marginTop: 10, background: "transparent", border: "none", color: "#6B6E8A", fontSize: 12.5, cursor: "pointer", fontFamily: "inherit" }} onClick={onBack}>
          ← Back to Site
        </button>
      </div>
    </div>
  );
}
