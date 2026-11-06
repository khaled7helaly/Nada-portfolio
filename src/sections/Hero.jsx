import { Fragment } from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ArrowLink from "@/components/ui/ArrowLink";
import WaxSeal from "@/components/ui/WaxSeal";
import Stamp from "@/components/ui/Stamp";
import Photo from "@/components/ui/Photo";
import { HandDrawnFilter, Lamp, Vine, FloorPlan, Swatches, Squiggle, Cord } from "@/components/ui/HandDrawn";
import { hero, site } from "@/data";
import { resumeLink } from "@/lib/resume";

const links = [...(hero.links ?? []), ...(resumeLink ? [resumeLink] : [])];
const roles = hero.roles ?? ["Interior Design", "Digital Marketing"];
const rough = { filter: "url(#hand-drawn)" };

export default function Hero() {
  return (
    <Section id="hero">
      <HandDrawnFilter />

      <div className="relative">
        {/* النقوش: ورا المحتوى ومش بتتضغط، واللمبة بس فوق. غير الأماكن من هنا */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Vine className="absolute -left-10 -top-6 hidden w-24 origin-top -rotate-6 text-brand opacity-30 md:block lg:w-28" />
          <FloorPlan className="absolute bottom-0 left-[6%] hidden w-[22rem] text-brand opacity-[0.17] md:block" />
          <Lamp className="absolute right-[3%] top-0 z-20 hidden w-20 origin-top rotate-[7deg] text-brand sm:block lg:w-24" />
        </div>

        <div className="relative z-10">
          <SectionTitle as="h1" size="lg">
            {hero.title}
          </SectionTitle>

          <div className="mt-12 grid items-center gap-16 md:grid-cols-[1.1fr_1fr] md:gap-20">
            <div>
              <p className="max-w-[28ch] font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] italic leading-[1.25]">
                {hero.intro}
              </p>

              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-serif text-lg italic text-brand">
                {roles.map((role, i) => (
                  <Fragment key={role}>
                    {i > 0 && (
                      <span aria-hidden="true" className="text-2xl not-italic">
                        ×
                      </span>
                    )}
                    <span className="relative inline-block pb-2">
                      {role}
                      <Squiggle className="absolute inset-x-0 bottom-0 h-2 w-full" />
                    </span>
                  </Fragment>
                ))}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {links.map(({ label, href, to }) => (
                  <ArrowLink key={label} href={href} to={to}>
                    {label}
                  </ArrowLink>
                ))}
              </div>
            </div>

            {/* الموبايل: الصورة فوق والكتابة تحت. من md وطالع: الكتابة شمال والصورة يمين */}
            <div className="order-first md:order-none">
              {/* برواز معلّق من مسمار: الصورة في عقد (arch) وخطوطه متموجة بالإيد */}
              <figure className="relative mx-auto w-full max-w-[22rem] origin-top rotate-[2.5deg] px-5 pt-20">
                <Cord className="absolute left-1/2 top-0 h-12 w-5 -translate-x-1/2 text-brand" />

                <div className="relative">
                  {/* ضل ملون ورا البرواز، وبعده إطار تقيل + إطار رفيع + خط متقطع (حلقة ستوري / خط مسقط) */}
                  <span aria-hidden="true" style={rough} className="pointer-events-none absolute -inset-2 translate-x-2 translate-y-2 rounded-t-full bg-brand opacity-10" />
                  <span aria-hidden="true" style={rough} className="pointer-events-none absolute -inset-2 rounded-t-full border-[3px] border-brand" />
                  <span aria-hidden="true" style={rough} className="pointer-events-none absolute -inset-3.5 rounded-t-full border border-brand" />
                  <span aria-hidden="true" style={rough} className="pointer-events-none absolute -inset-6 rounded-t-full border-2 border-dashed border-brand opacity-60" />

                  <div className="relative overflow-hidden rounded-t-full">
                    <Photo src={hero.image} alt={hero.caption} className="aspect-[4/5]" priority />
                  </div>

                  <WaxSeal className="absolute -top-2 left-1/2 size-[3.25rem] -translate-x-1/2 -translate-y-1/2 -rotate-6">
                    {site.seal}
                  </WaxSeal>
                  <Stamp
                    ring={site.stamp?.ring}
                    center={site.stamp?.center}
                    className="pointer-events-none absolute -bottom-7 -left-7 size-24 -rotate-12 opacity-90"
                  />
                  <Swatches className="pointer-events-none absolute -right-5 bottom-12 w-20 rotate-6 text-brand sm:-right-9 sm:w-24" />
                </div>

                <figcaption className="mt-10 text-center font-serif text-xl italic text-brand">{hero.caption}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}