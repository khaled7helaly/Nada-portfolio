import { memo } from "react";
import PaperCard from "@/components/ui/PaperCard";
import Img from "@/components/ui/Img";
import { externalProps } from "@/lib/url";

/** Paper card with a collage piece (stamp, textile, print...) laid on it. */
function CertCard({ title, issuer, year, image, rotate = 0, href, tilt = -4, className }) {
  return (
    <PaperCard hover tilt={tilt} className={className} sheetClassName="p-1.5 pb-4">
      <figure className="m-0 grid aspect-[4/5] place-items-center overflow-hidden bg-brand/5 p-6">
        <Img
          src={image}
          className="max-h-full max-w-full object-contain drop-shadow-[0_8px_10px_rgb(60_0_0/0.3)]"
          style={{ rotate: `${rotate}deg` }}
        />
      </figure>

      <div className="mx-1.5 mt-3 border-t border-dashed border-ink/70 pt-3">
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
        <p className="mt-1 text-[12.5px]">
          <span className="font-semibold">{issuer}</span> <span className="italic">{year}</span>
        </p>
      </div>
    </PaperCard>
  );
}

export default memo(CertCard);
