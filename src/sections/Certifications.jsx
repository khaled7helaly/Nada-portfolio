import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import CertCard from "@/components/cards/CertCard";
import { certs } from "@/data";

const control = "cursor-pointer outline-offset-4 hover:text-brand focus-visible:outline-2 focus-visible:outline-brand";

/** Full-bleed horizontal scroller: edge to edge, snaps card by card. */
export default function Certifications() {
  const track = useRef(null);

  const go = (direction) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="certifications" className="relative py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-6 md:px-[6vw]">
        <SectionTitle>{certs.title}</SectionTitle>
        <div className="flex items-center gap-6 text-[13px]">
          {certs.hint && (
            <p className="flex items-center gap-2 font-hand text-2xl text-brand">
              {certs.hint}
              <svg viewBox="0 0 60 20" aria-hidden="true" className="w-12 fill-none stroke-brand">
                <path
                  d="M2 12 C18 4 34 16 56 9 M48 3 L57 9 L49 16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          )}
          <button type="button" onClick={() => go(-1)} className={control}>
            ( prev )
          </button>
          <button type="button" onClick={() => go(1)} className={control}>
            ( next )
          </button>
        </div>
      </div>

      <div
        ref={track}
        tabIndex={0}
        role="region"
        aria-label={certs.title}
        className="mt-12 flex snap-x snap-mandatory scroll-pl-6 gap-10 overflow-x-auto px-6 pb-10 pt-6 outline-offset-[-4px] [scrollbar-color:var(--color-brand)_transparent] [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-brand md:scroll-pl-[6vw] md:px-[6vw]"
      >
        {certs.items.map(({ id, ...cert }, i) => (
          <CertCard
            key={id}
            {...cert}
            tilt={i % 2 ? 4 : -4}
            className="w-[min(78vw,320px)] shrink-0 snap-start"
          />
        ))}
        <div aria-hidden="true" className="w-px shrink-0 md:w-[6vw]" />
      </div>
    </section>
  );
}
