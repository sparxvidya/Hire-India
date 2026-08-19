// Small hand-curated knowledge base the local advisor pulls from.
// No external API involved — everything here is static data.
module.exports = {
  categories: {
    engineering: {
      match: /engineer|developer|frontend|backend|full.?stack|devops|sde|programmer|coding/i,
      keySkills: ["React/Next.js or Vue", "Node.js or Java/Spring", "SQL + one NoSQL DB", "Git & CI/CD", "system design basics"],
      salaryRange: "₹8–20 LPA for 2–4 yrs experience, ₹25–60+ LPA at senior/staff level in product companies",
      topCompanies: ["Google", "Microsoft", "Amazon", "Flipkart", "Razorpay", "Swiggy"],
      tip: "Product companies (not just IT services) pay significantly more for the same experience — prioritize DSA + system design prep for those interviews.",
    },
    data: {
      match: /data scien|data analy|machine learning|\bml\b|\bai\b|data engineer/i,
      keySkills: ["Python + SQL", "Pandas/NumPy", "one ML framework (PyTorch/TensorFlow)", "statistics fundamentals", "cloud (AWS/GCP) basics"],
      salaryRange: "₹10–25 LPA mid-level, ₹35–75 LPA for senior ML/AI roles at top tech firms",
      topCompanies: ["Amazon", "Swiggy", "Flipkart", "Google", "Meesho"],
      tip: "Build 2–3 solid end-to-end projects (data → model → deployed API) — recruiters weight real projects over course certificates.",
    },
    product: {
      match: /product manager|product owner|\bpm\b/i,
      keySkills: ["user research", "SQL for self-serve analytics", "roadmap prioritization frameworks", "stakeholder communication", "basic Figma"],
      salaryRange: "₹15–35 LPA mid-level, ₹50–70+ LPA for Director/Head of Product",
      topCompanies: ["Microsoft", "Flipkart", "Razorpay", "PhonePe", "Meesho"],
      tip: "For APM/PM roles at product companies, a portfolio of 1–2 detailed case studies (problem → decisions → outcome) matters more than a long resume.",
    },
    design: {
      match: /designer|ux|ui\b|graphic design|product design/i,
      keySkills: ["Figma", "user research basics", "design systems", "prototyping", "a strong portfolio site"],
      salaryRange: "₹6–18 LPA mid-level, ₹35–45 LPA for design leads",
      topCompanies: ["Flipkart", "Swiggy", "Myntra", "Zoho", "Freshworks"],
      tip: "Your portfolio matters more than your resume for design roles — 3–4 deep case studies beat 10 shallow ones.",
    },
    marketing: {
      match: /marketing|seo|content writer|social media|brand manager|growth/i,
      keySkills: ["SEO fundamentals", "Google Analytics/GA4", "basic copywriting", "one paid-ads platform", "campaign reporting"],
      salaryRange: "₹5–15 LPA mid-level, ₹30–40 LPA for growth/brand leads",
      topCompanies: ["Zomato", "Swiggy", "Nykaa", "Myntra", "CRED"],
      tip: "Show measurable outcomes (traffic %, CAC, conversion lift) from past campaigns — numbers matter far more than job titles here.",
    },
    finance: {
      match: /financ|accountant|chartered accountant|\bca\b|audit|investment analyst/i,
      keySkills: ["advanced Excel", "financial modeling", "one ERP (SAP/Tally)", "IFRS/Ind-AS basics", "strong Ind. tax/GST knowledge"],
      salaryRange: "₹6–18 LPA mid-level, ₹40–55 LPA for Finance Controller/CFO roles at startups",
      topCompanies: ["TCS", "Infosys", "Accenture", "Groww", "Zerodha"],
      tip: "A CA or CFA credential still opens the most doors in Indian finance hiring — worth the investment if you're early career.",
    },
    hr: {
      match: /\bhr\b|human resources|talent acquisition|recruiter|people ops/i,
      keySkills: ["ATS tools (Greenhouse/Lever)", "HRIS systems", "employment law basics", "compensation benchmarking", "stakeholder management"],
      salaryRange: "₹5–15 LPA mid-level, ₹35–42 LPA for Head of People roles",
      topCompanies: ["Infosys", "Wipro", "HCLTech", "Meesho", "Freshworks"],
      tip: "Tech hiring (technical recruiter) roles at product companies pay noticeably better than generalist HR roles — worth specializing.",
    },
  },
  general: {
    resume: [
      "Keep it to 1 page (2 max if 8+ yrs experience).",
      "Lead every bullet with an outcome/number, not a task ('cut load time 40%' beats 'worked on performance').",
      "Tailor keywords to the exact job description — most large companies filter resumes with an ATS before a human sees them.",
      "Cut anything older than 10 years and any skill you can't defend in an interview.",
    ],
    interview: [
      "Research the company's product and recent news — 'why us' answers are the easiest points to lose.",
      "Use the STAR method (Situation, Task, Action, Result) for behavioral questions.",
      "For technical roles, think out loud during problem-solving — interviewers grade your process, not just the final answer.",
      "Always prepare 2–3 questions to ask them; not asking any reads as disengagement.",
    ],
    negotiation: [
      "Never give the first number if you can avoid it — ask their budget range first.",
      "Get competing offers if possible; it's the single strongest lever in Indian tech hiring.",
      "Negotiate the full package (base + bonus + ESOPs + joining bonus), not just base salary.",
      "It's normal and expected to negotiate — recruiters budget for it.",
    ],
    switch: [
      "Identify 2–3 transferable skills from your current role and lead with those in your pitch.",
      "Take one certification or build one project in the new domain before applying — it signals real intent.",
      "Network into the new field via LinkedIn/referrals — cold applications convert far worse for career switchers.",
      "Expect a possible short-term pay cut for the first switch; it typically corrects within 1–2 years.",
    ],
    fresher: [
      "Internships and personal projects matter more than your college tier for most tech roles now.",
      "Apply broadly in your first 6 months — your first job is a stepping stone, not a life sentence.",
      "Freshersworld, Internshala, and campus placement cells are worth checking alongside the main portals.",
      "Build one solid project you can explain end-to-end in an interview — it beats a long list of tutorials completed.",
    ],
  },
};
