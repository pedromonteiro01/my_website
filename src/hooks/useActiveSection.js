import { useEffect, useState } from "react";

// Tracks which section id is currently "in focus": the last section (in
// document order) whose top edge has scrolled above a fixed activation
// line near the top of the viewport — the same approach used by robust
// scrollspies (Bootstrap, Docusaurus' TOC, etc). Unlike comparing raw
// IntersectionObserver ratios, this stays correct regardless of how much
// taller or shorter one section is than its neighbours.
export function useActiveSection(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    let ticking = false;

    const compute = () => {
      ticking = false;
      let current = elements[0].id;

      for (const el of elements) {
        if (el.getBoundingClientRect().top <= offset) {
          current = el.id;
        } else {
          break;
        }
      }

      setActiveId(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return activeId;
}
