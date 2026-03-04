import { createFileRoute } from "@tanstack/react-router";
import { BotCard } from "../components/BotCard";
import { TimelineItem } from "../components/TimelineItem";
import { StepItem } from "../components/StepItem";

export const Route = createFileRoute("/")({ component: LandingPage });

interface Bot {
  name: string;
  color: "red" | "yellow" | "green";
  role: string;
  description: string;
  location: string;
}

const bots: Bot[] = [
  {
    name: "Along",
    color: "red",
    role: "Scheduling & Reminders",
    description:
      "Along keeps your calendar in order — setting reminders, managing appointments, and making sure you never miss what matters.",
    location: "Malaysia",
  },
  {
    name: "Angah",
    color: "yellow",
    role: "Research & Information",
    description:
      "Angah digs deep to find answers — retrieving facts, summarising articles, and surfacing the information you need.",
    location: "Malaysia",
  },
  {
    name: "Alang",
    color: "green",
    role: "Task Management & Productivity",
    description:
      "Alang helps you stay on top of your work — organising tasks, tracking progress, and keeping projects moving forward.",
    location: "Malaysia",
  },
];

const timeline = [
  { date: "2024", event: "Bin Yahya Bot family founded by @andreepratama27" },
  {
    date: "Early 2024",
    event: "Along deployed as the first personal assistant",
  },
  {
    date: "Mid 2024",
    event: "Angah joined to handle research and knowledge queries",
  },
  {
    date: "Late 2024",
    event: "Alang completed the family, focusing on productivity",
  },
];

const steps = [
  {
    title: "You send a message",
    description: "Via WhatsApp, Telegram, or the web interface",
  },
  {
    title: "Router decides",
    description: "OpenClaw routes your request to the right bot",
  },
  {
    title: "Agent processes",
    description: "The bot handles your request using its skills",
  },
  {
    title: "Reply delivered",
    description: "Response sent back to you instantly",
  },
];

function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-[Plus_Jakarta_Sans,sans-serif]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-sky-500 px-6 py-20 text-center text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative">
          <h1 className="mb-3 text-5xl font-bold tracking-tight sm:text-6xl">
            Bin Yahya's Bot
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-sky-100">
            A family of personal AI assistants — built for the Bin Yahya
            household, powered by OpenClaw.
          </p>
          <img
            src="/docs/landing-page/image-sample.png"
            alt="Along, Angah, and Alang"
            className="mx-auto mb-8 max-h-64 object-contain drop-shadow-lg"
          />
          <a
            href="#meet-the-bots"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-600 shadow transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Meet the bots ↓
          </a>
        </div>
      </section>

      {/* Meet the Bots */}
      {/* biome-ignore lint/correctness/useUniqueElementIds: anchor link for same-page scroll */}
      <section id="meet-the-bots" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Meet the Bots
        </h2>
        <p className="mb-10 text-center text-gray-500">
          Three brothers, three specialities.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bots.map((bot) => (
            <BotCard key={bot.name} {...bot} />
          ))}
        </div>
      </section>

      {/* Our History */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our History</h2>
          <p className="mb-10 text-gray-600">
            Bin Yahya Bot started as a personal experiment — a way to bring AI
            assistance into daily family life. Built on top of OpenClaw, the
            goal was simple: a dedicated assistant for each family member's
            needs, all under one roof.
          </p>
          <div>
            {timeline.map((item, i) => (
              <TimelineItem
                key={item.date}
                date={item.date}
                event={item.event}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="mb-12 text-center text-gray-500">
          Simple by design, powerful under the hood.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StepItem
              key={s.title}
              step={i + 1}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bin Yahya Bot · Built by @andreepratama27
      </footer>
    </main>
  );
}
