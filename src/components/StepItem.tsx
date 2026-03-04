interface StepItemProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function StepItem({ step, title, description, isLast = false }: StepItemProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Dashed connector — hidden on mobile, hidden for last item */}
      {!isLast && (
        <span className="absolute left-[calc(50%+28px)] top-6 hidden w-[calc(100%-56px)] -translate-y-1/2 border-t-2 border-dashed border-sky-300 lg:block" />
      )}
      <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-lg font-bold text-white shadow-md">
        {step}
      </div>
      <h4 className="mb-1 text-sm font-semibold text-gray-900 sm:text-base">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
