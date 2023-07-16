import { fileURLToPath, URL } from "node:url";
import { readdirSync } from "node:fs";
import { join } from "node:path";

import { defineConfig, PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    lib: {
      entry: {
        index: resolve("lib/index.ts"),
        ...getFilePaths("lib/components"),
      },
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
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
      "~": resolve("./lib"),
    },
  },
});

function injectCss(): PluginOption {
  return {
    name: "vite-css-inject",
    apply: "build",
    config() {
      return {
        build: {
          cssCodeSplit: true,
        },
      };
    },
    renderChunk(code, chunk) {
      if (chunk.isEntry) {
        const imports = [`import "./${chunk.name}.css";`];
        if (chunk.name !== "index") {
          imports.push('import "./index.css";');
        }
        imports.push(code);
        return imports.join("\n");
      }
    },
  };
}

function resolve(filepath: string) {
  return fileURLToPath(new URL(filepath, import.meta.url));
}

function getFilePaths(folderPath: string) {
  return readdirSync(resolve(folderPath)).reduce((entries, filePath) => {
    entries[filePath.slice(0, -4)] = resolve(join(folderPath, filePath));
    return entries;
  }, {} as Record<string, string>);
}
