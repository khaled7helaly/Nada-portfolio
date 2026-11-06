import { Link } from "react-router";
import { cx } from "@/lib/cx";
import { externalProps } from "@/lib/url";

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 14"
      aria-hidden="true"
      className="h-3 w-[22px] fill-brand transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
    >
      <path d="M0 0 9 7 0 14ZM10 0 19 7 10 14ZM21 0h3v14h-3Z" />
    </svg>
  );
}

/** "( resume ) ⏭" link. Page of this site → `to="/work"` · anything else → `href` (external links open in a new tab). */
export default function ArrowLink({ href, to, children, className, ...rest }) {
  const classes = cx(
    "group inline-flex items-center gap-[0.7em] text-[13px] outline-offset-4 focus-visible:outline-2 focus-visible:outline-brand",
    className,
  );
  const content = (
    <>
      <span>( {children} )</span>
      <Arrow />
    </>
  );

  return to ? (
    <Link to={to} className={classes} {...rest}>
      {content}
    </Link>
  ) : (
    <a href={href} className={classes} {...externalProps(href)} {...rest}>
      {content}
    </a>
  );
}
