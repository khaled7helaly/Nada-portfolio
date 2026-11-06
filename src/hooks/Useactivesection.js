import { useEffect, useState } from "react";

/** Id of the section crossing the middle of the screen while `enabled` (used to highlight the nav). */
export default function useActiveSection(enabled = true) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!enabled) {
      setActiveId("");
      return undefined;
    }
    const sections = document.querySelectorAll("main section[id]");
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return activeId;
}