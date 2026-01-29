# HMO Hunter Landing Page

A production-ready "Coming Soon" landing page for HMO Hunter, a UK HMO deal analysis app.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** Vercel (recommended)

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Elayronline/hmo-landing-page.git
cd hmo-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file (optional):

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Viewing Waitlist Signups (Dev Mode)

In development, signups are saved to `data/waitlist.json`. You can also view them via the API:

```bash
curl http://localhost:3000/api/waitlist
```

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Framework will be auto-detected as Next.js
5. Add environment variables (see below)
6. Click "Deploy"

Your site will be live at `your-project.vercel.app` (you can rename to something like `hmohunter.vercel.app`).

### Environment Variables

Set these in Vercel's project settings under "Environment Variables":

| Variable | Required | Description |
|----------|----------|-------------|
| `WAITLIST_WEBHOOK_URL` | No | Webhook URL to forward signups (e.g., Google Sheets via Make/Zapier) |
| `NEXT_PUBLIC_SITE_URL` | No | Your site's canonical URL for SEO (defaults to Vercel URL) |

## Waitlist Webhook Setup (Google Sheets)

The easiest free approach is to use **Make** (formerly Integromat) or **Zapier** to connect form submissions to Google Sheets.

### Option A: Make.com (Recommended)

1. Create a free account at [make.com](https://make.com)
2. Create a new scenario with:
   - **Trigger:** Webhooks > Custom webhook
   - **Action:** Google Sheets > Add a Row
3. Copy the webhook URL from the trigger
4. Add it as `WAITLIST_WEBHOOK_URL` in Vercel

### Option B: Zapier

1. Create a free account at [zapier.com](https://zapier.com)
2. Create a new Zap:
   - **Trigger:** Webhooks by Zapier > Catch Hook
   - **Action:** Google Sheets > Create Spreadsheet Row
3. Copy the webhook URL
4. Add it as `WAITLIST_WEBHOOK_URL` in Vercel

### Data Sent to Webhook

```json
{
  "email": "user@example.com",
  "source": "hero",
  "timestamp": "2025-01-29T12:00:00.000Z",
  "utm_source": "twitter",
  "utm_medium": "social",
  "utm_campaign": "launch"
}
```

## SEO & Metadata Configuration

### Site Metadata

Edit `app/layout.tsx` to update:

- Page title and description
- OpenGraph tags
- Twitter card settings
- Keywords

### OpenGraph Image

Replace `public/og-image.png` with your own image (1200x630px recommended).

### Favicon

Replace the following files in `public/`:

- `favicon.ico` (32x32 or multi-size)
- `apple-touch-icon.png` (180x180)

### Structured Data

The layout includes Schema.org `SoftwareApplication` structured data. Modify in `app/layout.tsx` if needed.

## Analytics

The codebase includes placeholder analytics functions in `lib/analytics.ts`. To integrate your analytics provider:

1. Open `lib/analytics.ts`
2. Uncomment and configure the relevant provider (Plausible, GA4, etc.)
3. Or replace with your own implementation

## Project Structure

```
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts      # Waitlist API endpoint
│   ├── globals.css           # Tailwind imports & custom styles
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Landing page
├── components/
│   └── WaitlistForm.tsx      # Reusable email capture form
├── lib/
│   ├── analytics.ts          # Analytics helper functions
│   └── utm.ts                # UTM parameter handling
├── public/
│   ├── favicon.ico           # Add your favicon
│   └── og-image.png          # Add your OG image
├── data/                     # Local waitlist storage (dev only, gitignored)
├── .env.example              # Example environment variables
└── README.md                 # This file
```

## Custom Domain

After deploying to Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXT_PUBLIC_SITE_URL` environment variable

## License

Private - All rights reserved.
