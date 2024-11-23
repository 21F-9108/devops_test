import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    ignores: ["node_modules/"], // Correct way to specify ignored files in flat config
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Files to lint
    rules: {
      "no-unused-vars": "off", // Example rule (add more as needed)
     "no-console": "off",
    "no-empty-function": "warn", 
        "no-undef": "off"
    },
  },
];

