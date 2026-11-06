import { useRef } from "react";
import Img from "@/components/ui/Img";
import useScrollProgress from "@/hooks/useScrollProgress";
import { cx } from "@/lib/cx";
import { story } from "@/data";

const pen = { vectorEffect: "non-scaling-stroke", strokeLinecap: "round", strokeLinejoin: "round" };
const shadow = "drop-shadow-[0_10px_14px_rgb(60_0_0/0.25)]";

// Pen lines in a 100 × 1000 box that stretches to the section (mobile: left rail, desktop: centre).
const mobile = {
  d: "M7 0 C11 80 3 160 8 240 S12 400 6 480 S3 640 8 720 S11 880 7 940 S7 975 7 988",
  arrow: "M3 962 L7 992 L11 962",
};
const desktop = {
  d: "M50 0 C58 70 42 130 52 200 S44 330 51 400 S58 520 49 590 S43 700 51 770 S57 880 50 940 S49 975 50 988",
  arrow: "M45 962 L50 992 L55 962",
};

/** One wobbly pen line, drawn twice with a small offset like a sketch. */
function Line({ d, arrow, className }) {
  return (
    <svg
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cx("story-line pointer-events-none absolute inset-0 h-full w-full fill-none stroke-brand", className)}
    >
      <path d={d} strokeWidth="3" {...pen} />
      <path d={d} strokeWidth="1.5" opacity=".4" transform="translate(0.5 3)" {...pen} />
      <path d={arrow} strokeWidth="3" {...pen} />
    </svg>
  );
}

/** Hand-underlined words. */
function Mark({ children }) {
  return (
    <span className="relative inline-block whitespace-nowrap text-brand">
      {children}
      <svg
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute -bottom-1 left-0 h-2 w-full fill-none stroke-brand"
      >
        <path d="M1 5 C20 1 38 7 58 3 S88 5 99 2" strokeWidth="2" {...pen} />
      </svg>
    </span>
  );
}

/** A line that draws itself down the page while you scroll; notes and collage pieces appear as it reaches them. */
export default function Story() {
  const ref = useRef(null);
  useScrollProgress(ref);

  return (
    <section id="story" className="relative overflow-x-clip px-6 py-16 md:px-[6vw] md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-hand text-[clamp(3rem,9vw,6.5rem)] leading-[0.9] text-brand">{story.title}</h2>

        <div ref={ref} className="story relative mt-10 h-[1300px] md:h-[1500px]">
          <Line className="md:hidden" {...mobile} />
          <Line className="hidden md:block" {...desktop} />

          {story.notes.map(({ at, side, text, mark }) => (
            <p
              key={at}
              style={{ top: `${at}%`, "--at": at / 100 - 0.04 }}
              className={cx(
                "reveal absolute left-[17%] right-0 font-hand text-[clamp(1.7rem,3.4vw,2.7rem)] leading-[1.05] md:max-w-[19ch]",
                side === "left" ? "md:left-auto md:right-[57%] md:text-right" : "md:left-[57%] md:right-auto",
              )}
            >
              {text} {mark && <Mark>{mark}</Mark>}
            </p>
          ))}

          {story.collage.map(({ image, side = "right", top = 0, width = 30, rotate = 0, at = 0 }, i) => (
            <Img
              key={`${image}-${i}`}
              src={image}
              className={cx("reveal pointer-events-none absolute hidden md:block", shadow)}
              style={{
                [side]: side === "left" ? "-6vw" : 0,
                top: `${top}%`,
                width: `${width}%`,
                rotate: `${rotate}deg`,
                "--at": at,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
