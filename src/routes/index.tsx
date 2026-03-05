import { createFileRoute } from "@tanstack/react-router";
import { BotCard } from "../components/BotCard";
import { TimelineItem } from "../components/TimelineItem";
import { StepItem } from "../components/StepItem";
import { SectionUnderline } from "../components/SectionUnderline";

export const Route = createFileRoute("/")({ component: LandingPage });

interface Bot {
  name: string;
  color: "red" | "yellow" | "green";
  role: string;
  description: string;
  status: "online" | "offline";
  avatar: string;
}

const bots: Bot[] = [
  {
    name: "Along",
    color: "red",
    role: "Scheduling & Reminders",
    description:
      "Along keeps your calendar in order — setting reminders, managing appointments, and making sure you never miss what matters.",
    status: "online",
    avatar: "/avatar/along-avatar.PNG",
  },
  {
    name: "Angah",
    color: "yellow",
    role: "Research & Information",
    description:
      "Angah digs deep to find answers — retrieving facts, summarising articles, and surfacing the information you need.",
    status: "offline",
    avatar: "/avatar/angah-avatar.PNG",
  },
  {
    name: "Alang",
    color: "green",
    role: "Task Management & Productivity",
    description:
      "Alang helps you stay on top of your work — organising tasks, tracking progress, and keeping projects moving forward.",
    status: "offline",
    avatar: "/avatar/alang-avatar.PNG",
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
      <section className="relative overflow-hidden bg-sky-500 px-6 py-16 text-center text-white sm:py-24 lg:py-28">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Cheras, KL
            <span>🇲🇾</span>
          </span>
          <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Bin Yahya's Bot
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-sky-100">
            A family of personal AI assistants — built for the Bin Yahya
            household, powered by OpenClaw 🦞
          </p>
          <img
            src="/binyahya-family-photo.png"
            alt="Along, Angah, and Alang"
            width={384}
            height={384}
            className="mx-auto mb-8 w-full max-w-xs object-contain drop-shadow-lg sm:max-w-sm"
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
      <section id="meet-the-bots" className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-2 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Meet the Bots</h2>
          <SectionUnderline className="w-48" />
        </div>
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
          <div className="mb-4 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our History</h2>
            <SectionUnderline className="w-40" />
          </div>
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
        <div className="mb-2 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">How It Works</h2>
          <SectionUnderline className="w-44" />
        </div>
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
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        <span className="inline-flex flex-wrap justify-center gap-x-1">
          <span>© {new Date().getFullYear()} Bin Yahya Bot · Serve our bos,</span>
          <a
            href="https://linkedin.com/in/andre-pratama27"
            className="text-gray-400"
          >
            @andreepratama27
          </a>
        </span>
      </footer>
    </main>
  );
}
