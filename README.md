# Austin Events

Simple demo web app listing events in Austin.

The UI is built mobile first with responsive Tailwind classes so it looks great on small screens.

## Setup

```bash
npm install
npm run dev
```

Build for production with `npm run build` and start with `npm start`.

## Testing

```bash
npm test
```

## Deployment

1. Sign up at [Vercel](https://vercel.com) and connect this GitHub repository.
2. Set any API keys in the Vercel dashboard under **Settings → Environment Variables**.
3. Each push to `main` automatically builds and deploys the site.
4. Copy `.env.example` to `.env.local` and fill in your `TICKETMASTER_API_KEY` for local development.
5. Add the same variable in the Vercel dashboard so the API route can access it during builds.
6. When the key is provided, the `/api/events` endpoint pulls real Austin events from the Ticketmaster Discovery API.
