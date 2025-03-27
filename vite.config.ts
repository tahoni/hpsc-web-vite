import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
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
  build: {
    target: "ESNext",
    minify: true,
    sourcemap: false,
    modulePreload: {
      polyfill: false,
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
              case "@react-google-maps":
              case "react-google-recaptcha":
                return "react-google";
            }
          }
        },
      },
    },
  },
});
