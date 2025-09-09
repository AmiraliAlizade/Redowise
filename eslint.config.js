import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig( [ {
    files: ["*.js", "*.jsx"],
    plugins: {
      react,
      "react-hooks": reactHooks
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "react/prop-types": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    env: {
      browser: true,
      es2021: true
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    }
  }]);
