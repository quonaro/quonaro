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
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: mode === "production" ? "/quonaro/assets/[name]-[hash][extname]" : "assets/[name]-[hash][extname]",
        chunkFileNames: mode === "production" ? "/quonaro/assets/[name]-[hash].js" : "assets/[name]-[hash].js",
        entryFileNames: mode === "production" ? "/quonaro/assets/[name]-[hash].js" : "assets/[name]-[hash].js",
      },
    },
  },
}));
