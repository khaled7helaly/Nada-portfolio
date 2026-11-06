import { memo } from "react";
import Img from "@/components/ui/Img";
import { dotItem } from "@/lib/styles";

/** One row of the services ledger: title (+ optional sticker), description, deliverables. */
function ServiceRow({ title, description, deliverables = [], image, rotate = 0 }) {
  return (
    <li className="-mx-4 grid gap-6 border-t border-dashed border-ink/70 px-4 py-8 transition-colors hover:bg-brand/[0.06] motion-reduce:transition-none md:grid-cols-[1.1fr_1.3fr_1fr] md:gap-10 md:py-10">
      <div className="flex items-start gap-4">
        <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] italic leading-none text-brand">{title}</h3>
        <Img
          src={image}
          className="w-14 shrink-0 drop-shadow-[0_6px_8px_rgb(60_0_0/0.3)]"
          style={{ rotate: `${rotate}deg` }}
        />
      </div>
      <p className="max-w-[46ch] text-[15px] leading-[1.6]">{description}</p>
      <ul className="grid content-start gap-1.5 text-[13px]">
        {deliverables.map((item) => (
          <li key={item} className={dotItem}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default memo(ServiceRow);
