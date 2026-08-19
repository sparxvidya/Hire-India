import JobCard from "../components/JobCard.jsx";
import { CATEGORIES } from "../data/categories.js";

export default function JobsSection({ jobs, search, setSearch, activeCategory, setActiveCategory, sectionRef }) {
  const filtered = jobs.filter((j) => {
    const matchesCategory = activeCategory === "All" || j.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !search ||
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      (j.tags || []).some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <section ref={sectionRef} style={{ padding: "48px 36px", scrollMarginTop: 62 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="sl">Opportunities</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: -1 }}>Latest <span className="gt">Job Listings</span></h2>
          <input className="inp" style={{ width: 210, padding: "9px 14px" }} placeholder="Search jobs, skills..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 22 }}>
          {CATEGORIES.map((c) => (
            <button key={c} className={`catb${activeCategory === c ? " on" : ""}`} onClick={() => setActiveCategory(c)}>{c}</button>
          ))}
        </div>
        <div className="grid2">
          {filtered.map((j) => <JobCard key={j.id} job={j} />)}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 52, color: "#444660" }}>
            <div style={{ fontSize: 34, marginBottom: 10 }}>🔍</div>
            <div>No jobs match your search.</div>
          </div>
        )}
      </div>
    </section>
  );
}
