// Animated, line-style icons for the Services grid. Each icon carries a
// small looping motion tied to what that service actually does (a
// blinking cursor for code, an orbiting node for the web, a rising
// upload for cloud, etc.), echoing the site's circuit / signal motif
// instead of a generic hover bounce.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function CodeIcon({ className = '' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M8.5 6 3.5 12l5 6" />
      <path d="M15.5 6l5 6-5 6" />
      <rect x="11.3" y="9" width="1.4" height="6" rx="0.7" fill="currentColor" stroke="none" className="animate-blink" />
    </svg>
  )
}

export function GlobeIcon({ className = '' }) {
  return (
    <svg {...base} strokeWidth={1.5} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" />
      <ellipse cx="12" cy="12" rx="3.6" ry="8.4" />
      <path d="M3.8 12h16.4" />
      <g className="origin-[12px_12px] animate-spin-slow">
        <circle cx="12" cy="3.5" r="1.3" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

export function PhoneIcon({ className = '' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="7" y="2.4" width="10" height="19.2" rx="2.4" />
      <line x1="10.4" y1="18.3" x2="13.6" y2="18.3" />
      <circle cx="16.3" cy="5.6" r="3" className="fill-circuit/40 animate-ping" stroke="none" />
      <circle cx="16.3" cy="5.6" r="1.6" className="fill-circuit" stroke="none" />
    </svg>
  )
}

export function CloudIcon({ className = '' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M7 17.5a4.2 4.2 0 0 1-.6-8.36 5.4 5.4 0 0 1 10.4-1.7 3.9 3.9 0 0 1-.3 10.06H7Z" />
      <g className="animate-upload">
        <path d="M12 14.6V9.4" />
        <path d="M9.6 11.4 12 9l2.4 2.4" />
      </g>
    </svg>
  )
}

export function CompassIcon({ className = '' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.6" />
      <g className="origin-[12px_12px] animate-compassSwing">
        <path d="M14.6 9.4 12.9 13l-3.6 1.6 1.7-3.6Z" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

export function ZapIcon({ className = '' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path
        d="M12.8 2.5 5 13.4h5.4L10.2 21.5 19 10.2h-5.6l1.4-7.7Z"
        className="origin-center animate-zapFlicker"
      />
    </svg>
  )
}

export function VideoIcon({ className = '' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="3" />
      <circle cx="12" cy="12" r="4" className="origin-center opacity-40 animate-ripple" />
      <path d="M10.6 9.6 14.4 12l-3.8 2.4Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ShareIcon({ className = '' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="18" cy="5" r="2.3" />
      <circle cx="6" cy="12" r="2.3" />
      <circle cx="18" cy="19" r="2.3" />
      <path d="M8.1 10.9 15.9 6.3" />
      <path d="M8.1 13.1 15.9 17.7" />
      <path
        d="M8.1 10.9 15.9 6.3"
        strokeDasharray="2.2 3.2"
        className="text-circuit animate-travel"
      />
    </svg>
  )
}

export function LayersIcon({ className = '' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3 21 8l-9 5-9-5Z" className="animate-layerShift" style={{ animationDelay: '0ms' }} />
      <path d="M3 12l9 5 9-5" className="animate-layerShift" style={{ animationDelay: '160ms' }} />
      <path d="M3 16l9 5 9-5" className="animate-layerShift" style={{ animationDelay: '320ms' }} />
    </svg>
  )
}

export const serviceIcons = {
  code: CodeIcon,
  globe: GlobeIcon,
  phone: PhoneIcon,
  cloud: CloudIcon,
  consulting: CompassIcon,
  zap: ZapIcon,
  video: VideoIcon,
  share: ShareIcon,
  layers: LayersIcon,
}
