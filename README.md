<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./oxlint-config.svg" alt="oxlint-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/oxlint-config</h1>

<p align="center">
  Shareable Oxlint configuration rules for 50x–100x faster Rust-powered JS/TS linting.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/oxlint-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/oxlint-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/oxlint-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Foxlint-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/oxlint-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/oxlint-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/oxlint-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Ultra-Fast Rust Linting Rules](#ultra-fast-rust-linting-rules) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/oxlint-config

# pnpm
pnpm add -D @sebastienrousseau/oxlint-config

# yarn
yarn add -D @sebastienrousseau/oxlint-config

# bun
bun add -d @sebastienrousseau/oxlint-config
```

---

## Quick Start

### In `package.json`

```json
{
  "oxlint": "@sebastienrousseau/oxlint-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/oxlint-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/oxlint-config";
export default config;
```

---

## Ultra-Fast Rust Linting Rules

Configures Oxlint rules for correctness, performance, and nursery categories in `.oxlintrc.json`.

### Before (Unstandardized)

```javascript
// Standard slow linter pre-commit checks
```

### After (@sebastienrousseau/oxlint-config Enforced)

```javascript
// .oxlintrc.json extending @sebastienrousseau/oxlint-config
{
  "extends": ["@sebastienrousseau/oxlint-config"]
}
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/oxlint-config.git
cd oxlint-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
