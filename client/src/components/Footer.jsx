const FOOTER_COLUMNS = [
  ["Job Types", ["Software Engineer Jobs", "Data Scientist Jobs", "Product Manager Jobs", "UI/UX Designer Jobs"]],
  ["Top Cities", ["IT Jobs Bangalore", "Tech Jobs Hyderabad", "Software Jobs Mumbai", "Jobs in Delhi NCR"]],
  ["Resources", ["Post a Job Free", "AI Career Advice", "Salary Guide 2026", "Interview Tips India"]],
];

export default function Footer({ siteName, tagline, onJobsClick }) {
  return (
    <footer style={{ background: "#07090F", borderTop: "1px solid #1E2133", padding: "44px 36px 26px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 32, marginBottom: 32 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: "linear-gradient(135deg,#6C63FF,#A855F7)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, color: "#fff" }}>
                {siteName.charAt(0)}
              </div>
              <span style={{ fontWeight: 900, fontSize: 16 }}>{siteName}</span>
            </div>
            <p style={{ color: "#333550", fontSize: 12, lineHeight: 1.7 }}>{tagline}. Connecting talent with top companies across India.</p>
          </div>
          {FOOTER_COLUMNS.map(([title, items]) => (
            <div key={title}>
              <h4 style={{ color: "#E8EAF0", fontWeight: 800, marginBottom: 12, fontSize: 12.5 }}>{title}</h4>
              <ul style={{ listStyle: "none" }}>
                {items.map((item) => (
                  <li key={item} style={{ marginBottom: 8 }}>
                    <button onClick={onJobsClick} style={{ background: "none", border: "none", color: "#333550", fontSize: 12, cursor: "pointer", fontFamily: "inherit", padding: 0 }}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #111320", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <span style={{ color: "#252840", fontSize: 11.5 }}>© 2026 {siteName} · India's AI Job Portal · Software Jobs · IT Careers</span>
          <span style={{ color: "#1A1D2E", fontSize: 10.5 }}>React · Node/Express</span>
        </div>
      </div>
    </footer>
  );
}
