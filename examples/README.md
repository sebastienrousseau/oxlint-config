# `@sebastienrousseau/oxlint-config` Examples Catalog

This directory provides runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/oxlint-config`.

---

## Example Suite Overview

| File                           | Type      | Feature Coverage                       | Command                     |
| :----------------------------- | :-------- | :------------------------------------- | :-------------------------- |
| [`basic.js`](./basic.js)       | CommonJS  | Standard default configuration import  | `node examples/basic.js`    |
| [`advanced.js`](./advanced.js) | CommonJS  | Custom extension and rule overrides    | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs)         | ES Module | Native ESM consumption via `import`    | `node examples/esm.mjs`     |
| [`features.js`](./features.js) | CommonJS  | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **Schema Conformance**: Validates against Oxlint schema (`$schema`)
- [x] **Plugin Ecosystem**: Equipped with TypeScript, Import, and Unicorn plugins
- [x] **Category Activation**: Enables correctness (warn) and performance (error) diagnostic categories
- [x] **Strict Diagnostics**: Enforces strict equality and clean variable lifecycles
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```
