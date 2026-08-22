import js from "@eslint/js";
import globals from "globals";

export default [
    {
        ignores: ["node_modules/**", "admin/**", "test/**"],
    },
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "commonjs",
            globals: {
                ...globals.node,
                ...globals.es2022,
                ...globals.mocha,
            },
        },
        rules: {
            "no-console": "off",
            "no-var": "error",
            "prefer-const": "error",
            "no-unused-vars": ["error", { caughtErrors: "none" }],
            quotes: [
                "error",
                "double",
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true,
                },
            ],
            semi: ["error", "always"],
        },
    },
];
