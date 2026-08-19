export default function Navbar({ siteName, onNav, onAdmin, onAskAI }) {
  return (
    <nav
      style={{
        borderBottom: "1px solid #1E2133", padding: "0 36px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 62, position: "sticky", top: 0,
        background: "rgba(7,9,15,.94)", backdropFilter: "blur(14px)", zIndex: 100,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <div style={{ width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg,#6C63FF,#A855F7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, color: "#fff" }}>
          {siteName.charAt(0)}
        </div>
        <span style={{ fontWeight: 900, fontSize: 18, letterSpacing: -0.5 }}>
          {siteName}<span style={{ color: "#6C63FF" }}>.</span>
        </span>
      </div>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <button className="navlink" onClick={() => onNav("jobs")}>Browse Jobs</button>
        <span style={{ color: "#1E2133" }}>·</span>
        <button className="navlink" onClick={() => onNav("portals", "portals")}>Career Sites</button>
        <span style={{ color: "#1E2133" }}>·</span>
        <button className="navlink" onClick={() => onNav("portals", "companies")}>Companies</button>
        <span style={{ color: "#1E2133" }}>·</span>
        <button className="navlink" onClick={() => onNav("advisor")}>AI Advisor</button>
      </div>
      <div style={{ display: "flex", gap: 9 }}>
        <button className="ob" style={{ fontSize: 12.5, padding: "7px 16px" }} onClick={onAdmin}>⚙ Admin</button>
        <button className="gb" style={{ padding: "9px 20px", fontSize: 13 }} onClick={onAskAI}>Ask AI ✦</button>
      </div>
    </nav>
  );
}
