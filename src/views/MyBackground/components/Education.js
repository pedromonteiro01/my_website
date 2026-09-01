import { useLayoutEffect, useRef, useState } from "react";
import "./SectionHeader.css";
import "./Education.css";
import { EducationData } from "./education-data";

const Education = () => {
  const listRef = useRef(null);
  const nodeRefs = useRef([]);
  const [path, setPath] = useState({ d: "", width: 0, height: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const listEl = listRef.current;
      if (!listEl) return;

      const listBox = listEl.getBoundingClientRect();
      const centers = nodeRefs.current
        .filter(Boolean)
        .map((el) => {
          const box = el.getBoundingClientRect();
          return {
            x: box.left + box.width / 2 - listBox.left,
            y: box.top + box.height / 2 - listBox.top,
          };
        });

      if (centers.length < 2) {
        setPath({ d: "", width: listBox.width, height: listBox.height });
        return;
      }

      // A single straight line through every node's x — they're all
      // aligned in the same column, so this connects every one of them.
      const x = centers[0].x;
      const first = centers[0].y;
      const last = centers[centers.length - 1].y;
      const d = `M ${x} ${first} L ${x} ${last}`;

      setPath({ d, width: listBox.width, height: listBox.height });
    };

    measure();
    const onResize = () => requestAnimationFrame(measure);
    window.addEventListener("resize", onResize);
    window.addEventListener("load", measure);
    const lateMeasure = setTimeout(measure, 400); // catch webfont swap reflow

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", measure);
      clearTimeout(lateMeasure);
    };
  }, []);

  return (
    <div className="education-section">
      <div className="mb-header">
        <div className="mb-icon-badge">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <h4 className="mb-section-title">Education</h4>
      </div>
      <ul className="education-list" ref={listRef}>
        {path.d && (
          <svg
            className="education-path"
            width={path.width}
            height={path.height}
            viewBox={`0 0 ${path.width} ${path.height}`}
          >
            <path
              d={path.d}
              fill="none"
              stroke="#0292b7"
              strokeOpacity="0.55"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="8 6"
            />
          </svg>
        )}
        {EducationData.map((item, index) => {
          return (
            <li key={item.id} className="education-item-row">
              <div className="education-logo" ref={(el) => (nodeRefs.current[index] = el)}>
                <img src={item.img} alt="" />
              </div>
              <div className="education-content">
                <span className="education-date">{item.date}</span>
                <span className="education-degree">{item.text}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
