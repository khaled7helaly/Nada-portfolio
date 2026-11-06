import { useId } from "react";
import { cx } from "@/lib/cx";

/** Round ink stamp. Size, position and rotation come from className. */
export default function Stamp({
  ring = "PORTFOLIO 2025 • HCMC • PORTFOLIO 2025 • ",
  center = "APPROVED",
  className,
}) {
  const pathId = `stamp-ring-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={cx("text-stamp", className)}>
      <defs>
        <path id={pathId} d="M17,50 a33,33 0 1,1 66,0 a33,33 0 1,1 -66,0" />
      </defs>
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
      <text className="fill-current font-sans text-[6.6px] font-semibold">
        <textPath href={`#${pathId}`} xlinkHref={`#${pathId}`} textLength="204" lengthAdjust="spacing">
          {ring}
        </textPath>
      </text>
      <text
        x="50"
        y="53"
        textAnchor="middle"
        transform="rotate(-18 50 50)"
        className="fill-current font-sans text-[8px] font-bold tracking-[0.12em]"
      >
        {center}
      </text>
    </svg>
  );
}
