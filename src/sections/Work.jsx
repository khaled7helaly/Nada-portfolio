import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ArrowLink from "@/components/ui/ArrowLink";
import WorkGrid from "@/components/cards/WorkGrid";
import { works } from "@/data";
import { featuredWorks } from "@/lib/works";

const featured = featuredWorks(works.homeLimit);

/** Home-page section: featured works + a link to the full Work page. */
export default function Work() {
  if (featured.length === 0) return null;

  return (
    <Section id="work">
      <SectionTitle>{works.title}</SectionTitle>
      <div className="mt-12">
        <WorkGrid items={featured} />
      </div>
      <div className="mt-12 flex justify-end">
        <ArrowLink to="/work">{works.viewAllLabel}</ArrowLink>
      </div>
    </Section>
  );
}
