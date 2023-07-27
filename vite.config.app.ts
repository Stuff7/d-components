import { resolve } from "node:path";

import type { UserConfigExport } from "vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  const config = {
    publicDir: "src/app/public",
    build: { outDir: "dist/app" },
    base: "/d-components",
    server: {
      port: 3000,
      host: true,
    },
    preview: {
      port: 3000,
      host: true,
    },
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        "@app": resolve("./src/app"),
        "@lib": resolve("./src/lib"),
      } as Record<string, string>,
    },
  } satisfies UserConfigExport;

  if (mode === "development") {
    config.resolve.alias["d-components"] = resolve("src/lib/components");
    config.resolve.alias["./fonts"] = resolve("src/lib/public/fonts");
  }

  return config;
});
