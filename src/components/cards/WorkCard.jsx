import { memo } from "react";
import PaperCard from "@/components/ui/PaperCard";
import Img from "@/components/ui/Img";
import { externalProps } from "@/lib/url";

/** One work. Used on the home page and on the Work page. */
function WorkCard({ title, categoryLabel, year, image, alt, href, tilt = -4 }) {
  const initial = Array.from(String(title ?? ""))[0] ?? "";

  return (
    <PaperCard hover tilt={tilt} sheetClassName="p-1.5 pb-4">
      <figure className="m-0 aspect-[4/5] overflow-hidden bg-brand/10">
        <Img
          src={image}
          alt={alt || title}
          className="block h-full w-full object-cover"
          fallback={
            <div
              aria-hidden="true"
              className="grid h-full place-items-center font-display text-[7rem] italic leading-none text-brand/60"
            >
              {initial}
            </div>
          }
        />
      </figure>

      <div className="mx-1.5 mt-3 flex items-baseline justify-between gap-4 border-t border-dashed border-ink/70 pt-3">
        <h3 className="font-serif text-2xl italic leading-tight text-brand">
          {href ? (
            <a
              href={href}
              {...externalProps(href)}
              className="outline-offset-4 after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-brand"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="shrink-0 text-[12.5px]">
          <span className="font-semibold">{categoryLabel}</span> <span className="italic">{year}</span>
        </p>
      </div>
    </PaperCard>
  );
}

export default memo(WorkCard);
