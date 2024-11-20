import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/notes/", // Замініть на назву вашого репозиторію
  plugins: [react()],
  build: {
    outDir: "dist", // Директорія для зібраних файлів
    emptyOutDir: true, // Очищує папку перед новою збіркою
  },
});