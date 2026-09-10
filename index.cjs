// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Modern Oxlint CommonJS Configuration
 */
module.exports = {
  $schema: "./node_modules/oxlint/configuration_schema.json",
  plugins: ["typescript", "import", "unicorn"],
  categories: {
    correctness: "warn",
    perf: "error",
  },
  rules: {
    eqeqeq: "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-unused-vars": "error",
  },
};
