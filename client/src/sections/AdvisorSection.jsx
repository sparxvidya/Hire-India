export default function AdvisorSection({ messages, query, setQuery, loading, onSend, chatEndRef, sectionRef }) {
  return (
    <section ref={sectionRef} style={{ padding: "64px 36px", scrollMarginTop: 62 }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div className="sl" style={{ textAlign: "center" }}>Built-in Career Assistant</div>
          <h2 style={{ fontSize: 30, fontWeight: 900, letterSpacing: -1, marginBottom: 9 }}>AI <span className="gt">Career Advisor</span></h2>
          <p style={{ color: "#6B6E8A", fontSize: 14.5, lineHeight: 1.65 }}>Resume tips, salary guides, interview prep — ask anything about careers in India.</p>
        </div>
        <div style={{ background: "#0E1118", border: "1px solid #1E2133", borderRadius: 18, overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: "1px solid #1E2133", display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#6C63FF,#A855F7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: "#fff" }}>AI</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#E8EAF0" }}>Career Advisor</div>
              <div style={{ fontSize: 10.5, color: "#6C63FF", display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#6C63FF", display: "inline-block", animation: "pulse 1.5s infinite" }} /> Online
              </div>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["Best salary tips?", "Resume review?", "Switch to tech?"].map((s) => (
                <button key={s} onClick={() => setQuery(s)} style={{ background: "#161828", border: "1px solid #2A2D40", color: "#8888FF", padding: "4px 10px", borderRadius: 50, fontSize: 10.5, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }}>{s}</button>
              ))}
            </div>
          </div>
          <div style={{ height: 320, overflowY: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 11 }}>
            {messages.map((m, i) => <div key={i} className={m.role === "user" ? "cbu" : "cba"}>{m.content}</div>)}
            {loading && (
              <div className="cba">
                <div style={{ display: "flex", gap: 4 }}>
                  {[0, 0.2, 0.4].map((d) => <div key={d} style={{ width: 5, height: 5, borderRadius: "50%", background: "#6C63FF", animation: `pulse 1.2s ${d}s infinite` }} />)}
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div style={{ padding: "13px 16px", borderTop: "1px solid #1E2133", display: "flex", gap: 9 }}>
            <input className="inp" style={{ flex: 1, padding: "10px 14px" }} placeholder="Ask about careers, salary, interviews..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !loading && onSend()} />
            <button className="gb" style={{ padding: "9px 18px", flexShrink: 0, fontSize: 13 }} onClick={onSend} disabled={loading || !query.trim()}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
}
