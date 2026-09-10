/**
 * Animated single-line schematic of a C&I solar system — PV array with
 * mounting rails, combiner, string inverter, utility meter, factory load,
 * BESS and a lattice grid tie. Lines self-draw on entry, energy flows
 * along the cables, the sun breathes. Pure SVG + CSS (see globals.css
 * `.solar-lines`); respects prefers-reduced-motion.
 */
export function SolarSystemLines({ className = "" }: { className?: string }) {
  const ink = "#0e0e0e";
  const green = "var(--color-brand)";

  return (
    <svg
      viewBox="44 24 508 452"
      fill="none"
      aria-hidden="true"
      className={`solar-lines h-auto w-full max-w-[560px] ${className}`}
    >
      {/* ---- ground baseline ---- */}
      <path
        className="draw"
        style={{ animationDelay: "0.1s" }}
        stroke={ink}
        strokeOpacity={0.16}
        strokeWidth={1.5}
        strokeDasharray="2 7"
        strokeLinecap="round"
        d="M70 456h476"
      />

      {/* ---- sun ---- */}
      <g className="sun" stroke={green} strokeWidth={2} strokeLinecap="round">
        <circle className="draw" cx="450" cy="86" r="22" style={{ animationDelay: "0s" }} />
        <path
          className="draw"
          style={{ animationDelay: "0.12s" }}
          d="M480 86h12M476 101l10-6M465 112l6-10M450 116v12M435 112l-6-10M424 101l-10-6M420 86h-12M424 71l-10 6M435 60l-6 10M450 56V44M465 60l6 10M476 71l10 6"
        />
        <circle
          className="flow"
          cx="450"
          cy="86"
          r="31"
          stroke={green}
          strokeOpacity={0.4}
          strokeWidth={1.5}
        />
      </g>

      {/* ---- sun → array beams ---- */}
      <g className="flow" stroke={green} strokeWidth={2} strokeLinecap="round" opacity={0.8}>
        <path d="M428 106 L150 236" />
        <path d="M428 106 L200 224" />
        <path d="M428 106 L246 214" />
      </g>

      {/* ---- PV array ---- */}
      <g stroke={ink} strokeOpacity={0.28} strokeWidth={1.5} strokeLinejoin="round">
        <path className="draw" style={{ animationDelay: "0.32s" }} d="M72 250 L258 203 L292 286 L106 333 Z" />
        <path
          className="draw"
          style={{ animationDelay: "0.46s" }}
          d="M103 242 L137 325M134 234 L168 318M165 226 L199 310M196 219 L230 302M227 211 L261 294"
        />
        <path
          className="draw"
          style={{ animationDelay: "0.5s" }}
          d="M83 278 L269 231M95 305 L281 258"
        />
        {/* mounting rails + legs */}
        <path className="draw" style={{ animationDelay: "0.56s" }} d="M112 344 L286 289M120 357 L294 302" />
        <path className="draw" style={{ animationDelay: "0.6s" }} d="M150 350v106M255 300v156" />
        <path className="draw" style={{ animationDelay: "0.64s" }} d="M150 456 L252 322" />
        {/* rear junction box */}
        <path className="draw" style={{ animationDelay: "0.66s" }} d="M242 244h16v11h-16z" />
      </g>

      {/* ---- grid pylon ---- */}
      <g stroke={ink} strokeOpacity={0.28} strokeWidth={1.5} strokeLinecap="round">
        <path className="draw" style={{ animationDelay: "0.28s" }} d="M74 456 L92 336M118 456 L100 336" />
        <path
          className="draw"
          style={{ animationDelay: "0.38s" }}
          d="M74 452 L118 428M118 452 L74 428M80 410 L112 392M112 410 L80 392M85 374 L107 360M107 374 L85 360"
        />
        <path className="draw" style={{ animationDelay: "0.44s" }} d="M78 428h36M83 392h26M87 360h18" />
        <path className="draw" style={{ animationDelay: "0.5s" }} d="M58 338h74M64 330h58" />
        {/* insulator strings */}
        <path className="draw" style={{ animationDelay: "0.54s" }} d="M76 338v5M76 345v4M76 351v4M116 338v5M116 345v4M116 351v4" />
      </g>

      {/* ---- combiner box ---- */}
      <g stroke={ink} strokeOpacity={0.32} strokeWidth={1.5}>
        <path className="draw" style={{ animationDelay: "0.5s" }} d="M250 350h26v20h-26z" />
        <path className="draw" style={{ animationDelay: "0.56s" }} d="M256 356h14M256 360h14M256 364h14" />
      </g>

      {/* ---- string inverter ---- */}
      <g stroke={ink} strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round">
        <rect className="draw" style={{ animationDelay: "0.6s" }} x="330" y="338" width="72" height="54" rx="10" />
        <path
          className="draw"
          style={{ animationDelay: "0.7s" }}
          stroke={green}
          strokeOpacity={1}
          d="M344 366c6-11 11-11 17 0s11 11 17 0"
        />
        {/* heat-sink fins */}
        <path className="draw" style={{ animationDelay: "0.74s" }} d="M406 348v9M406 360v9M406 372v9M406 384v9" />
        {/* wall brackets + terminals */}
        <path className="draw" style={{ animationDelay: "0.76s" }} d="M330 346h-8M330 386h-8M330 350h-5M402 350h5" />
        <circle className="node" cx="340" cy="348" r="2.5" fill={green} />
      </g>

      {/* ---- utility meter ---- */}
      <g stroke={ink} strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round">
        <circle className="draw" style={{ animationDelay: "0.78s" }} cx="426" cy="366" r="12" />
        <path className="draw" style={{ animationDelay: "0.84s" }} stroke={green} strokeOpacity={1} d="M426 366l6-6" />
        <path className="draw" style={{ animationDelay: "0.84s" }} d="M426 354v-3" />
      </g>

      {/* ---- battery / BESS ---- */}
      <g stroke={ink} strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round">
        <rect className="draw" style={{ animationDelay: "0.8s" }} x="300" y="406" width="78" height="42" rx="8" />
        <path className="draw" style={{ animationDelay: "0.86s" }} d="M316 406v-8h8v8M362 406v-8h8v8" />
        <path className="draw" style={{ animationDelay: "0.9s" }} d="M321 410v34M340 410v34M359 410v34" />
        <path className="draw" style={{ animationDelay: "0.94s" }} d="M340 434h30v8h-30zM350 434v8M360 434v8" />
        <path className="draw" style={{ animationDelay: "0.98s" }} stroke={green} strokeOpacity={1} d="M310 428h10M315 423v10M356 428h10" />
      </g>

      {/* ---- factory load ---- */}
      <g stroke={ink} strokeOpacity={0.28} strokeWidth={1.5} strokeLinejoin="round">
        <path className="draw" style={{ animationDelay: "0.8s" }} d="M452 400V322h92v78" />
        <path className="draw" style={{ animationDelay: "0.86s" }} d="M452 322 L467 304 L482 322 L497 304 L512 322 L527 304 L542 322" />
        <path className="draw" style={{ animationDelay: "0.92s" }} d="M462 344h12v14h-12zM490 344h12v14h-12zM518 344h12v14h-12z" />
        <path className="draw" style={{ animationDelay: "0.96s" }} d="M496 400v-22h16v22" />
        <path className="draw" style={{ animationDelay: "0.98s" }} d="M470 304v-9h9" />
        <path className="draw" style={{ animationDelay: "1s" }} strokeOpacity={0.16} d="M446 400h104" />
      </g>

      {/* ---- cables (base) ---- */}
      <g stroke={ink} strokeOpacity={0.3} strokeWidth={1.5} strokeLinecap="round">
        <path className="draw" style={{ animationDelay: "0.5s" }} d="M244 250C250 300 256 335 263 350" />
        <path className="draw" style={{ animationDelay: "0.66s" }} d="M276 362C296 372 312 368 330 362" />
        <path className="draw" style={{ animationDelay: "0.78s" }} d="M402 366h12" />
        <path className="draw" style={{ animationDelay: "0.82s" }} d="M438 366h14" />
        <path className="draw" style={{ animationDelay: "0.84s" }} d="M352 392 L342 406" />
        <path className="draw" style={{ animationDelay: "0.9s" }} d="M96 342C200 472 340 472 452 382" />
      </g>

      {/* ---- cables (energy flow) ---- */}
      <g className="flow" stroke={green} strokeWidth={2} strokeLinecap="round">
        <path d="M244 250C250 300 256 335 263 350" />
        <path d="M276 362C296 372 312 368 330 362" />
        <path d="M402 366h12" />
        <path d="M438 366h14" />
        <path d="M352 392 L342 406" />
        <path d="M96 342C200 472 340 472 452 382" />
      </g>

      {/* ---- junction nodes ---- */}
      <g fill={green}>
        {[
          [244, 250],
          [263, 350],
          [330, 362],
          [402, 366],
          [426, 366],
          [452, 366],
          [342, 406],
          [96, 342],
          [452, 382],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} className="node" cx={cx} cy={cy} r="3" />
        ))}
      </g>
    </svg>
  );
}
