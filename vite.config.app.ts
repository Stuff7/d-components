import { resolve } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  publicDir: "src/app/public",
  build: { outDir: "dist/app" },
  base: "/d-components",
  server: {
    port: 3000,
    host: true,
  },
  plugins: [
    vue(),
  ],
  preview: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      "@app": resolve("./src/app"),
      "@lib": resolve("./dist/lib"),
    },
  },
});
