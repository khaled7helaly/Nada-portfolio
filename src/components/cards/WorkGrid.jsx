import WorkCard from "./WorkCard";

/** Same grid on the home page and on the Work page, with alternating tilt. */
export default function WorkGrid({ items }) {
  return (
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((work, i) => (
        <WorkCard
          key={work.id}
          title={work.title}
          categoryLabel={work.categoryLabel}
          year={work.year}
          image={work.image}
          alt={work.alt}
          href={work.href}
          tilt={i % 2 ? 4 : -4}
        />
      ))}
    </div>
  );
}
