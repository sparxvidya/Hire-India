const SEO_TIPS = [
  "Deploy to a real host (Render/Railway/VPS) and submit a sitemap to Google Search Console",
  "Post new jobs regularly — fresh content is Google's #1 signal",
  "Share every job on LinkedIn, WhatsApp groups, Telegram",
  "Use city keywords: 'Software Jobs Bangalore 2026'",
  "Add JSON-LD JobPosting schema (already in index.html)",
  "Enable HTTPS + fast page speed",
];

export default function AdminSettingsTab({ settings, onChange }) {
  return (
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 5 }}>Site Settings</h2>
      <p style={{ color: "#6B6E8A", fontSize: 12.5, marginBottom: 24 }}>Changes save instantly on this device.</p>
      <div style={{ display: "grid", gap: 18, maxWidth: 560 }}>
        <div>
          <label className="lbl">Site Name</label>
          <input className="inp" value={settings.siteName} onChange={(e) => onChange({ ...settings, siteName: e.target.value })} />
        </div>
        <div>
          <label className="lbl">Hero Tagline</label>
          <input className="inp" value={settings.tagline} onChange={(e) => onChange({ ...settings, tagline: e.target.value })} />
        </div>
      </div>
      <div style={{ marginTop: 28, background: "#0E1118", border: "1px solid #1E2133", borderRadius: 16, padding: 22, maxWidth: 560 }}>
        <h3 style={{ fontWeight: 800, fontSize: 15, marginBottom: 14, color: "#E8EAF0" }}>🔍 SEO Tips to Rank on Google</h3>
        {SEO_TIPS.map((tip, i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
            <span style={{ color: "#6C63FF", fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{i + 1}.</span>
            <span style={{ color: "#9A9CB8", fontSize: 12.5, lineHeight: 1.65 }}>{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
