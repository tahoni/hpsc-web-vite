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
      resolveDependencies: (filename, deps, context) => {
        if ((filename.indexOf('.js') !== -1) || (filename.indexOf('.ts') !== -1)) {
          return deps.filter(dep => dep.indexOf('@') === 0 && dep.indexOf('tahoni') !== 1);
        }
        return deps;
      }
    },
  },
})
