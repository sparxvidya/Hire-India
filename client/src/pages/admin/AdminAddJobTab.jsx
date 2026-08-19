import { CATEGORIES, JOB_TYPES } from "../../data/categories.js";

const FIELDS = [
  ["Job Title *", "title", "e.g. Senior React Developer"],
  ["Company *", "company", "e.g. Google"],
  ["Location", "location", "e.g. Bangalore / Remote"],
  ["Salary", "salary", "e.g. ₹20–35 LPA"],
  ["Apply Link", "applyLink", "https://careers.company.com"],
  ["Skills (comma-separated)", "tags", "React, TypeScript, Node.js"],
];

export default function AdminAddJobTab({ newJob, setNewJob, onSubmit, onCancel }) {
  return (
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 5 }}>Post a New Job</h2>
      <p style={{ color: "#6B6E8A", fontSize: 12.5, marginBottom: 26 }}>Goes live immediately.</p>
      <div className="grid22">
        {FIELDS.map(([lbl, f, ph]) => (
          <div key={f}>
            <label className="lbl">{lbl}</label>
            <input className="inp" placeholder={ph} value={newJob[f]} onChange={(e) => setNewJob((p) => ({ ...p, [f]: e.target.value }))} />
          </div>
        ))}
        <div>
          <label className="lbl">Job Type</label>
          <select className="sel" value={newJob.type} onChange={(e) => setNewJob((p) => ({ ...p, type: e.target.value }))}>
            {JOB_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="lbl">Category</label>
          <select className="sel" value={newJob.category} onChange={(e) => setNewJob((p) => ({ ...p, category: e.target.value }))}>
            {CATEGORIES.filter((c) => c !== "All").map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div style={{ gridColumn: "1/-1", display: "flex", alignItems: "center", gap: 10 }}>
          <input type="checkbox" className="chk" id="feat" checked={newJob.featured} onChange={(e) => setNewJob((p) => ({ ...p, featured: e.target.checked }))} />
          <label htmlFor="feat" style={{ color: "#A0A8FF", fontSize: 13.5, fontWeight: 600, cursor: "pointer" }}>Mark as Featured</label>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
        <button className="gb" onClick={onSubmit}>✅ Post Job Now</button>
        <button className="ob" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
