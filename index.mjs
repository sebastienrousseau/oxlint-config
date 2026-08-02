/**
 * Modern Oxlint ESM Configuration
 */
export default {
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["typescript", "import", "unicorn"],
  "categories": {
    "correctness": "warn",
    "perf": "error"
  },
  "rules": {
    "eqeqeq": "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-unused-vars": "error"
  }
};
