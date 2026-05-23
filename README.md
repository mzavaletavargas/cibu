# cibu

React + Vite SPA (TanStack Router, Tailwind v4, shadcn/ui). 100% static —
no server, no SSR. `vite build` emits a static `dist/` that any plain file
host can serve.

## Local development

```bash
bun install
bun run dev        # http://localhost:5173
bun run build      # production build → dist/
bun run preview    # serve dist/ locally to sanity-check
```

## Static deployment strategy

`bun run build` produces a static bundle in `dist/` (HTML + JS + CSS +
assets). Because this is an SPA, the host must serve `index.html` for any
unknown path (SPA fallback) so client-side routing works on hard reloads
and direct links.

### Option A — GitHub Pages (recommended for "just public + free")

**Conditions on the free tier:**

- Repo must be **public** (private repos need GitHub Pro/Team/Enterprise).
- One GitHub Pages site per repo; **no limit on how many repos** can have
  Pages enabled on a free account.
- Soft limits: ~1 GB published site size, ~100 GB/month bandwidth, ~10
  builds/hour. Fine for this project.
- Custom domain: **supported and free**, including automatic HTTPS via
  Let's Encrypt.

**Do we commit the build?** No. Don't commit `dist/` — it stays in
`.gitignore`. GitHub Actions builds on every push to `main` and publishes
the artifact via the official Pages deploy action. The repo only ever
contains source.

**Workflow** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - run: bun run build
      # SPA fallback: GitHub Pages serves 404.html for unknown paths.
      # Copying index.html → 404.html makes client-side routing work.
      - run: cp dist/index.html dist/404.html
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

**Custom domain steps:**

1. In repo **Settings → Pages**, set the custom domain (e.g. `cibu.example.com`).
2. Add a `CNAME` DNS record at your registrar pointing the subdomain to
   `<your-github-username>.github.io`. For an apex domain, use the four
   GitHub Pages `A` records (185.199.108.153 / .109.153 / .110.153 / .111.153).
3. Wait for DNS to propagate, then enable **Enforce HTTPS**.
4. Repo will auto-create a `CNAME` file in the published artifact — if it
   gets dropped between builds, add `public/CNAME` containing your domain
   so it's copied into `dist/` on every build.

### Option B — Cloudflare Pages (better if you outgrow Pages)

Same git-driven model, generous free tier (unlimited bandwidth, 500
builds/month), custom domains free, and it natively understands SPA
fallback. Connect the repo in the Cloudflare dashboard, set build command
`bun run build`, output `dist`, done. Useful upgrade path because the repo
already has Cloudflare tooling.

### Option C — Netlify / Vercel

Both work the same way: connect the repo, build command `bun run build`,
publish directory `dist`, add custom domain in their UI. Free tiers fine
for personal projects.

### Summary

| Host             | Free + public | Custom domain | SPA fallback        | Commit build? |
| ---------------- | ------------- | ------------- | ------------------- | ------------- |
| GitHub Pages     | ✅            | ✅ + HTTPS    | via `404.html` copy | ❌            |
| Cloudflare Pages | ✅            | ✅ + HTTPS    | built-in setting    | ❌            |
| Netlify          | ✅            | ✅ + HTTPS    | `_redirects` file   | ❌            |
| Vercel           | ✅            | ✅ + HTTPS    | built-in            | ❌            |

In every case the recipe is the same: **CI builds, host serves `dist/`,
source is the only thing in git.**
