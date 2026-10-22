# LabTools

Lab tools that run in your browser, collected in one place, plus an archive of the websites and resources our Electronics, Automation and TPSE teachers recommend. The site is in Italian and English.

**Live site:** <https://labtools.erikv-tools.workers.dev>

## The tools

| Tool | What it does | Live | Source |
|---|---|---|---|
| Quantify | Turns a slow-motion video of an analog oscilloscope into one complete image of the trace | [open](https://quantify.erikv-tools.workers.dev) | [erikvelf/quantify](https://github.com/erikvelf/quantify) |
| Infinidraw | Drawing editor with an infinite canvas where every shape stays editable | [open](https://infinidraw.erikv-tools.workers.dev) | [erikvelf/infinidraw](https://github.com/erikvelf/infinidraw) |
| LastEdit | Photo editor: straighten, crop, annotate, and strip metadata (GPS included) | [open](https://lastedit.erikv-tools.workers.dev) | [erikvelf/lastedit](https://github.com/erikvelf/lastedit) |

Every tool runs on your own computer: files are never uploaded. They also work as apps on Linux.

## Develop

Needs Node 22.12+ and pnpm.

```bash
pnpm install
pnpm dev          # local server at http://localhost:4321
pnpm build        # static site in dist/
```

Content lives in `src/data/`: `tools.ts` for the tool cards, `sites.ts` for the useful sites, `site.ts` for the author and publication date. The About text is in `src/components/About.astro`.

## Deploy

The site is deployed to Cloudflare as static assets (`wrangler.toml`), from this computer:

```bash
pnpm deploy:prod      # build and publish to the live site
pnpm deploy:preview   # build and upload a preview version, live site unchanged
```

The first time, log in with `npx wrangler login`.

## License

[MIT](LICENSE) © 2026 Erik Velf
