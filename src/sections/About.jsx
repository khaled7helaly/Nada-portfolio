import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ArrowLink from "@/components/ui/ArrowLink";
import ProfileCard from "@/components/cards/ProfileCard";
import { about, site } from "@/data";
import { resumeLink } from "@/lib/resume";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-14 md:grid-cols-[minmax(260px,340px)_minmax(0,1fr)] md:gap-20">
        <ProfileCard {...about.profile} seal={site.seal} stamp={site.stamp} />

        <div>
          <SectionTitle className="mb-6">{about.title}</SectionTitle>
          <div className="max-w-[62ch] space-y-6 text-[clamp(14px,1.15vw,16px)] leading-[1.6]">
            {about.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          {about.closing && (
            <p className="mt-8 font-serif text-[clamp(20px,2vw,26px)] italic leading-[1.3]">{about.closing}</p>
          )}
        </div>
      </div>

      {resumeLink && (
        <div className="mt-12 flex justify-end">
          <ArrowLink href={resumeLink.href}>{resumeLink.label}</ArrowLink>
        </div>
      )}
    </Section>
  );
}
