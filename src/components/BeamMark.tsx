/** I-section (universal beam) mark used as the logo. */
export function BeamMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M3 3h18v4h-7v10h7v4H3v-4h7V7H3z" fill="currentColor" />
    </svg>
  )
}
