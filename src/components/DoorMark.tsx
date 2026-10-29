export function DoorMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path d="M7 26V5h18v21M10 26V8h12v18M5 26h22M13 11h6v6h-6zM13 19h6v5h-6z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="18" r="0.8" fill="currentColor" />
    </svg>
  );
}
