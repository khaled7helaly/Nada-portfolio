import { useEffect, useRef, useState } from "react";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ArrowLink from "@/components/ui/ArrowLink";
import PaperCard from "@/components/ui/PaperCard";
import Stamp from "@/components/ui/Stamp";
import Img from "@/components/ui/Img";
import { contact, site } from "@/data";
import { cx } from "@/lib/cx";
import { pen } from "@/lib/pen";
import { externalProps } from "@/lib/url";

const details = (contact.details ?? []).filter((row) => row.value);
const socials = (contact.socials ?? []).filter((link) => link.url);
const control = "cursor-pointer outline-offset-4 hover:text-brand focus-visible:outline-2 focus-visible:outline-brand";

/** Copies the text and says so for two seconds. */
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return; // clipboard blocked: the mailto link still works
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" onClick={copy} className={cx("text-[13px]", control)}>
      <span aria-live="polite">( {copied ? "copied" : "copy"} )</span>
    </button>
  );
}

/** Contact: the email as a hand-lettered link + a postcard with the details. Everything comes from contact.json. */
export default function Contact() {
  return (
    <Section id="contact">
      <div className="grid items-center gap-16 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <SectionTitle>{contact.title}</SectionTitle>
          {contact.intro && (
            <p className="mt-6 max-w-[34ch] font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] italic leading-[1.25]">
              {contact.intro}
            </p>
          )}

          {contact.email && (
            <div className="mt-10">
              <a
                href={`mailto:${contact.email}`}
                className="group relative inline-block max-w-full font-hand text-[clamp(2.25rem,6vw,4.75rem)] leading-none outline-offset-8 [overflow-wrap:anywhere] focus-visible:outline-2 focus-visible:outline-brand"
              >
                <span className="transition-colors group-hover:text-brand motion-reduce:transition-none">
                  {contact.email}
                </span>
                <svg
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-3 w-full fill-none stroke-brand"
                >
                  <path d="M1 5 C20 1 38 7 58 3 S88 5 99 2" strokeWidth="2" {...pen} />
                </svg>
              </a>
              <div className="mt-6">
                <CopyButton text={contact.email} />
              </div>
            </div>
          )}
        </div>

        {(details.length > 0 || socials.length > 0) && (
          <PaperCard tilt={4} className="mx-auto w-full max-w-md" sheetClassName="p-6 pb-10">
            <Img
              src={contact.stamp}
              className="pointer-events-none absolute -right-5 -top-7 w-24 rotate-6 drop-shadow-[0_8px_10px_rgb(60_0_0/0.3)]"
            />
            {contact.cardTitle && (
              <h3 className="pr-20 font-serif text-[28px] italic leading-[1.1] text-brand">{contact.cardTitle}</h3>
            )}

            {details.length > 0 && (
              <dl className="mt-5">
                {details.map(({ label, value, href }) => (
                  <div
                    key={label}
                    className="border-b border-dashed border-ink/70 py-3 text-[13px] leading-[1.4] first:border-t"
                  >
                    <dt className="inline font-semibold">{label}:</dt>{" "}
                    <dd className="inline italic">
                      {href ? (
                        <a href={href} {...externalProps(href)} className="hover:text-brand">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {socials.map(({ label, url }) => (
                  <li key={label}>
                    <ArrowLink href={url}>{label}</ArrowLink>
                  </li>
                ))}
              </ul>
            )}

            <Stamp
              ring={site.stamp?.ring}
              center={site.stamp?.center}
              className="pointer-events-none absolute -bottom-7 -left-7 size-24 -rotate-12 opacity-90"
            />
          </PaperCard>
        )}
      </div>
    </Section>
  );
}