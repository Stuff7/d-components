import { readdirSync } from "node:fs";
import { join, resolve } from "node:path";

import type { PluginOption } from "vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  publicDir: "src/lib/public",
  build: {
    outDir: "dist/lib",
    lib: {
      entry: {
        ...getFilePaths("src/lib"),
        ...getFilePaths("src/lib/components"),
        ...getFilePaths("src/lib/composables"),
        ...getFilePaths("src/lib/style"),
      },
      formats: ["es"],
      fileName: (_, entryName) => entryName,
    },
    rollupOptions: {
      external: /^vue/,
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    injectCss(),
  ],
  resolve: {
    alias: {
      "@lib": resolve("./src/lib"),
    },
  },
});

function getFilePaths(folderPath: string) {
  return readdirSync(folderPath).reduce((entries, filePath) => {
    if (/^(?!.*\.d\.ts$).*\.ts$/.test(filePath) || filePath.endsWith(".vue")) {
      const fileName = join(
        folderPath.slice(folderPath.indexOf("/lib") + 5),
        filePath.slice(0, filePath.lastIndexOf(".")),
      );
      entries[`${fileName}.js`] = join(folderPath, filePath);
    }
    return entries;
  }, {} as Record<string, string>);
}

function injectCss(): PluginOption {
  return {
    name: "vite-css-inject",
    apply: "build",
    renderChunk(code, chunk) {
      if (chunk.isEntry) {
        const path = chunk.name.includes("/") || chunk.name.includes("\\") ? ".." : ".";
        return `import "${path}/style.css";\n${code}`;
      }
    },
  };
}
