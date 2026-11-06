import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ArrowLink from "@/components/ui/ArrowLink";

export default function NotFound() {
  return (
    <main id="main">
      <Section id="not-found">
        <SectionTitle as="h1" size="lg">
          Oops
        </SectionTitle>
        <p className="mt-8 font-serif text-2xl italic">This page doesn’t exist.</p>
        <div className="mt-8">
          <ArrowLink to="/">home</ArrowLink>
        </div>
      </Section>
    </main>
  );
}
