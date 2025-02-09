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
  },
});
