import { CAREER_SITES } from "../data/careerSites.js";
import { TOP_COMPANIES } from "../data/companies.js";

export default function PortalsSection({ portalTab, setPortalTab, sectionRef }) {
  return (
    <section ref={sectionRef} style={{ padding: "48px 36px", background: "#0A0C14", scrollMarginTop: 62 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="sl">Explore</div>
        <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: -1, marginBottom: 5 }}>Job <span className="gt">Portals & Companies</span></h2>
        <p style={{ color: "#6B6E8A", fontSize: 13.5, marginBottom: 24 }}>Click any card to open in a new tab and apply directly</p>
        <div style={{ display: "flex", borderBottom: "1px solid #1E2133", marginBottom: 26 }}>
          <button className={`tb${portalTab === "portals" ? " on" : ""}`} onClick={() => setPortalTab("portals")}>🌐 Career Portals (12)</button>
          <button className={`tb${portalTab === "companies" ? " on" : ""}`} onClick={() => setPortalTab("companies")}>🏢 Top Companies (16)</button>
        </div>
        {portalTab === "portals" && (
          <div className="gridP">
            {CAREER_SITES.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="sc">
                <div style={{ display: "flex", gap: 11, alignItems: "center", marginBottom: 11 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: s.color + "1E", border: `1px solid ${s.color}2A`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12.5, fontWeight: 900, color: s.color, flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#E8EAF0" }}>{s.name}</div>
                    <div style={{ fontSize: 10.5, color: "#6B6E8A" }}>{s.users} users</div>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "#6B6E8A", lineHeight: 1.55, marginBottom: 9 }}>{s.desc}</p>
                <span style={{ fontSize: 11.5, color: "#6C63FF", fontWeight: 700 }}>Open Site →</span>
              </a>
            ))}
          </div>
        )}
        {portalTab === "companies" && (
          <div className="gridC">
            {TOP_COMPANIES.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="cc">
                <div style={{ width: 38, height: 38, borderRadius: 10, background: c.color + "1E", border: `1px solid ${c.color}2A`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12.5, fontWeight: 900, color: c.color, flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13.5, color: "#E8EAF0" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "#6B6E8A", marginTop: 1 }}>{c.openings} openings</div>
                </div>
                <span style={{ marginLeft: "auto", color: "#333550", fontSize: 13 }}>→</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
