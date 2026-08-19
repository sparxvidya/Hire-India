export default function AdminJobsTab({ jobs, onAddNew, onDelete, onFeature }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800 }}>Manage Jobs</h2>
          <p style={{ color: "#6B6E8A", fontSize: 12.5, marginTop: 3 }}>{jobs.length} jobs total</p>
        </div>
        <button className="gb" onClick={onAddNew}>+ Post New Job</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {jobs.map((j) => (
          <div key={j.id} className="ac">
            <div style={{ display: "flex", gap: 12, alignItems: "center", flex: 1, minWidth: 0 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: j.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, color: j.color, flexShrink: 0 }}>
                {j.logo}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: "#E8EAF0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {j.title} <span style={{ color: "#6B6E8A", fontWeight: 400 }}>@ {j.company}</span>
                </div>
                <div style={{ fontSize: 11.5, color: "#6B6E8A", marginTop: 2 }}>📍 {j.location} · 💰 {j.salary} · 🏷 {j.category}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 7, flexShrink: 0, alignItems: "center", flexWrap: "wrap" }}>
              {j.featured && <span className="fbadge">★ Featured</span>}
              <button className="fb2" onClick={() => onFeature(j.id)}>{j.featured ? "Unfeature" : "Feature ★"}</button>
              <button className="db" onClick={() => onDelete(j.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
