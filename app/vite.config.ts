import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/d-components/",
  build: {
    outDir: "../docs",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const { name = "untitled" } = assetInfo;
          const fileParts = name.split(".");
          let fileType = name.split(".").pop();
          if (!fileType || !fileParts.length) {
            return "assets/[name]-[hash][extname]";
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(fileType)) {
            fileType = "images";
          } else if (/(ttf|otf|woff|woff2|eot)/i.test(fileType)) {
            fileType = "fonts";
          }
          return `assets/${fileType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
