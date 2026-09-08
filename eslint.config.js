// Flat ESLint configuration for ESLint v9+
// Mirrors legacy .eslintrc.cjs with TypeScript + React Hooks + react-refresh
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import tsdoc from "eslint-plugin-tsdoc";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // Ignore build artefacts and externals
  { ignores: ["dist/**", "target/**", "node_modules/**"] },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": reactHooks,
      react: reactPlugin,
      "react-refresh": reactRefresh,
      tsdoc,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // Base recommended JS rules
      ...js.configs.recommended.rules,
      // TypeScript ESLint recommended rules (non-type-checked)
      ...tseslint.configs.recommended.rules,
      // React Hooks recommended rules
      ...reactHooks.configs.recommended.rules,
      // jsx-a11y recommended rules — the codebase was already clean against these when added,
      // so they're enabled at their native (mostly "error") severity, not downgraded to "warn"
      ...jsxA11y.configs.recommended.rules,
      // Keep export stability for React Fast Refresh in dev
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": "warn",
      "tsdoc/syntax": "error",
    },
  },
];
