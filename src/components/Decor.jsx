export const Ball = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <circle cx="50" cy="50" r="47" fill="#fff" stroke="#1D2321" strokeWidth="3" />
    <polygon points="50,34 64,44 59,61 41,61 36,44" fill="#1D2321" />
    <g stroke="#1D2321" strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M50 34V5M64 44l28-9M59 61l17 24M41 61L24 85M36 44L8 35" />
    </g>
    <g fill="#1D2321">
      <path d="M50 3l12 7-6 9H44l-6-9z" />
      <path d="M93 36l-2 14-11 2-3-11z" />
      <path d="M7 36l2 14 11 2 3-11z" />
    </g>
  </svg>
);

export const Pitch = () => (
  <svg
    viewBox="0 0 1200 420"
    preserveAspectRatio="xMidYMax slice"
    className="absolute inset-x-0 bottom-0 h-[55%] w-full opacity-[0.14]"
    style={{
      WebkitMaskImage: "linear-gradient(to top, #000 35%, transparent)",
      maskImage: "linear-gradient(to top, #000 35%, transparent)",
    }}
    aria-hidden="true"
  >
    <g fill="none" stroke="#fff" strokeWidth="3">
      <rect x="40" y="60" width="1120" height="400" />
      <path d="M600 60v400" />
      <circle cx="600" cy="260" r="90" />
      <circle cx="600" cy="260" r="5" fill="#fff" />
      <rect x="40" y="170" width="170" height="180" />
      <rect x="990" y="170" width="170" height="180" />
      <rect x="40" y="215" width="70" height="90" />
      <rect x="1090" y="215" width="70" height="90" />
    </g>
  </svg>
);

export const Rings = ({ className = "" }) => (
  <svg viewBox="0 0 600 600" className={className} aria-hidden="true">
    <g fill="none" stroke="#fff" strokeWidth="2">
      <circle cx="300" cy="300" r="70" />
      <circle cx="300" cy="300" r="150" />
      <circle cx="300" cy="300" r="230" />
      <circle cx="300" cy="300" r="290" />
      <path d="M0 300h600" />
    </g>
    <circle cx="300" cy="300" r="6" fill="#fff" />
  </svg>
);

export const DotGrid = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10"
    style={{
      backgroundImage: "radial-gradient(rgba(50,16,109,0.12) 1px, transparent 1px)",
      backgroundSize: "26px 26px",
      WebkitMaskImage: "radial-gradient(75% 75% at 50% 40%, #000, transparent)",
      maskImage: "radial-gradient(75% 75% at 50% 40%, #000, transparent)",
    }}
  />
);

export const FloatStyle = () => (
  <style>{`
    @keyframes d2o-float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-14px) rotate(12deg); }
    }
    .d2o-float { animation: d2o-float 5s ease-in-out infinite; }
    @media (prefers-reduced-motion: reduce) { .d2o-float { animation: none; } }
  `}</style>
);
