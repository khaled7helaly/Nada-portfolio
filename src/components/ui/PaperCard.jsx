import { cx } from "@/lib/cx";

/**
 * Paper sheet with a tilted red sheet behind it.
 * className = wrapper layout · sheetClassName = paper padding · hover = red sheet only on hover/focus
 */
export default function PaperCard({ tilt = -8, hover = false, className, sheetClassName, children }) {
  return (
    <div
      className={cx("tilt-backing", hover && "tilt-on-hover", className)}
      style={{ "--tilt": `${tilt}deg` }}
    >
      <div className={cx("sheet", sheetClassName)}>{children}</div>
    </div>
  );
}
