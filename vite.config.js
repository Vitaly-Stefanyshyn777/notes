import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/notes/", // Базовий шлях для вашого проєкту
  plugins: [react()],
  build: {
    outDir: "dist", // Директорія для зібраного проєкту
  },
  resolve: {
    alias: {}, // Залиште порожнім або повністю видаліть `resolve`, якщо аліаси не потрібні
  },
});