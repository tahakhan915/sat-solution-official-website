// A small chevron + dot mark echoing the S.A.T Solution logo, used
// as a recurring "signal node" motif in front of eyebrows and markers.
export default function Node({ className = '' }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`w-3.5 h-3.5 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 4 L11 10 L4 16"
        stroke="currentColor"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15.5" cy="10" r="2" fill="currentColor" />
    </svg>
  )
}
