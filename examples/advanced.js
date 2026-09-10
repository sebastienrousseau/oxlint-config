// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced custom Oxlint rule extension
 */
const base = require("../index.cjs");
const custom = {
  ...base,
  categories: { ...base.categories, correctness: "error" },
};
console.log(
  "Escalated correctness category to error:",
  custom.categories.correctness,
);
