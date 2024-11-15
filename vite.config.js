// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/notes/", // Замініть 'my-react-app' на назву вашого репозиторію, якщо потрібно
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
   },
  },
});