import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/gerador-de-cores-aleatorias/", // ex: "/gerador-de-cor/"
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});