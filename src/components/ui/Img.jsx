import { useState } from "react";

/**
 * <img> with sane defaults: lazy, async decoding, no referrer (helps with hot-linked hosts).
 * Renders `fallback` when src is empty or the link is broken.
 */
export default function Img({ src, alt = "", fallback = null, priority = false, className, style }) {
  const [failedSrc, setFailedSrc] = useState(null);
  if (!src || failedSrc === src) return fallback;

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      referrerPolicy="no-referrer"
      onError={() => setFailedSrc(src)}
      className={className}
      style={style}
    />
  );
}
