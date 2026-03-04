# Bin Yahya Bot — Landing Page

## Overview

The landing page (`src/routes/index.tsx`) is a fully static page showcasing the Bin Yahya Bot family — three personal AI assistants built with OpenClaw for @andreepratama27.

---

## Visual Style

- **Background:** sky-500 (`#0ea5e9`) hero, white body, gray-50 for the history section
- **Bot accent colors:** red (Along), yellow (Angah), green (Alang)
- **Font:** Plus Jakarta Sans (loaded via styles.css)
- **Character image:** `docs/landing-page/image-sample.png` — rendered in the hero section
- **Tone:** Clean, minimal, flat cards with soft shadows — no glassmorphism

---

## Page Sections

### 1. Hero

Full-width sky-blue banner with title, tagline, the `image-sample.png` character image, and a scroll-down anchor link to the bots grid.

### 2. Meet the Bots

Responsive card grid (1 col mobile → 3 col desktop) using `BotCard` component:

| Bot   | Color  | Role                             |
| ----- | ------ | -------------------------------- |
| Along | Red    | Scheduling & Reminders           |
| Angah | Yellow | Research & Information Retrieval |
| Alang | Green  | Task Management & Productivity   |

Each card shows: initials avatar, name, role, description, location badge.

### 3. Our History

Short origin paragraph followed by a vertical timeline rendered via `TimelineItem` components:

1. 2024 — Bin Yahya Bot family founded
2. Early 2024 — Along deployed
3. Mid 2024 — Angah joined
4. Late 2024 — Alang completed the family

### 4. How It Works

Four numbered steps rendered via `StepItem` components (horizontal on desktop, vertical on mobile):

1. You send a message
2. Router decides (OpenClaw)
3. Agent processes
4. Reply delivered

---

## Files

| File                              | Purpose                                                    |
| --------------------------------- | ---------------------------------------------------------- |
| `src/routes/index.tsx`            | Main landing page — static content only, no data fetching  |
| `src/components/BotCard.tsx`      | Bot member card with color theming, avatar, location badge |
| `src/components/TimelineItem.tsx` | Single timeline entry with dot + line connector            |
| `src/components/StepItem.tsx`     | Numbered "how it works" step with icon circle              |

---

## Component Props

### `BotCard`

```ts
interface BotCardProps {
  name: string;
  role: string;
  description: string;
  location: string;
  color: "red" | "yellow" | "green";
}
```

### `TimelineItem`

```ts
interface TimelineItemProps {
  date: string;
  event: string;
  isLast?: boolean; // hides the connector line after last item
}
```

### `StepItem`

```ts
interface StepItemProps {
  step: number;
  title: string;
  description: string;
}
```

---

## Data

All content is hardcoded as typed constant arrays in `index.tsx` — no API calls or React Query needed for this page.

```ts
const bots: Bot[] = [
  /* Along, Angah, Alang */
];
const timeline = [
  /* 4 milestone entries */
];
const steps = [
  /* 4 how-it-works steps */
];
```

---

## Running Locally

```bash
pnpm dev
# visit http://localhost:3000
```

## Lint

```bash
pnpm lint
```

> Note: `src/routes/__root.tsx` has a pre-existing `dangerouslySetInnerHTML` Biome warning unrelated to the landing page.
