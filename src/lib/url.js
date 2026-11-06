/** True for absolute http(s) links. */
export const isExternal = (href = "") => /^https?:\/\//i.test(href);

/** Extra <a> attributes for links that leave the site. */
export const externalProps = (href) =>
  isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
