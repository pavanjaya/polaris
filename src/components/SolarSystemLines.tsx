/**
 * Flat illustration of the Polaris story — engineer, finance, operate.
 * A tilted PV array, a factory load, an investment-grade chart and a
 * spinning sun, in the same chunky style as the "Our solutions" icons.
 * Gentle CSS motion (globals.css `.solar-scene`); reduced-motion safe.
 */
const C = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

export function SolarSystemLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 380"
      fill="none"
      aria-hidden="true"
      className={`solar-scene h-auto w-full max-w-[460px] ${className}`}
    >
      {/* sun */}
      <g>
        <g className="scene-sun" style={{ transformOrigin: "312px 74px" }}>
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            const x1 = 312 + Math.cos(a) * 34;
            const y1 = 74 + Math.sin(a) * 34;
            const x2 = 312 + Math.cos(a) * 50;
            const y2 = 74 + Math.sin(a) * 50;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={C.green}
                strokeWidth="9"
                strokeLinecap="round"
              />
            );
          })}
        </g>
        <circle className="scene-core" cx="312" cy="74" r="26" fill={C.ink} style={{ transformOrigin: "312px 74px" }} />
        <circle cx="304" cy="66" r="6" fill="#fff" opacity="0.9" />
      </g>

      {/* PV array */}
      <g>
        <path d="M108 262 V318 M228 218 V300" stroke={C.dark} strokeWidth="11" strokeLinecap="round" />
        <path d="M60 202 L214 150 L256 214 L102 266 Z" fill={C.green} />
        <path
          d="M98 189 L138 253 M136 176 L176 240 M174 163 L214 227"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M74 224 L228 172 M88 246 L242 194"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>

      {/* connector */}
      <path d="M250 214 L286 222" stroke={C.dark} strokeWidth="8" strokeLinecap="round" />

      {/* factory load */}
      <g>
        <rect x="286" y="206" width="96" height="86" rx="12" fill={C.pale} />
        <path
          d="M286 206 L304 186 L322 206 L340 186 L358 206 L376 186 L382 194 L382 206 Z"
          fill={C.dark}
        />
        <rect x="300" y="224" width="18" height="18" rx="3" fill="#fff" />
        <rect x="330" y="224" width="18" height="18" rx="3" fill="#fff" />
        <rect x="360" y="224" width="14" height="18" rx="3" fill="#fff" />
        <rect x="322" y="260" width="20" height="32" rx="3" fill={C.dark} />
      </g>

      {/* finance card */}
      <g>
        <rect x="44" y="272" width="164" height="88" rx="14" fill="#fff" />
        <rect x="44" y="272" width="164" height="88" rx="14" stroke={C.pale} strokeWidth="4" />
        <rect className="scene-bar" x="64" y="316" width="16" height="26" rx="3" fill={C.green} style={{ transformOrigin: "72px 342px", animationDelay: "0s" }} />
        <rect className="scene-bar" x="90" y="304" width="16" height="38" rx="3" fill={C.green} style={{ transformOrigin: "98px 342px", animationDelay: "0.25s" }} />
        <rect className="scene-bar" x="116" y="322" width="16" height="20" rx="3" fill={C.green} style={{ transformOrigin: "124px 342px", animationDelay: "0.5s" }} />
        <rect className="scene-bar" x="142" y="296" width="16" height="46" rx="3" fill={C.green} style={{ transformOrigin: "150px 342px", animationDelay: "0.75s" }} />
        <path
          d="M64 308 L98 292 L124 300 L172 282"
          stroke={C.ink}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* floating accents */}
      <circle className="scene-float" cx="196" cy="96" r="7" fill={C.green} style={{ animationDelay: "0s" }} />
      <circle className="scene-float" cx="356" cy="320" r="6" fill={C.green} opacity="0.8" style={{ animationDelay: "1.4s" }} />
      <circle className="scene-float" cx="40" cy="176" r="5" fill={C.dark} opacity="0.5" style={{ animationDelay: "2.6s" }} />
    </svg>
  );
}
