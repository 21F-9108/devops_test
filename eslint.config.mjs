import globals from "globals";

/** @type {import('eslint').Linter.Config} */
export default {
  languageOptions: { globals: globals.browser },
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Add files/extensions here
  ignorePatterns: ["node_modules/"], // Ignore unnecessary folders
};

