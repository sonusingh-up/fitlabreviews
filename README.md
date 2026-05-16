# Fitlab Reviews

Evidence-based supplement reviews. Built with Next.js 14, Tailwind CSS, and deployed on Vercel.

---

## Quick start (local dev)

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env.local
# Edit .env.local — set SITE_URL=http://localhost:3000 for local dev

# 3. Run dev server
npm run dev
# → http://localhost:3000
```

---

## Deploy to Vercel — step by step

### Step 1 — Push to GitHub

```bash
# In the fitlab/ folder:
git init
git add .
git commit -m "Initial commit — Fitlab Reviews"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/fitlab-reviews.git
git branch -M main
git push -u origin main
```

### Step 2 — Import into Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Click **Import Git Repository** → select `fitlab-reviews`
3. Vercel auto-detects Next.js — no framework config needed
4. Click **Deploy** (first deploy runs immediately)

### Step 3 — Add environment variables

In Vercel → Project Settings → **Environment Variables**, add:

| Name | Value | Environments |
|------|-------|-------------|
| `SITE_URL` | `https://fitlabreviews.com` | Production |
| `SITE_URL` | `https://your-preview-url.vercel.app` | Preview |
| `SITE_URL` | `http://localhost:3000` | Development |

### Step 4 — Connect your custom domain

1. Vercel → Project → **Settings → Domains**
2. Add `fitlabreviews.com` and `www.fitlabreviews.com`
3. Vercel shows you two DNS records to add — go to your domain registrar and add them:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

4. SSL certificate is provisioned automatically (usually < 60 seconds)

### Step 5 — After first live deploy

```bash
# Verify sitemap was generated
curl https://fitlabreviews.com/sitemap.xml

# Verify robots.txt
curl https://fitlabreviews.com/robots.txt
```

Then in **Google Search Console**:
1. Add property → `https://fitlabreviews.com`
2. Verify ownership (Vercel makes this easy — add the TXT record they give you)
3. Sitemaps → Submit → `https://fitlabreviews.com/sitemap.xml`

---

## Project structure

```
fitlab/
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── layout.tsx               # Root layout — global SEO + JSON-LD
│   │   ├── page.tsx                 # Homepage
│   │   ├── about/                   # About page
│   │   ├── authors/                 # Team page
│   │   ├── methodology/             # How we review
│   │   ├── scoring-rubric/          # Rubric v3.1
│   │   ├── conflicts-policy/        # Editorial independence
│   │   ├── contact/                 # Contact form
│   │   ├── reviews/[slug]/          # Product reviews — Product+Review JSON-LD
│   │   ├── ingredients/[slug]/      # Ingredient deep-dives — Article JSON-LD
│   │   ├── best-of/[category]/      # Best-of lists — ItemList JSON-LD
│   │   └── compare/[slug]/          # Comparisons — Article JSON-LD
│   ├── components/                  # Reusable UI components
│   │   ├── JsonLd.tsx               # JSON-LD injector
│   │   ├── Nav.tsx                  # Navigation
│   │   ├── PageShell.tsx            # Page wrapper (Nav + Footer)
│   │   ├── Hero.tsx                 # Homepage hero
│   │   ├── BestOfProductCard.tsx    # Ranked product card
│   │   ├── CompareTable.tsx         # Head-to-head table
│   │   └── ...
│   └── lib/
│       └── data.ts                  # All content data (products, ingredients, authors)
├── .env.example                     # Environment variable template
├── .gitignore
├── next-sitemap.config.js           # Sitemap + robots.txt config
├── next.config.js                   # Next.js config
├── tailwind.config.ts               # Design tokens
├── tsconfig.json
└── vercel.json                      # Vercel headers + redirects
```

---

## Adding new content

### Add a new product review

1. Add the product object to `src/lib/data.ts` in the `products` or `extendedProducts` array
2. Add the slug to `generateStaticParams()` in `src/app/reviews/[slug]/page.tsx`
3. The page generates automatically at `/reviews/your-slug`

### Add a new ingredient page

1. Add the ingredient object to `src/lib/data.ts` in the `ingredients` array
2. Add the slug to `generateStaticParams()` in `src/app/ingredients/[slug]/page.tsx`

### Add a new best-of category

1. Add a `BestOfCategory` object to `bestOfCategories` in `src/lib/data.ts`
2. Add the slug to `generateStaticParams()` in `src/app/best-of/[category]/page.tsx`

---

## CI/CD — how it works after setup

Every `git push` to `main` triggers:
1. Vercel builds the project (`npm run build`)
2. Next.js generates all static pages
3. `postbuild` runs `next-sitemap` → generates `sitemap.xml` + `robots.txt`
4. Vercel deploys to the global edge network
5. The live site is updated (typically < 30 seconds)

Pull requests get automatic **preview deployments** — a unique URL for every PR so you can test before merging.

---

## Tech stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Fonts | Fraunces + Inter (Google Fonts) |
| SEO | Next.js Metadata API + custom JSON-LD |
| Sitemap | next-sitemap |
| Deployment | Vercel |
| Analytics | Add Plausible (privacy-first, no cookies) |
| Images | Add Cloudflare Images for product photos |

---

## Environment variables reference

| Variable | Required | Description |
|----------|----------|-------------|
| `SITE_URL` | Yes | Full domain, no trailing slash. Used for sitemap + canonical URLs. |

---

*Built by Pankaj Singh · [LinkedIn](https://www.linkedin.com/in/pankaj-singh-77b93a368/)*
