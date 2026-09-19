module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "eslint-plugin-tsdoc", "jsx-a11y"],
  rules: {
    "react-refresh/only-export-components": [
      "error",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "tsdoc/syntax": "error",
  },
  overrides: [
    {
      // RouteAliases.tsx deliberately exports PageMapping data (not components) alongside
      // React.lazy-loaded page components, per ARCHITECTURE.md's Data-Driven Routing design —
      // Fast Refresh doesn't apply meaningfully to a routing-config file, so this is a
      // permanent, by-design exception rather than lint debt to fix.
      files: ["src/common/routes/RouteAliases.tsx"],
      rules: {
        "react-refresh/only-export-components": "off",
      },
    },
  ],
};
