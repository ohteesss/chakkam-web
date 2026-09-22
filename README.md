# Chakkam landing page

React 19 + Vite + TypeScript. One page, no router, no UI library.

The bot itself (Go backend) lives in a separate repo, `chakam`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks, then outputs to dist/
npm run preview  # serve the production build
npm run lint
```

## Where things live

| What | File |
|---|---|
| All copy, FAQs, example agreements, the WhatsApp link | `src/data.ts` |
| "Spot the fake" rounds (add a pair to add a round) | `ROUNDS` in `src/data.ts` |
| Brand colours and every style | `src/styles.css` (tokens at the top) |
| Sections, in page order | `src/App.tsx` |

## Deploy

Any static host works. Build command `npm run build`, output directory `dist`.

## Copy rules

The page must never say "legally binding", mention escrow, or claim Chakkam settles disputes. The bot's system prompt forbids all three and the page has to match it.
