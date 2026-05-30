# AGENTS.md

## Cursor Cloud specific instructions

### Stack

pnpm monorepo (Node **24**, pnpm **10**). See `replit.md` for architecture. There is no ESLint/Vitest; use **`pnpm run typecheck`** (or per-package typecheck) as the main quality gate.

### Node / pnpm on Cloud VMs

The repo targets **Node 24** (see `.replit`). If the VM default is older:

```bash
source ~/.nvm/nvm.sh && nvm use 24
corepack enable   # once per shell if pnpm is missing after nvm switch
```

### Install & refresh dependencies

From repo root: `pnpm install` (npm/yarn are blocked by `preinstall`).

### Known typecheck caveat

`pnpm run typecheck` at the root fails if `scripts/` has no `src/` files (`TS18003`). Artifact packages typecheck cleanly:

```bash
pnpm --filter @workspace/portfolio run typecheck
pnpm --filter @workspace/api-server run typecheck
pnpm --filter @workspace/mockup-sandbox run typecheck
```

### Running services (dev)

Use tmux for long-running dev servers. Example:

| Service | Command | URL |
|---------|---------|-----|
| Portfolio | `pnpm --filter @workspace/portfolio run dev` | http://localhost:5173/ |
| API server | `PORT=8080 pnpm --filter @workspace/api-server run start` (after `build`) | http://localhost:8080/api/healthz |
| Mockup sandbox | `PORT=8081 BASE_PATH=/__mockup pnpm --filter @workspace/mockup-sandbox run dev` | http://localhost:8081/__mockup/ |

- **API `dev` script** rebuilds then starts; it is not watch mode. Prefer `build` + `start` when iterating on the API.
- **Mockup sandbox** requires `PORT` and `BASE_PATH` for `dev`, `build`, and `preview` (Vite config throws without them). Replit uses `8081` and `/__mockup`.
- **Portfolio** is static (no DB/API required). PostgreSQL/`DATABASE_URL` is only needed for `@workspace/db` migrations (`pnpm --filter @workspace/db run push`).

### Build

- Portfolio / API: build without extra env vars (API runs `typecheck:libs` in `prebuild`).
- Mockup: `PORT=8081 BASE_PATH=/__mockup pnpm --filter @workspace/mockup-sandbox run build`
- Root `pnpm run build` runs root typecheck first (may hit the `scripts/` issue above).

### Lint / tests

Not configured in package scripts. Prettier is a root devDependency with no npm script.
