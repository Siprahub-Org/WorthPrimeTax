import { cn } from "@/lib/utils";

/**
 * Illustration for the CTA band: three frosted cards ("Plan Smarter", "Stay Compliant", "Grow
 * Confidently") above a compass on a winding road. Drawn for a navy background, so every colour
 * is white at a different opacity.
 */
export function CtaIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 470"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label="Illustration of planning, compliance and growth cards above a compass on a winding road"
    >
      <defs>
        <linearGradient id="cta-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.28" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="cta-road" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="white" stopOpacity="0.05" />
          <stop offset="1" stopColor="white" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="cta-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="white" stopOpacity="0.45" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Winding road */}
      <path
        d="M0 470 L0 420 C 120 410, 190 340, 290 380 C 380 415, 470 400, 560 300 L 560 470 Z"
        fill="url(#cta-road)"
      />
      <path
        d="M20 450 C 130 440, 200 365, 290 395 C 390 430, 480 410, 560 330"
        fill="none"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      <circle cx="205" cy="372" r="7" fill="white" fillOpacity="0.9" />
      <circle cx="325" cy="404" r="6" fill="white" fillOpacity="0.8" />
      <circle cx="470" cy="395" r="9" fill="white" fillOpacity="0.55" />

      {/* Back cards */}
      <g fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2">
        <rect x="150" y="150" width="130" height="160" rx="18" transform="rotate(-4 215 230)" />
        <rect x="330" y="96" width="150" height="170" rx="18" transform="rotate(5 405 180)" />
        <rect x="60" y="230" width="130" height="150" rx="18" />
      </g>

      {/* Plan Smarter */}
      <g transform="rotate(-6 100 250)">
        <rect
          x="40"
          y="170"
          width="170"
          height="170"
          rx="18"
          fill="url(#cta-card)"
          stroke="white"
          strokeOpacity="0.4"
        />
        <g fill="white" fillOpacity="0.9">
          <rect x="62" y="206" width="6" height="26" rx="2" />
          <rect x="74" y="194" width="6" height="38" rx="2" />
          <rect x="86" y="200" width="6" height="32" rx="2" />
        </g>
        <text x="104" y="214" fill="white" fontSize="19" fontWeight="600" className="font-sans">
          Plan
        </text>
        <text x="104" y="236" fill="white" fontSize="19" fontWeight="600" className="font-sans">
          Smarter
        </text>
        <rect x="62" y="262" width="100" height="6" rx="3" fill="white" fillOpacity="0.35" />
        <rect x="62" y="280" width="82" height="6" rx="3" fill="white" fillOpacity="0.25" />
        <rect x="62" y="298" width="92" height="6" rx="3" fill="white" fillOpacity="0.25" />
      </g>

      {/* Stay Compliant */}
      <g transform="rotate(-3 290 130)">
        <rect
          x="210"
          y="40"
          width="180"
          height="180"
          rx="18"
          fill="url(#cta-card)"
          stroke="white"
          strokeOpacity="0.4"
        />
        <g fill="none" stroke="white" strokeOpacity="0.9" strokeWidth="2.2" strokeLinejoin="round">
          <path d="M236 78 h22 l10 10 v32 h-32 z" />
          <path d="M240 98 h20 M240 108 h20" strokeLinecap="round" />
        </g>
        <text x="282" y="94" fill="white" fontSize="19" fontWeight="600" className="font-sans">
          Stay
        </text>
        <text x="282" y="116" fill="white" fontSize="19" fontWeight="600" className="font-sans">
          Compliant
        </text>
        <rect x="240" y="146" width="110" height="6" rx="3" fill="white" fillOpacity="0.35" />
        <rect x="240" y="164" width="92" height="6" rx="3" fill="white" fillOpacity="0.25" />
      </g>

      {/* Grow Confidently */}
      <g transform="rotate(6 440 230)">
        <rect
          x="355"
          y="150"
          width="170"
          height="170"
          rx="18"
          fill="url(#cta-card)"
          stroke="white"
          strokeOpacity="0.4"
        />
        <g fill="none" stroke="white" strokeOpacity="0.9" strokeWidth="2.2">
          <circle cx="388" cy="190" r="6" />
          <circle cx="408" cy="190" r="6" />
          <path d="M376 214 c0 -10 6 -14 12 -14 s12 4 12 14 M396 214 c0 -10 6 -14 12 -14 s12 4 12 14" />
        </g>
        <text x="430" y="196" fill="white" fontSize="19" fontWeight="600" className="font-sans">
          Grow
        </text>
        <text x="430" y="218" fill="white" fontSize="19" fontWeight="600" className="font-sans">
          Confidently
        </text>
        <rect x="378" y="250" width="100" height="6" rx="3" fill="white" fillOpacity="0.35" />
        <rect x="378" y="268" width="82" height="6" rx="3" fill="white" fillOpacity="0.25" />
      </g>

      {/* Compass */}
      <circle cx="300" cy="300" r="110" fill="url(#cta-glow)" />
      <circle
        cx="300"
        cy="300"
        r="78"
        fill="white"
        fillOpacity="0.08"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="3"
      />
      <circle
        cx="300"
        cy="300"
        r="62"
        fill="none"
        stroke="white"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      <g stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round">
        <path d="M300 226 v10 M300 364 v10 M226 300 h10 M364 300 h10" />
      </g>
      <path d="M300 238 L312 300 L300 362 L288 300 Z" fill="white" fillOpacity="0.55" />
      <path d="M238 300 L300 288 L362 300 L300 312 Z" fill="white" fillOpacity="0.35" />
      <path
        d="M340 258 L308 296 L300 300 L292 304 L260 342 L292 296 L300 292 Z"
        fill="white"
        fillOpacity="0.9"
      />
      <circle cx="300" cy="300" r="7" fill="white" />
    </svg>
  );
}
