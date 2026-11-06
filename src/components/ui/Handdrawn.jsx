// نقوش بخط إيد: كلها SVG بتاخد لون الـ brand من currentColor (حط text-brand على الكلاس)
const ink = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const rough = { filter: "url(#hand-drawn)" };

// حطه مرة واحدة بس في الصفحة: بيهز حواف الخطوط شوية فتبان مرسومة بالقلم
export function HandDrawnFilter() {
  return (
    <>
      <style>{`
        @keyframes doodle-sway { 0%,100% { transform: rotate(-3deg) } 50% { transform: rotate(3deg) } }
        .doodle-sway { transform-origin: 60px 0; animation: doodle-sway 7s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) { .doodle-sway { animation: none } }
      `}</style>
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="hand-drawn">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="3.5" />
        </filter>
      </svg>
    </>
  );
}

function Doodle({ viewBox, className, children }) {
  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true" style={rough} {...ink}>
      {children}
    </svg>
  );
}

function Leaf({ x, y, r = 0, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M0 0Q8-18 26-20Q22 0 0 0Z" />
      <path d="M2-2 18-13" strokeWidth="1.2" />
    </g>
  );
}

function Flower({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy="-11" rx="6" ry="11" transform={`rotate(${a})`} />
      ))}
      <circle r="3.5" />
    </g>
  );
}

/** لمبة معلقة شكلها ميجافون: الإضاءة والصوت في نفس الرسمة (انتيريور + ماركتنج) */
export function Lamp({ className }) {
  return (
    <Doodle viewBox="0 0 120 290" className={className}>
      <g className="doodle-sway">
        <path d="M60 0V104" />
        <path d="M52 104h16l-2 12H54z" />
        <path d="M54 116 28 196h64L66 116" />
        <path d="M79 156c24-2 28 18 11 30" />
        <path d="M44 196a16 16 0 0 0 32 0" />
        <path d="M36 222q24 14 48 0M24 240q36 22 72 0" />
        <path d="M30 268c-5-7-15 0-8 8l8 8 8-8c7-8-3-15-8-8z" />
        <path d="M92 262c-4-6-12 0-6 6l6 6 6-6c6-6-2-12-6-6z" />
      </g>
    </Doodle>
  );
}

/** مسقط أفقي لأوضة، وفوقه خط نمو طالع (الأوضة بتكبر = البراند بيكبر) */
export function FloorPlan({ className }) {
  return (
    <Doodle viewBox="0 0 280 210" className={className}>
      <path d="M10 10H110M170 10H270V180H116M64 180H10V10" strokeWidth="4" />
      <path d="M110 10H170M110 16H170M140 10V16" strokeWidth="1.6" />
      <path d="M64 180V128A52 52 0 0 1 116 180" strokeWidth="1.6" />
      <path d="M26 34h84v34H26zM26 34q0-10 10-10h64q10 0 10 10" />
      <path d="M30 92h100v66H30z" strokeDasharray="5 7" strokeWidth="1.6" />
      <circle cx="80" cy="125" r="14" />
      <circle cx="250" cy="32" r="12" />
      <path d="M250 32l-9-8M250 32l10-6M250 32l-3 11" strokeWidth="1.6" />
      <path d="M150 160l22-24 16 12 28-38 24-24M226 86h14v14" strokeWidth="3" />
      <path d="M10 198H110M170 198H270M10 192v12M270 192v12" strokeWidth="1.4" />
      <text x="140" y="203" textAnchor="middle" fontSize="15" fill="currentColor" stroke="none" className="font-serif italic">
        4.2 m
      </text>
    </Doodle>
  );
}

/** عينات دهان بتطلع بالتدريج: شكلها شريط ألوان وكمان رسم بياني نمو */
export function Swatches({ className }) {
  return (
    <Doodle viewBox="0 0 150 130" className={className}>
      {[34, 52, 70, 90, 112].map((h, i) => (
        <g key={h}>
          <rect x={8 + i * 28} y={122 - h} width="22" height={h} rx="2" fill="currentColor" fillOpacity={0.12 + i * 0.16} />
          <circle cx={19 + i * 28} cy={131 - h} r="3" />
        </g>
      ))}
    </Doodle>
  );
}

/** تحت الكلمة بخط متموج بالإيد */
export function Squiggle({ className }) {
  return (
    <svg viewBox="0 0 100 8" preserveAspectRatio="none" className={className} aria-hidden="true" style={rough} {...ink} strokeWidth="1.6">
      <path d="M1 5Q13 0 25 5T50 5 75 5 99 5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** غصن ورد نازل بزاوية من أول الصفحة */
export function Vine({ className }) {
  return (
    <Doodle viewBox="0 0 200 390" className={className}>
      <path d="M8 0C70 50 10 120 70 180S130 300 188 372" />
      <path d="M44 134Q70 140 92 120M130 272Q150 275 160 256" />
      <Leaf x={35} y={41} />
      <Leaf x={40} y={86} r={180} />
      <Leaf x={44} y={134} r={12} />
      <Leaf x={70} y={180} r={190} />
      <Leaf x={105} y={225} r={-20} />
      <Leaf x={130} y={272} r={165} />
      <Leaf x={153} y={320} r={-10} s={1.1} />
      <Flower x={92} y={120} />
      <Flower x={160} y={256} s={0.85} />
      <Flower x={188} y={372} s={0.6} />
    </Doodle>
  );
}

/** مسمار وحبل تعليق البرواز */
export function Cord({ className }) {
  return (
    <Doodle viewBox="0 0 20 48" className={className}>
      <circle cx="10" cy="5" r="3.5" fill="currentColor" />
      <path d="M10 9C6 20 14 32 10 48" />
    </Doodle>
  );
}