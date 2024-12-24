import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */})},
    react({include: /\.(jsx|js|mdx|md|tsx|ts)$/}),
  ],
  build: {
    modulePreload: {
      polyfill: false,
      resolveDependencies: (filename, deps) => {
        // Exclude all .js and .ts files
        if (filename.endsWith('.js') || filename.endsWith('.ts')) {
          return [];
        }
        // For all other file types, return the original dependencies
        return deps;
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          tahoniLib: ['@tahoni/tahoni-lib-react']
        }
      },
    },
  },
})
