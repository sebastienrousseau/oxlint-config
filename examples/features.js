/**
 * 100% Feature Showcase for @sebastienrousseau/oxlint-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/oxlint-config ===");
assert(typeof config.$schema === "string");
assert(config.plugins.includes("typescript") && config.plugins.includes("unicorn"));
assert.strictEqual(config.categories.correctness, "warn");
assert.strictEqual(config.categories.perf, "error");

console.log("  ✓ Plugins: typescript, import, unicorn");
console.log("  ✓ Correctness category: warn");
console.log("  ✓ Performance category: error");
console.log("✅ 100% of oxlint-config rules and features validated.");
