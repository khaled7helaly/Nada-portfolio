import { works } from "@/data";

const labels = new Map(works.categories.map((c) => [c.key, c.label]));

/** Every work, with its category label resolved. */
export const allWorks = works.items.map((w) => ({
  ...w,
  categoryLabel: labels.get(w.category) ?? w.category,
}));

export const featuredWorks = (limit) => allWorks.filter((w) => w.featured).slice(0, limit);

export const worksByCategory = (key) => allWorks.filter((w) => w.category === key);
