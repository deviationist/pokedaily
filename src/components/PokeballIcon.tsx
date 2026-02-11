export default function PokeballIcon({ className, active }: { className?: string, active?: boolean }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill={active ? "currentColor" : "white"} stroke="currentColor" strokeWidth="2" />
      <path d="M12 2C17.5228 2 22 6.47715 22 12H2C2 6.47715 6.47715 2 12 2Z" fill={active ? "currentColor" : "transparent"} className={active ? "opacity-20" : ""} />
    </svg>
  );
};