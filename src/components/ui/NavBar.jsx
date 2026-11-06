import { Link } from "react-router";
import { cx } from "@/lib/cx";
import { externalProps } from "@/lib/url";

const focus = "outline-offset-4 focus-visible:outline-2 focus-visible:outline-brand";

/** One entry: `to` = page of this site · `href` = anything else (new tab if external) · neither = button that calls onSelect(key). */
function NavItem({ item, active, onSelect }) {
  const className = cx(
    focus,
    "whitespace-nowrap",
    active ? "text-brand underline underline-offset-4" : "hover:text-brand",
  );
  const text = `( ${item.label} )`;

  if (item.to) {
    return (
      <Link to={item.to} aria-current={active ? "page" : undefined} className={className}>
        {text}
      </Link>
    );
  }
  if (item.href) {
    return (
      <a href={item.href} {...externalProps(item.href)} className={className}>
        {text}
      </a>
    );
  }
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect?.(item.key)}
      className={cx("cursor-pointer", className)}
    >
      {text}
    </button>
  );
}

/**
 * Sticky navbar for a page that needs its own navigation (the /work page), same look as the home header.
 * leading = node on the left (e.g. the "( home )" link) · items = [{ key, label, to | href }] on the right,
 * `active` = the key of the current item. On a narrow screen the items scroll sideways instead of wrapping.
 * Items without `to` / `href` stay buttons that call onSelect(key), so the old usage keeps working.
 */
export default function NavBar({ items = [], active, onSelect, leading, label = "Main", className }) {
  return (
    <header
      className={cx(
        "sticky ",
        className,
      )}
    >
      <nav
        aria-label={label}
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 text-[13px] md:px-[6vw]"
      >
        {leading && <div className="shrink-0">{leading}</div>}

        {items.length > 0 && (
          // The padding + negative margin give the focus ring room, because a scroll container clips it.
          <ul className="-my-2 -mr-2 ml-auto flex min-w-0 gap-6 overflow-x-auto py-2 pl-2 pr-2 [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden">
            {items.map((item) => (
              <li key={item.key ?? item.label} className="shrink-0">
                <NavItem item={item} active={item.key === active} onSelect={onSelect} />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}