import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { visualizer } from "rollup-plugin-visualizer";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        /* jsxImportSource: …, otherOptions… */
      }),
    },
    visualizer({ open: true, filename: "target/bundle-visualization.html" }),
    react({ include: /\.(jsx|js|mdx|tsx|ts)$/ }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@vendors": path.resolve(__dirname, "./src/vendors"),
      "@bootstrap": path.resolve(__dirname, "./src/vendors/bootstrap"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@layouts": path.resolve(__dirname, "./src/shared/layouts"),
      "@pages": path.resolve(__dirname, "./src/shared/pages"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    },
  },
  build: {
    target: "ES2023",
    minify: true,
    sourcemap: false,
    modulePreload: {
      polyfill: true,
      resolveDependencies: () => [],
    },
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const modulePath = id.split("node_modules/")[1];
            const topLevelFolder = modulePath.split("/")[0];
            switch (topLevelFolder) {
              case "@fortawesome":
                return "fortawesome";
              case "@mdx-js":
                return "mdx-js";
              case "@rjsf":
                return "rjsf";
              case "@fullcalendar":
                return "fullcalendar";
              case "react-google-recaptcha":
                return "react-google";
              case "@vis.gl":
                return "vis.gl";
            }
          }
        },
      },
    },
  },
});
