interface StepItemProps {
  step: number;
  title: string;
  description: string;
}

export function StepItem({ step, title, description }: StepItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-lg font-bold text-white">
        {step}
      </div>
      <h4 className="mb-1 font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
