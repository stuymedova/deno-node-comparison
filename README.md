# Deno and Node.js Comparison

## Summary

Main differences: 

- Out of the box TypeScript support **(ex. 2)**
- ES Modules support (doesn't support `require()`) **(ex. 2 & 3)**
- No `package.json` or `node_modules`. Remote modules are stored in the system's cache, unless specified otherwise **(ex. 2 & 3)**
- Import modules via URLs from anywhere (as opposed to only npm) **(ex. 2 & 3)**
- File, network, and environment access need to be enabled explicitly (no access by default) **(ex. 4)**

Ex. = Example

## Overview

```
.
├── deno
│   ├── 1_hello-world
│   │   └── app.js
│   ├── 2_local-modules
│   │   ├── app.js
│   │   └── easings.ts
│   ├── 3_remote-modules
│   │   └── app.js
│   └── 4_http-server
│       └── webserver.js
└── node
    ├── 1_hello-world
    │   └── app.js
    ├── 2_local-modules
    │   ├── node_modules
    │   │   └── …
    │   ├── app.js
    │   ├── easings.js
    │   ├── easings.ts
    │   ├── package-lock.json
    │   └── package.json
    ├── 3_remote-modules
    │   ├── node_modules
    │   │   └── …
    │   ├── app.js
    │   ├── package-lock.json
    │   └── package.json
    └── 4_http-server
        └── webserver.js
```

## Prerequisites

- [Deno](https://deno.land)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
