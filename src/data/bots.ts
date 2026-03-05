export interface Bot {
  name: string;
  color: "red" | "yellow" | "green";
  role: string;
  description: string;
  status: "online" | "offline";
  avatar: string;
}

export const bots: Bot[] = [
  {
    name: "Along",
    color: "red",
    role: "Scheduling & Reminders",
    description:
      "Along keeps your calendar in order — setting reminders, managing appointments, and making sure you never miss what matters.",
    status: "online",
    avatar: "/avatar/along-avatar.png",
  },
  {
    name: "Angah",
    color: "yellow",
    role: "Research & Information",
    description:
      "Angah digs deep to find answers — retrieving facts, summarising articles, and surfacing the information you need.",
    status: "offline",
    avatar: "/avatar/angah-avatar.png",
  },
  {
    name: "Alang",
    color: "green",
    role: "Task Management & Productivity",
    description:
      "Alang helps you stay on top of your work — organising tasks, tracking progress, and keeping projects moving forward.",
    status: "offline",
    avatar: "/avatar/alang-avatar.png",
  },
];

export const timeline = [
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

export const steps = [
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
