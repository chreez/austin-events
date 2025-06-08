# Austin Events

Simple demo web app listing events in Austin. The project now uses TypeScript for stronger type safety.

The UI is built mobile first with responsive Tailwind classes so it looks great on small screens.  A shared Hero component displays the skyline on both the home and events pages.

## Features

- Search and filter events by category using simple chip-style buttons.
- Event cards reveal performer images on hover and link directly to Ticketmaster for easy ticket purchase.
- Start and end times as well as ticket prices are displayed for quick viewing.

## Setup

```bash
npm install
npm run dev
```

The dev server automatically handles TypeScript compilation.

Build for production with `npm run build` and start with `npm start`.

## Testing

```bash
npm test
```

See `docs/api.md` for details on the API endpoints.

## Deployment

1. Sign up at [Vercel](https://vercel.com) and connect this GitHub repository.
2. Set any API keys in the Vercel dashboard under **Settings → Environment Variables**.
3. Each push to `main` automatically builds and deploys the site.
4. Copy `.env.example` to `.env.local` and fill in your `TICKETMASTER_API_KEY` for local development.
5. Add the same variable in the Vercel dashboard so the API route can access it during builds.
6. When the key is provided, the `/api/events` endpoint pulls real Austin events from the Ticketmaster Discovery API.
