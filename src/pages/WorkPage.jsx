import { useMemo, useState } from "react";
import { Link } from "react-router";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import NavBar from "@/components/ui/NavBar";
import WorkGrid from "@/components/cards/WorkGrid";
import { works } from "@/data";
import { allWorks, worksByCategory } from "@/lib/works";

/** Full page at /work with its own navbar. Nav items come from "categories" in works.json. */
export default function WorkPage() {
  const { categories, title, emptyLabel } = works;
  const [active, setActive] = useState(categories[0]?.key);
  const shown = useMemo(() => (active ? worksByCategory(active) : allWorks), [active]);

  return (
    <main id="main">
      <Section id="work-page">
        <NavBar
          items={categories}
          active={active}
          onSelect={setActive}
          leading={
            <Link
              to="/"
              className="outline-offset-4 hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
            >
              ( home )
            </Link>
          }
        />
        <SectionTitle as="h1" size="lg" className="mt-14">
          {title}
        </SectionTitle>
        <div className="mt-12">
          {shown.length > 0 ? (
            <WorkGrid items={shown} />
          ) : (
            <p className="font-serif text-xl italic">{emptyLabel}</p>
          )}
        </div>
      </Section>
    </main>
  );
}
