/**
 * Animated single-line schematic of a C&I solar system — PV array, inverter,
 * factory load, BESS and a grid tie. Lines draw themselves in, energy flows
 * along the cables, the sun breathes. Pure SVG + CSS (see globals.css
 * `.solar-lines`); respects prefers-reduced-motion.
 */
export function SolarSystemLines({ className = "" }: { className?: string }) {
  const ink = "#0e0e0e";
  const green = "var(--color-brand)";

  return (
    <svg
      viewBox="46 26 504 432"
      fill="none"
      aria-hidden="true"
      className={`solar-lines h-auto w-full max-w-[540px] ${className}`}
    >
      {/* ---- sun ---- */}
      <g className="sun" stroke={green} strokeWidth={2} strokeLinecap="round">
        <circle className="draw" cx="450" cy="84" r="22" style={{ animationDelay: "0s" }} />
        <path
          className="draw"
          style={{ animationDelay: "0.15s" }}
          d="M480 84h12M471 63l8.5-8.5M450 54V42M429 63l-8.5-8.5M420 84h-12M429 105l-8.5 8.5M450 114v12M471 105l8.5 8.5"
        />
      </g>

      {/* ---- sun → array beams ---- */}
      <g className="flow" stroke={green} strokeWidth={2} strokeLinecap="round" opacity={0.8}>
        <path d="M430 104 L150 214" />
        <path d="M430 104 L196 210" />
        <path d="M430 104 L236 214" />
      </g>

      {/* ---- PV array ---- */}
      <g stroke={ink} strokeOpacity={0.28} strokeWidth={1.5} strokeLinejoin="round">
        <path className="draw" style={{ animationDelay: "0.35s" }} d="M70 250 L250 205 L282 280 L100 326 Z" />
        <path className="draw" style={{ animationDelay: "0.5s" }} d="M115 239 L146 314M160 228 L191 303M205 216 L237 292" />
        <path className="draw" style={{ animationDelay: "0.55s" }} d="M80 275 L261 230M90 300 L271 255" />
        <path className="draw" style={{ animationDelay: "0.6s" }} d="M120 320v24M245 276v24M96 344h172" />
      </g>

      {/* ---- grid pylon ---- */}
      <g stroke={ink} strokeOpacity={0.28} strokeWidth={1.5} strokeLinecap="round">
        <path className="draw" style={{ animationDelay: "0.3s" }} d="M72 430 L88 338M116 430 L100 338" />
        <path className="draw" style={{ animationDelay: "0.4s" }} d="M72 430 L116 410M116 430 L72 410M78 398 L110 382M110 398 L78 382M84 366 L104 354M104 366 L84 354" />
        <path className="draw" style={{ animationDelay: "0.5s" }} d="M62 340h64M70 331h48" />
      </g>

      {/* ---- inverter ---- */}
      <g stroke={ink} strokeOpacity={0.3} strokeWidth={1.5}>
        <rect className="draw" style={{ animationDelay: "0.6s" }} x="296" y="344" width="66" height="46" rx="9" />
        <path
          className="draw"
          style={{ animationDelay: "0.7s" }}
          stroke={green}
          strokeOpacity={1}
          strokeLinecap="round"
          d="M309 368c5-9 9-9 14 0s9 9 14 0"
        />
      </g>

      {/* ---- battery / BESS ---- */}
      <g stroke={ink} strokeOpacity={0.3} strokeWidth={1.5} strokeLinecap="round">
        <rect className="draw" style={{ animationDelay: "0.78s" }} x="300" y="406" width="74" height="40" rx="8" />
        <path className="draw" style={{ animationDelay: "0.86s" }} d="M316 406v-8h8v8M350 406v-8h8v8" />
        <path className="draw" style={{ animationDelay: "0.92s" }} stroke={green} strokeOpacity={1} d="M320 430h10M325 425v10M348 428h10" />
      </g>

      {/* ---- factory load ---- */}
      <g stroke={ink} strokeOpacity={0.28} strokeWidth={1.5} strokeLinejoin="round">
        <path className="draw" style={{ animationDelay: "0.8s" }} d="M452 400V330h92v70" />
        <path className="draw" style={{ animationDelay: "0.86s" }} d="M452 330 L467 312 L482 330 L497 312 L512 330 L527 312 L542 330" />
        <path className="draw" style={{ animationDelay: "0.95s" }} d="M492 400v-22h16v22" />
      </g>

      {/* ---- cables (base) ---- */}
      <g stroke={ink} strokeOpacity={0.28} strokeWidth={1.5} strokeLinecap="round">
        <path className="draw" style={{ animationDelay: "0.5s" }} d="M190 308C220 320 250 332 296 344" />
        <path className="draw" style={{ animationDelay: "0.72s" }} d="M362 367h90" />
        <path className="draw" style={{ animationDelay: "0.82s" }} d="M329 390l8 16" />
        <path className="draw" style={{ animationDelay: "0.9s" }} d="M94 344C180 430 320 430 452 392" />
      </g>

      {/* ---- cables (energy flow) ---- */}
      <g className="flow" stroke={green} strokeWidth={2} strokeLinecap="round">
        <path d="M190 308C220 320 250 332 296 344" />
        <path d="M362 367h90" />
        <path d="M329 390l8 16" />
        <path d="M94 344C180 430 320 430 452 392" />
      </g>

      {/* ---- junction nodes ---- */}
      <g fill={green}>
        {[
          [190, 308],
          [296, 344],
          [362, 367],
          [452, 367],
          [337, 406],
          [94, 344],
          [452, 392],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} className="node" cx={cx} cy={cy} r="3" />
        ))}
      </g>
    </svg>
  );
}
