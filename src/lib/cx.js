/** Joins class names and skips falsy values. */
export const cx = (...parts) => parts.filter(Boolean).join(" ");
