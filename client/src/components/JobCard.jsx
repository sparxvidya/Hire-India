export default function JobCard({ job }) {
  return (
    <div className="jc">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 13 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ width: 40, height: 40, borderRadius: 11, background: job.color + "1E", border: `1px solid ${job.color}2A`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: job.color }}>
            {job.logo}
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#E8EAF0" }}>{job.title}</div>
            <div style={{ fontSize: 12, color: "#6B6E8A", marginTop: 1 }}>{job.company}</div>
          </div>
        </div>
        {job.featured && <span className="fbadge">✦ Hot</span>}
      </div>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 13 }}>
        {(job.tags || []).map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #191B2A", paddingTop: 12 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <span className="pill">📍 {job.location}</span>
          <span className="pill">{job.type}</span>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#A0A8FF" }}>{job.salary}</div>
          <div style={{ fontSize: 10.5, color: "#30324A", marginTop: 2 }}>{job.posted}</div>
        </div>
      </div>
      {job.applyLink && (
        <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="applyBtn">
          Apply Now →
        </a>
      )}
    </div>
  );
}
