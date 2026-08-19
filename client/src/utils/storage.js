// Site settings (name/tagline) are cosmetic and stay in localStorage —
// jobs themselves now live on the server, see utils/api.js.
export function loadSettings(fallback) {
  try {
    const s = localStorage.getItem("hireindia-settings");
    return s ? JSON.parse(s) : fallback;
  } catch {
    return fallback;
  }
}

export function saveSettings(settings) {
  try {
    localStorage.setItem("hireindia-settings", JSON.stringify(settings));
  } catch {
    // localStorage unavailable (private browsing etc.) — ignore
  }
}
