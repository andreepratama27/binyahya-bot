interface BotCardProps {
  name: string;
  role: string;
  description: string;
  status: "online" | "offline";
  avatar: string;
  color: "red" | "yellow" | "green";
}

const colorMap = {
  red: { bg: "bg-red-50", border: "border-red-200", ring: "ring-red-200" },
  yellow: { bg: "bg-yellow-50", border: "border-yellow-200", ring: "ring-yellow-200" },
  green: { bg: "bg-green-50", border: "border-green-200", ring: "ring-green-200" },
};

export function BotCard({ name, role, description, status, avatar, color }: BotCardProps) {
  const c = colorMap[color];
  const isOnline = status === "online";

  return (
    <div className={`relative rounded-2xl border ${c.border} ${c.bg} p-4 shadow-sm sm:p-6`}>
      <span className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${isOnline ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}>
        <span className="relative flex h-1.5 w-1.5">
          {isOnline && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          )}
          <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"}`} />
        </span>
        {isOnline ? "Online" : "Offline"}
      </span>

      <img
        src={avatar}
        alt={name}
        loading="lazy"
        width={64}
        height={64}
        className={`mb-4 h-16 w-16 rounded-full object-cover ring-2 ${c.ring}`}
      />
      <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg">{name}</h3>
      <p className="mb-2 text-sm font-semibold text-gray-500">{role}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
