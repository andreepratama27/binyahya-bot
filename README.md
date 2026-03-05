# Bin Yahya Bot

A family of personal AI assistants — built for the Bin Yahya household, powered by [OpenClaw](https://github.com/andreepratama27/openclaw).

Meet the three brothers:

- **Along** — Scheduling & Reminders. Keeps your calendar in order so nothing slips through the cracks.
- **Angah** — Research & Information. Digs deep to surface the answers you need, fast.
- **Alang** — Task Management & Productivity. Keeps projects moving and priorities clear.

This repository is the public landing page for the Bin Yahya Bot family — introducing who they are, how they work, and the story behind them.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React SSR) |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Language | TypeScript |
| Linting & Formatting | [Biome](https://biomejs.dev/) |
| Pre-commit Hooks | [Lefthook](https://github.com/evilmartians/lefthook) |
| Testing | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |
| Package Manager | pnpm |
| Deployment | Netlify |

---

## Task Tracking

This project uses **[Beads](https://github.com/steveyegge/beads)** — a git-backed issue tracker designed for AI-assisted development. All tasks, bugs, and features are tracked locally via the `bd` CLI. No external project management tool needed — everything lives right alongside the code.

```bash
bd ready          # See what's next
bd list           # View all issues
bd show <id>      # Inspect a task
bd create "title" -p 1  # Create a new task
bd close <id> --reason "done"  # Close a task
```

---

## Coding Agents

This project is built with the help of AI coding agents. Each brings something different to the table — here's the lineup, in order of primary usage:

### 1. Claude Code — Sonnet 4.6

The main workhorse for day-to-day development. Claude Code runs directly in the terminal and handles everything from architecture decisions to writing tests. Sonnet 4.6 hits the sweet spot between speed and reasoning for most tasks.

### 2. pi.dev — GitHub Copilot (Claude Opus 4.6)

[Pi](https://pi.dev) is used as a coding agent harness with GitHub Copilot, powered by Claude Opus 4.6 under the hood. Great for heavier reasoning tasks where a stronger model is worth the extra time — code reviews, refactors, and multi-file changes.

### 3. AmpCode — Smart Mode

AmpCode in Smart Mode handles longer, multi-step tasks that benefit from autonomous execution. Particularly useful for feature development that spans multiple files or requires iterative refinement.

---

## Getting Started

```bash
pnpm install
pnpm dev
```

App runs at `http://localhost:3000`.

## Building for Production

```bash
pnpm build
pnpm preview
```

## Testing

```bash
pnpm test
```

## Linting & Formatting

```bash
pnpm lint      # Lint with Biome
pnpm format    # Format with Biome
pnpm check     # Lint + format check
```
