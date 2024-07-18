import prettier from "eslint-plugin-prettier";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("airbnb", "prettier"), {
    plugins: {
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
        },

        parser: babelParser,
        parserOptions: {
            "requireConfigFile": false,
        },
    },

    ignores: [
        "node_modules/",
        "**/**/next.config.js",
        "**/context/",
    ],


    settings: {
        react: {
            version: "16.5",
        },
    },

    rules: {
        "prettier/prettier": ["error"],
        "no-underscore-dangle": 0,
        "no-console": "warn",

        "no-unused-expressions": ["error", {
            allowTernary: true,
        }],

        "no-return-assign": [2, "except-parens"],

        "no-param-reassign": ["error", {
            props: false,
        }],

        "react/destructuring-assignment": 0,
        "import/named": 0,
        "react/jsx-one-expression-per-line": 0,

        "jsx-a11y/label-has-associated-control": ["error", {
            required: {
                some: ["nesting", "id"],
            },
        }],

        "jsx-a11y/label-has-for": ["error", {
            required: {
                some: ["nesting", "id"],
            },
        }],

        "jsx-a11y/anchor-is-valid": ["error", {
            components: ["Link"],
            specialLink: ["hrefLeft", "hrefRight"],
            aspects: ["invalidHref", "preferButton"],
        }],

        "react/react-in-jsx-scope": 0,
    },
}];