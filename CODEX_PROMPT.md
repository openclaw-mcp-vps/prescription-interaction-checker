# Build Task: prescription-interaction-checker

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: prescription-interaction-checker
HEADLINE: Personal medication interaction and timing optimizer
WHAT: Tracks medications, checks for dangerous interactions, optimizes timing for maximum effectiveness
WHY: Medication errors cause 125,000 deaths annually, existing apps are clunky or incomplete
WHO PAYS: Chronic illness patients, elderly patients, caregivers
NICHE: health-tracking
PRICE: $$8/mo

ARCHITECTURE SPEC:
Next.js app with secure medication database, real-time interaction checking via drug APIs, and intelligent scheduling algorithms. Uses Supabase for user data/medications, integrates with FDA/RxNorm APIs for drug information, and implements ML-based timing optimization.

PLANNED FILES:
- app/page.tsx
- app/dashboard/page.tsx
- app/medications/page.tsx
- app/interactions/page.tsx
- app/schedule/page.tsx
- app/api/medications/route.ts
- app/api/interactions/route.ts
- app/api/optimize-schedule/route.ts
- app/api/webhooks/lemonsqueezy/route.ts
- components/MedicationForm.tsx
- components/InteractionAlert.tsx
- components/ScheduleOptimizer.tsx
- components/DashboardStats.tsx
- lib/drug-database.ts
- lib/interaction-checker.ts
- lib/schedule-optimizer.ts
- lib/supabase.ts
- lib/lemonsqueezy.ts

DEPENDENCIES: next, react, typescript, tailwindcss, @supabase/supabase-js, @lemonsqueezy/lemonsqueezy.js, date-fns, zod, react-hook-form, lucide-react, recharts, node-cron, axios

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/prescription-interaction-checker
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019ded3a-0aa3-7811-b3bb-a07b40aef510
--------
user
# Build Task: prescription-interaction-checker

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: prescription-interaction-
Please fix the above errors and regenerate.