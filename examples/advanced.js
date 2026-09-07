/**
 * Advanced custom Oxlint rule extension
 */
const base = require("../index.cjs");
const custom = { ...base, categories: { ...base.categories, correctness: "error" } };
console.log("Escalated correctness category to error:", custom.categories.correctness);
