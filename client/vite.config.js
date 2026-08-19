import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// In dev, /api requests are proxied to the local Express server so the
// browser never talks to Anthropic directly and you avoid CORS setup.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
