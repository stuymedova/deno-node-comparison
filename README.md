# Deno and Node.js Comparison

## Summary

The main differences of Deno: 

- Out of the box TypeScript support **(ex. 2)**
- ES Modules support (doesn't support `require()`) **(ex. 2 & 3)**
- No `package.json` or `node_modules`. Remote modules are stored in the system's cache, unless specified otherwise **(ex. 2 & 3)**
- Import modules via URLs from anywhere (as opposed to only npm) **(ex. 2 & 3)**
- File, network, and environment access need to be enabled explicitly (no access by default) **(ex. 4 & 5)**

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
│   ├── 4_http-server
│   │   └── webserver.js
│   └── 5_static-server
│       ├── static
│       │   └── index.html
│       └── app.js
│       
└── node
    ├── 1_hello-world
    │   └── app.js
    ├── 2_local-modules
    │   ├── node_modules
    │   │   └── …
    │   ├── app.js
    │   ├── easings.js
    │   ├── easings.ts
    │   ├── package.json
    │   └── package-lock.json
    ├── 3_remote-modules
    │   ├── node_modules
    │   │   └── …
    │   ├── app.js
    │   ├── package.json
    │   └── package-lock.json
    ├── 4_http-server
    │   └── webserver.js
    └── 5_static-server
        ├── node_modules
        │   └── …
        ├── static
        │   └── index.html
        ├── app.js
        ├── package.json
        └── package-lock.json
```

## Prerequisites

- [Deno](https://deno.land)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
