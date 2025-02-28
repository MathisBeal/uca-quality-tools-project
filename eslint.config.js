import pluginJs from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: ["eslint.config.js", "commitlint.config.js", "build"]
    },
    {
        languageOptions: {
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            eqeqeq: ["error", "always"],
            "capitalized-comments": ["error", "always"]
        }
    },
    pluginJs.configs.recommended, // Active eslint:recommended
    prettier // Désactive les règles ESLint en conflit avec Prettier
];
