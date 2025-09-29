import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
  base: mode === "production" ? "/" : "/quonaro/",
=======
  base: "./",
>>>>>>> parent of 1f848c1 (Update Vite configuration to set base path for GitHub Pages deployment)
  build: {
    outDir: "dist",
    assetsDir: "./", // Hi
  },
}));
