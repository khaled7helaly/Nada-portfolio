import { cx } from "@/lib/cx";

/** Every section wraps its content in this: same padding, same max width. */
export default function Section({ id, className, children }) {
  return (
    <section id={id} className={cx("relative px-6 py-16 md:px-[6vw] md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
