import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kevinmichaelchen.github.io",
  base: "/deep-planning",
  vite: {
    plugins: [tailwindcss()],
  },
});
