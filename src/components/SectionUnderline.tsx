interface SectionUnderlineProps {
  className?: string;
}

export function SectionUnderline({
  className = "w-48",
}: SectionUnderlineProps) {
  return (
    <svg
      aria-hidden="true"
      className={`mt-1 ${className}`}
      height="12"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
    >
      <path
        d="M2,6 C20,1 55,0 100,3 C145,6 175,1 198,5 C198,8 175,11 130,9 C85,7 40,10 2,8 Z"
        fill="#0ea5e9"
        opacity="0.9"
      />
      <path
        d="M10,7 C40,3 80,2 120,5 C155,7 180,4 195,6 C190,9 160,11 120,10 C80,9 35,11 8,9 Z"
        fill="#bae6fd"
        opacity="0.6"
      />
    </svg>
  );
}
