interface TimelineItemProps {
  date: string;
  event: string;
  isLast?: boolean;
}

export function TimelineItem({
  date,
  event,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-sky-500 ring-4 ring-sky-100" />
        {!isLast && <div className="mt-1 w-0.5 flex-1 bg-sky-200" />}
      </div>
      <div className="pb-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
          {date}
        </p>
        <p className="mt-1 text-sm text-gray-700">{event}</p>
      </div>
    </div>
  );
}
