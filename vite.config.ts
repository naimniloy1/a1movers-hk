import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";

// This helps Vite understand folder paths in a Linux (Vercel) environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      // Maps @/components/ui/sonner to /client/sonner.tsx (based on your screenshot)
      "@/components/ui": path.resolve(__dirname, "./client"),
      // General alias for the rest of the project
      "@": path.resolve(__dirname, "./client"),
    },
  },
  build: {
    // This ensures that if the build fails, we get more descriptive error logs
    sourcemap: true,
  }
});
