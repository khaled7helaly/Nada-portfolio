import { cx } from "@/lib/cx";

const sizes = {
  md: "text-[clamp(2.25rem,6.6vw,5.5rem)]",
  lg: "text-[clamp(3rem,10vw,9rem)]",
};

/** Display title. The first letter gets the big italic swash. */
export default function SectionTitle({ children, as: Tag = "h2", size = "md", className }) {
  const [first = "", ...rest] = Array.from(String(children ?? ""));
  return (
    <Tag className={cx("font-display font-normal uppercase leading-none text-brand", sizes[size], className)}>
      <span className="-mr-[0.06em] text-[1.4em] italic leading-[0]">{first}</span>
      {rest.join("")}
    </Tag>
  );
}
