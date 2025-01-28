import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Use '/' if deploying to the root domain
  build: {
    outDir: "dist", // Vercel uses this for deployment
  },
});
