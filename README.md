# tianpeng.dev

<div align="center">
  <a href="https://nowcoding.vercel.app">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://nowcoding.vercel.app/card.svg?theme=dark" />
      <img src="https://nowcoding.vercel.app/card.svg" alt="NowCoding activity for tianpeng-dev" />
    </picture>
  </a>

  <br />

  ![Today](https://nowcoding.vercel.app/badge/today.svg)
  ![Week](https://nowcoding.vercel.app/badge/week.svg)
  ![Streak](https://nowcoding.vercel.app/badge/streak.svg)
  ![Live](https://nowcoding.vercel.app/badge/live.svg)
</div>


Personal blog built from [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus) and deployed to Cloudflare Workers Static Assets.

## Structure

- `Home`
- `About`
- `Blog`
- `Project`

Projects are managed from one data source: `src/data/projects.ts`.

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run worker:dev
npm run deploy
```

`npm run build` runs `astro check`, `astro build`, and `pagefind --site dist` so search indexes are always included in the deployment output.

## Cloudflare Workers

This project deploys as a static Astro site through Workers Static Assets. It does not use Cloudflare Pages, GitHub Pages, or the Astro Cloudflare adapter for the first release.

Relevant config:

- `wrangler.jsonc`
- `assets.directory: "./dist"`
- `assets.not_found_handling: "404-page"`

Cloudflare setup:

1. Push this repo to GitHub.
2. In Cloudflare, create a Worker from the GitHub repository.
3. Use `npm run build` as the build command.
4. Use `npx wrangler deploy` as the deploy command.
5. Bind `tianpeng.dev` as the Worker custom domain.
6. Optionally bind `www.tianpeng.dev` and redirect one hostname to the other.

## Giscus

Giscus is wired into the blog post layout but disabled by default. After the GitHub repo exists:

1. Make the repo public.
2. Enable GitHub Discussions.
3. Install the Giscus GitHub app.
4. Fill `siteConfig.giscus` in `src/site.config.ts`.
5. Set `enabled: true`.

## Reading Counter

Reading views are intentionally deferred until after the first static deploy. The planned next step is to add a Worker script entry such as `src/worker.ts`, add a D1 binding in `wrangler.jsonc`, and implement `/api/views` while continuing to serve static assets from `dist`.
