import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceRow from "@/components/cards/ServiceRow";
import { services } from "@/data";

export default function Services() {
  return (
    <Section id="services">
      <SectionTitle>{services.title}</SectionTitle>
      {services.intro && (
        <p className="mt-6 max-w-[40ch] font-serif text-[clamp(1.25rem,2vw,1.75rem)] italic leading-[1.3]">
          {services.intro}
        </p>
      )}
      <ul className="mt-12 border-b border-dashed border-ink/70">
        {services.items.map(({ id, ...service }) => (
          <ServiceRow key={id} {...service} />
        ))}
      </ul>
    </Section>
  );
}
