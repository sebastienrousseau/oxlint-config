# `@sebastienrousseau/oxlint-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/oxlint-config`.

---

## Description
Shareable Oxlint configuration rules for high-speed Rust-based static linting.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/oxlint-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Schema Conformance
- **Description**: Validates against Oxlint schema (`$schema`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Plugin Ecosystem
- **Description**: Equipped with TypeScript, Import, and Unicorn plugins
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Category Activation
- **Description**: Enables correctness (warn) and performance (error) diagnostic categories
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Strict Diagnostics
- **Description**: Enforces strict equality and clean variable lifecycles
- **Scope**: Production & Development
- **Status**: Stable & Active

