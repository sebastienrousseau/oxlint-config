---
title: "Usage — @sebastienrousseau/oxlint-config"
description: "How to use and configure @sebastienrousseau/oxlint-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/oxlint-config` can be consumed across all standard module formats.

## CommonJS

```javascript
module.exports = require("@sebastienrousseau/oxlint-config");
```

## ES Modules

```javascript
import config from "@sebastienrousseau/oxlint-config";
export default config;
```

## In `package.json`

```json
{
  "oxlint": "@sebastienrousseau/oxlint-config"
}
```
