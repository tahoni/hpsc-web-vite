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
      })
    },
    react({ include: /\.(jsx|js|mdx|tsx|ts)$/ })
  ],
  build: {
    target: "ESNext",
    minify: true,
    sourcemap: false,
    modulePreload: {
      polyfill: false,
      resolveDependencies: () => []
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react": ["react", "react/jsx-runtime", "react-dom", "react-dom/client"],
          "react-router": ["react-router", "react-router-dom"],
          "fortawesome": ["@fortawesome/fontawesome-svg-core", "@fortawesome/free-solid-svg-icons", "@fortawesome/free-regular-svg-icons", "@fortawesome/free-brands-svg-icons", "@fortawesome/react-fontawesome"]
        }
      }
    }
  }
});
