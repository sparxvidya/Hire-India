export default function Hero({ tagline, jobCount, heroSearch, setHeroSearch, heroResult, heroLoading, onSearch, onNav, sectionRef }) {
  return (
    <section ref={sectionRef} style={{ padding: "76px 36px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(108,99,255,.065) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#12142A", border: "1px solid #2A2D40", borderRadius: 50, padding: "4px 14px 4px 8px", marginBottom: 20, fontSize: 11.5, color: "#A0A8FF", fontWeight: 700 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6C63FF", display: "inline-block", animation: "pulse 1.5s infinite" }} />
        AI-Powered · {jobCount} Live Jobs · Updated Daily
      </div>
      <h1 style={{ fontSize: "clamp(32px,4.8vw,58px)", fontWeight: 900, lineHeight: 1.12, letterSpacing: -2, marginBottom: 16 }}>
        <span className="gt">{tagline}</span>
      </h1>
      <p style={{ color: "#6B6E8A", fontSize: 16, maxWidth: 480, margin: "0 auto 34px", lineHeight: 1.65 }}>
        Search jobs at India's top companies. Get AI career advice. Apply in one click.
      </p>
      <div style={{ display: "flex", gap: 10, maxWidth: 580, margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
        <input
          className="hi"
          placeholder="Ask AI: 'Best ML jobs in India for freshers'"
          value={heroSearch}
          onChange={(e) => setHeroSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
        />
        <button className="gb" onClick={onSearch} disabled={heroLoading}>{heroLoading ? "Thinking..." : "Ask AI ✦"}</button>
      </div>
      {heroLoading && (
        <div style={{ maxWidth: 560, margin: "14px auto 0" }}>
          <div className="shim" />
          <div className="shim" style={{ width: "68%" }} />
          <div className="shim" style={{ width: "45%" }} />
        </div>
      )}
      {heroResult && !heroLoading && (
        <div style={{ background: "#0E1118", border: "1px solid #2A2D40", borderRadius: 14, padding: 18, maxWidth: 560, margin: "14px auto 0", textAlign: "left", fontSize: 13.5, lineHeight: 1.8, color: "#B0B3CC", whiteSpace: "pre-wrap" }}>
          <div style={{ display: "flex", gap: 7, alignItems: "center", marginBottom: 9 }}>
            <div style={{ width: 16, height: 16, borderRadius: 5, background: "linear-gradient(135deg,#6C63FF,#A855F7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 900, color: "#fff" }}>AI</div>
            <span style={{ fontSize: 10.5, color: "#6C63FF", fontWeight: 800, letterSpacing: 1 }}>AI CAREER INSIGHTS</span>
          </div>
          {heroResult}
        </div>
      )}
      <div style={{ display: "flex", gap: 44, justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
        {[[`${jobCount}+`, "Active Jobs"], ["16", "Top Companies"], ["12", "Job Portals"], ["AI", "Powered"]].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 900, background: "linear-gradient(135deg,#A0A8FF,#E879F9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{n}</div>
            <div style={{ fontSize: 11.5, color: "#444660", marginTop: 3, fontWeight: 600 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
        {[["Browse Jobs", "jobs", null], ["Career Portals", "portals", "portals"], ["Top Companies", "portals", "companies"], ["AI Advisor", "advisor", null]].map(([label, key, tab]) => (
          <button
            key={label}
            onClick={() => onNav(key, tab)}
            style={{ background: "#0E1118", border: "1px solid #2A2D40", color: "#9A9CB8", padding: "7px 18px", borderRadius: 50, fontSize: 12.5, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}
          >
            {label} ↓
          </button>
        ))}
      </div>
    </section>
  );
}
