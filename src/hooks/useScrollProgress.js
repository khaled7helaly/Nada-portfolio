import { useEffect } from "react";

/**
 * Writes --p (0 → 1) on the element while it scrolls through the screen.
 * `head` is where the "pen" sits (0.65 = 65% down the viewport).
 * Scroll listeners only run while the element is near the viewport.
 * With reduced motion nothing is attached and the CSS default (--p: 1) shows everything.
 */
export default function useScrollProgress(ref, head = 0.65) {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * head - top) / height));
      el.style.setProperty("--p", p.toFixed(4));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const listen = () => {
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
    };
    const unlisten = () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };

    update();
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[entries.length - 1].isIntersecting) listen();
        else unlisten();
        schedule(); // settle on 0 or 1 when leaving, follow the scroll when entering
      },
      { rootMargin: "50% 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      unlisten();
      cancelAnimationFrame(frame);
    };
  }, [ref, head]);
}
