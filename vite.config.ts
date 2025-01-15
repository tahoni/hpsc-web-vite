import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        /* jsxImportSource: …, otherOptions… */
      }),
    },
    react({ include: /\.(jsx|js|mdx|tsx|ts)$/ }),
  ],
  build: {
    target: "ESNext",
    minify: true,
    sourcemap: false,
    modulePreload: {
      polyfill: false,
      resolveDependencies: () => [],
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const modulePath = id.split("node_modules/")[1];
            const topLevelFolder = modulePath.split("/")[0];
            if (topLevelFolder !== ".pnpm") {
              return topLevelFolder;
            }
            const scopedPackageName = modulePath.split("/")[1];
            return scopedPackageName.split("@")[
              scopedPackageName.startsWith("@") ? 1 : 0
            ];
          }
        },
      },
    },
  },
});
