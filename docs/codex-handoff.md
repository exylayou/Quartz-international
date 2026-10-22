# Quartz International — Codex handoff

The existing Antigravity project remains a Vite/React application with its Express API and Vercel configuration. No framework migration or domain change is required.

## Development

Use Node 20+ and npm. Run `npm ci`, then `npm run dev`. Keep credentials in `.env.local`; do not commit them. Production static rendering does not require an AI key. The existing chat feature still requires its provider configuration to respond.

## Production verification

1. `npm run lint`
2. `npm run build`
3. `npm run check:seo` and `npm run check:auth`
4. Inspect a deployment preview in a browser: homepage, cost guide, FAQ, city pages, slab detail, estimators, contact form and private quote/admin routes.
5. Fetch the preview without JavaScript and confirm page-specific content, title, description, canonical, JSON-LD, `robots.txt`, `llms.txt`, `llms-full.txt` and both sitemap groups.
6. Confirm `/does-not-exist` returns HTTP 404, legacy aliases resolve correctly, and the final host serves static route files rather than rewriting every URL to the homepage.
7. Once deployed, check the live domain's redirects and Search Console indexing. Submit `/sitemap.xml`. Recrawl and compare the same prompt panel, without promising a ranking date.

The browser bundle and the SSG bundle use the same React pages. React 19 hoists metadata during build-time document rendering. When JavaScript loads, the browser replaces the static snapshot and transfers metadata ownership to React; it does not hydrate time-sensitive estimator/PDF markup. `dist` is generated; edit `src`, rebuild and redeploy. Route rendering failures stop the build. Private quotes, admin and result pages are excluded from prerendering and sitemaps; their browser routes retain an app shell. Robots rules are not access control.

Core pages and the product catalogue have separate sitemaps linked from the sitemap index. Kasa aliases retain working pages and canonical links but are omitted from sitemaps. Generated lastmod dates were removed because a fresh build does not mean every page changed. The existing catalogue was retained.

Initial verification: 778 generated pages and 1,502 parseable JSON-LD blocks. Initial content checks: homepage 720 words, cost guide 1,905, FAQ 1,402, rental guide 855. These counts measure readable body text, including shared navigation; they are checks against empty/stub output, not SEO targets.

## Administrator credential deployment prerequisite

The original server contained hardcoded administrator credentials. These were removed from server authorization checks and the browser source. Configure new independent server-only `ADMIN_SECRET_KEN` and `ADMIN_SECRET_JAY` values (at least 32 characters each) before a production release, and rotate the previously exposed credentials. No new secrets were generated, transmitted, or configured in this session. Without valid environment values, administrator requests return 401; public pages remain available. The original repository history is not rewritten by this change.

## Remaining work

- External listing account changes and verified business claims are tracked in `docs/offsite-corrections.md`.
- Confirm current turnaround, prices/inclusions, company age, installation counts, supplier permissions, credentials and source URLs for testimonials on other pages. This branch removes unverified homepage review cards and the homepage's unsupported aggregate-rating schema; it does not certify every existing claim across the catalogue.
- Existing contact uploads simulate progress and submit file metadata rather than file bytes. Do not rely on them for drawing delivery until real uploads are implemented; email attachments remain available.
- Existing Vite configuration places `GEMINI_API_KEY` in browser code if configured. Move chat requests behind a validated server endpoint before supplying a privileged key. This branch only defers client initialization so static rendering needs no key; no credentials were created or configured.
- Existing large bundle/assets, analytics seeding and unrelated business automation behavior remain separate follow-up items.

## Validation limits

Production build, TypeScript, static-output checks and direct HTTP route checks are recorded in the PR. The usual Chromium download was blocked; a temporary npm-packaged Chromium was used for local browser checks. Deployed Vercel routing and live submission/integration checks remain required before production release. No external profiles, customer messages, live database records or production deployment were intentionally changed.

## Current delivery state

Local browser checks passed for homepage, cost, FAQ, Scarborough, a Kasa alias, all three estimators and contact, with unique metadata and no runtime errors. The FAQ answer is readable with JavaScript disabled. Desktop and mobile homepage screenshots were inspected. HTTP checks passed for canonical pages, legacy redirects, private app-shell routes, public references and unknown-page 404s. Unauthenticated protected API requests return 401, and the old hardcoded administrator strings are absent from current source and built browser JavaScript.

The secured changes were approved for publication as a draft pull request on October 22, 2026. No production deployment has occurred. Off-site account edits remain pending access.

## Vercel API packaging and server checks

The local development/static-file bootstrap is in `local-server.ts`, started by `npm run dev` and `npm start`. Vercel's API wrapper imports only `server.ts`; it no longer traces the local Vite server or static output directory. Function exclusions also omit `dist`, `.ssg` and other frontend-only directories. These files remain available as static website output, outside the API function.

The TypeScript configuration now checks `server.ts`, `local-server.ts`, the API wrapper and verification scripts as well as `src`. `npm run build` starts with that complete type check. Quote notes and deposit percentage are declared on `Lead`; checkout rejects missing/non-positive totals and invalid deposit percentages, and uses a string quote identifier in payment metadata.

Follow-up validation: full TypeScript check and administrator checks pass. `npm run check:checkout` passes seven isolated cases using local fixture data and mock payment mode, with no external payment calls. A local Node File Trace of the API reports 871 files / approximately 6.1 MiB, including dependencies, and no `dist`, `.ssg`, local bootstrap or Vite files. This is a dependency-trace measurement, not a claim about Vercel's final packaged size; deployment must confirm that result. Optional native WebSocket acceleration and debug-color dependencies are absent and use their package fallbacks.
