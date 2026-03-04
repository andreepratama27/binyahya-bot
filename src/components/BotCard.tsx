interface BotCardProps {
  name: string;
  role: string;
  description: string;
  location: string;
  color: "red" | "yellow" | "green";
}

const colorMap = {
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700",
    avatar: "bg-red-500",
    initial: "text-white",
  },
  yellow: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    avatar: "bg-yellow-400",
    initial: "text-white",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    avatar: "bg-green-500",
    initial: "text-white",
  },
};

export function BotCard({ name, role, description, location, color }: BotCardProps) {
  const c = colorMap[color];
  return (
    <div className={`relative rounded-2xl border ${c.border} ${c.bg} p-6 shadow-sm`}>
      <span className={`absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-xs font-medium ${c.badge}`}>
        {location}
      </span>
      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${c.avatar}`}>
        <span className={`text-xl font-bold ${c.initial}`}>{name[0]}</span>
      </div>
      <h3 className="mb-1 text-lg font-bold text-gray-900">{name}</h3>
      <p className="mb-2 text-sm font-semibold text-gray-500">{role}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
