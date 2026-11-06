import { memo } from "react";
import PaperCard from "@/components/ui/PaperCard";
import WaxSeal from "@/components/ui/WaxSeal";
import Stamp from "@/components/ui/Stamp";
import Photo from "@/components/ui/Photo";
import { dotItem } from "@/lib/styles";

function ProfileCard({
  name = "",
  greeting,
  photo,
  photoAlt,
  facts = [],
  languagesTitle,
  languages = [],
  seal,
  stamp,
}) {
  return (
    <aside aria-label={name ? `About ${name}` : "About"} className="w-full max-w-[340px] justify-self-center">
      <PaperCard tilt={-8} sheetClassName="p-1.5 pb-[22px]">
        <WaxSeal className="absolute left-1/2 top-0 z-10 size-[3.25rem] -translate-x-1/2 -translate-y-1/2 -rotate-6">
          {seal || name.charAt(0)}
        </WaxSeal>

        <Photo src={photo} alt={photoAlt || name} />

        {greeting && (
          <h3 className="mx-1.5 mb-2 mt-3 font-serif text-[30px] italic leading-[1.1] text-brand">{greeting}</h3>
        )}

        {facts.length > 0 && (
          <dl className="mx-1.5 grid grid-cols-2 gap-x-3.5 gap-y-2.5 border-t border-dashed border-ink/70 pt-3 text-[12.5px] leading-[1.3]">
            {facts.map(({ label, value }) => (
              <div key={label}>
                <dt className="inline font-semibold">{label}:</dt> <dd className="inline italic">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {languages.length > 0 && (
          <>
            <h4 className="mx-1.5 mb-2 mt-5 font-serif text-[28px] italic leading-[1.1] text-brand">
              {languagesTitle}
            </h4>
            <ul className="mx-1.5 grid gap-1.5 text-[13px]">
              {languages.map(({ name: language, level }) => (
                <li key={language} className={dotItem}>
                  {language} - {level}
                </li>
              ))}
            </ul>
          </>
        )}

        <Stamp
          ring={stamp?.ring}
          center={stamp?.center}
          className="pointer-events-none absolute bottom-3.5 right-3.5 size-[100px] -rotate-[14deg] opacity-90"
        />
      </PaperCard>
    </aside>
  );
}

export default memo(ProfileCard);
