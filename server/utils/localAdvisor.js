// A small, fully local "AI agent". No external API, no key, no cost —
// it matches the message against topics/roles in careerKnowledge.js and
// assembles a reply from that data. Swap this module for a real LLM call
// later (see README) if you want free-form generated answers instead.
const KB = require("../data/careerKnowledge");

function findCategory(text) {
  for (const [key, cat] of Object.entries(KB.categories)) {
    if (cat.match.test(text)) return { key, ...cat };
  }
  return null;
}

function bulletList(lines) {
  return lines.map((l) => `• ${l}`).join("\n");
}

function roleInsight(cat) {
  return [
    `Here's what I know about ${cat.key} roles in India:`,
    "",
    `💰 Typical salary: ${cat.salaryRange}`,
    `🏢 Companies actively hiring: ${cat.topCompanies.join(", ")}`,
    `🛠 Key skills to have: ${cat.keySkills.join(", ")}`,
    "",
    `💡 ${cat.tip}`,
  ].join("\n");
}

function topicReply(topic, cat) {
  const lines = KB.general[topic];
  const header = {
    resume: "Resume tips:",
    interview: "Interview prep tips:",
    negotiation: "Salary negotiation tips:",
    switch: "Tips for switching careers:",
    fresher: "Tips for freshers:",
  }[topic];
  let reply = `${header}\n${bulletList(lines)}`;
  if (cat) reply += `\n\nSince you mentioned ${cat.key} — ${cat.tip}`;
  return reply;
}

const TOPIC_MATCHERS = [
  ["negotiation", /negotiat|counter.?offer|raise my (offer|salary)|salary tips|salary advice/i],
  ["interview", /interview|behavioral question|technical round/i],
  ["switch", /switch(ing)? (career|to tech|field)|change (my )?career|pivot/i],
  ["fresher", /fresher|entry.?level|no experience|first job|campus placement/i],
  ["resume", /resume|\bcv\b|cover letter/i],
];

function greeting() {
  return "Hi! I'm your career advisor. Ask me about salaries, interview prep, resumes, switching careers, or best companies for a specific role — I'll pull from what I know about the Indian job market. 🚀";
}

function fallback(cat) {
  if (cat) return roleInsight(cat);
  return [
    "I can help with:",
    bulletList([
      "Salary ranges & top hiring companies for a role (e.g. 'salary for data scientist')",
      "Resume tips",
      "Interview prep",
      "Salary negotiation",
      "Switching careers into tech",
      "Advice for freshers",
    ]),
    "",
    "Try asking about one of those, or name a specific role.",
  ].join("\n");
}

/**
 * @param {string} message - latest user message
 * @returns {string} reply text
 */
function getAdvisorReply(message) {
  const text = (message || "").trim();
  if (!text) return greeting();

  const cat = findCategory(text);

  for (const [topic, re] of TOPIC_MATCHERS) {
    if (re.test(text)) return topicReply(topic, cat);
  }

  if (cat) return roleInsight(cat);

  return fallback(null);
}

module.exports = { getAdvisorReply };
