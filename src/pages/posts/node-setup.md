---
layout: "../../layouts/MarkdownLayout.astro"
title: "Node backend setup"
description: "TypeScript, Node and Express project setup"
pubDate: "2026-04-18"
---

### Init pnpm project

[pnpm](https://pnpm.io/) is a fast, disk space-efficient package manager.

```bash
pnpm init
```

### Add dependencies

[Express](https://expressjs.com/) is a Node web application framework.

[Zod](https://zod.dev/) is a TypeScript schema validation library.

```bash
pnpm add express zod
```
### Add dev dependencies

[TypeScript](https://www.typescriptlang.org/) extends JavaScript by adding types to the language.

[TypeScript Execute (tsx)](https://tsx.is/) is the easiest way to run TypeScript in Node.

[@types/node](https://www.npmjs.com/package/@types/node) package contains type definitions for node. 

[@types/express](https://www.npmjs.com/package/@types/express) package contains type definitions for express.

```bash
pnpm add --save-dev typescript tsx @types/node @types/express
```

#### Formatter and linter

[Biome](https://biomejs.dev/) is a high-performance, Rust-based toolchain for web projects that unifies code formatting and linting.

```bash
pnpm add -D -E @biomejs/biome
```

### TypeScript ORM

[MikroORM](https://mikro-orm.io/) is a TypeScript ORM for Node built on Data Mapper, Unit of Work, and Identity Map patterns.

[node-postgres (pg)](https://node-postgres.com/) is a non-blocking PostgreSQL client for Node.js, serving as a collection of modules that allow Node.js applications to interface with PostgreSQL databases. 

```bash
pnpm add pg @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql
```

```bash
pnpm add --save-dev @mikro-orm/cli
```

[@types/pg](https://www.npmjs.com/package/@types/pg) package contains type definitions for pg.

```bash
pnpm add --save-dev @types/pg
```

