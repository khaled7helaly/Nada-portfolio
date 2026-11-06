import { cx } from "@/lib/cx";

/** Red wax seal. Place it with utilities: className="absolute left-1/2 top-0 size-[3.25rem] ..." */
export default function WaxSeal({ children, className }) {
  return (
    <span aria-hidden="true" className={cx("wax-seal", className)}>
      {children}
    </span>
  );
}
