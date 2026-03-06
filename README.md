# WikaEX – Landing Page Airdrop

> Official landing page for **$WIKA** — a fixed 1B supply blockchain asset with transparent tokenomics and long-term scarcity design.

🌐 **Live:** [landing-page-airdrop.vercel.app](https://landing-page-airdrop.vercel.app)

---

## Overview

WikaEX is a native blockchain project built on a custom Proof-of-Work mainnet. This landing page introduces the $WIKA token, its tokenomics, development roadmap, and community channels — designed to onboard users into the airdrop campaign.

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Introduction & primary CTA to claim airdrop |
| **Supply** | $WIKA tokenomics — 1B fixed supply & distribution breakdown |
| **Roadmap** | 5-phase development milestones from Mainnet to dApps |
| **Whitepaper** | Technical & economic documentation across 7 tabs |
| **Contact** | Community links — Telegram, Twitter, Discord, GitHub, Email |

---

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## Getting Started

```bash
# Clone repo
git clone https://github.com/wikaex/landing-page-airdrop.git
cd landing-page-airdrop

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   └── page.tsx            # Main page — section assembly
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── SupplySection.tsx
│   │   ├── RoadmapSection.tsx
│   │   ├── WhitepaperSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── Header.tsx
│   │   └── button.tsx
│   └── whitepaper/
│       ├── WhitepaperTabs.tsx
│       ├── SectionCard.tsx
│       └── content/
│           ├── Overview.tsx
│           ├── MonetaryPolicy.tsx
│           ├── Architecture.tsx
│           ├── Consensus.tsx
│           ├── Transactions.tsx
│           ├── Comparison.tsx
│           └── Roadmap.tsx
└── public/
    ├── og-image.png        # OpenGraph image (1200×630)
    ├── favicon.ico
    └── hero/               # Hero character & vector assets
```

---


**Total Supply: 1,000,000,000 $WIKA (fixed)**

---

## Community

| Platform | Link |
|---|---|
| Telegram | [t.me/wikaex](https://t.me/wikaex) |
| Twitter / X | [x.com/wikaex](https://x.com/wikaex) |
| Discord | [discord.gg/wikaex](https://discord.gg/wikaex) |
| GitHub | [github.com/wikaex](https://github.com/wikaex) |
| Email | hello@wikaex.com |

---

## License

MIT © WikaEX