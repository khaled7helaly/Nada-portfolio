import Img from "./Img";
import { cx } from "@/lib/cx";

/** Framed image. `className` sets the ratio, e.g. "aspect-[4/3]". Soft placeholder when there is no image. */
export default function Photo({ src, alt = "", className = "aspect-[225/155]", priority = false }) {
  return (
    <figure className={cx("m-0 overflow-hidden bg-[#b9c8bd]", className)}>
      <Img
        src={src}
        alt={alt}
        priority={priority}
        className="block h-full w-full object-cover"
        fallback={<div aria-hidden="true" className="photo-placeholder h-full w-full" />}
      />
    </figure>
  );
}
