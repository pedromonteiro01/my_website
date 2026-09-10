import { experience } from "../../data/experience";
import { profile } from "../../data/profile";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useInView } from "../../hooks/useInView";
import "./Experience.css";

// Deterministic, decorative "commit hash" — just for flavor, not real git data.
const fakeHash = (seed) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).slice(0, 7).padEnd(7, "0");
};

const CommitEntry = ({ item, isHead }) => {
  const [ref, inView] = useInView();

  return (
    <li ref={ref} className={`commit ${inView ? "is-visible" : ""}`}>
      <span className="commit-node" aria-hidden="true" />
      <div className="commit-body">
        <p className="commit-hash-line">
          commit <span className="commit-hash">{fakeHash(item.title + item.date)}</span>
          {isHead && <span className="commit-head"> (HEAD -&gt; main)</span>}
        </p>
        <p className="commit-meta">Author: {profile.name} &lt;{profile.email}&gt;</p>
        <p className="commit-meta">Date:   {item.date}</p>
        <h3 className="commit-title">
          {item.title}
          {" — "}
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer" className="commit-local">
              {item.local}
            </a>
          ) : (
            <span className="commit-local">{item.local}</span>
          )}
        </h3>
        <p className="commit-text">{item.text}</p>
        {item.techStack.length > 0 && (
          <div className="commit-diff">
            <span className="commit-diff-count">{item.techStack.length} files changed</span>
            <div className="commit-diff-tags">
              {item.techStack.map((tech) => (
                <span key={tech} className="commit-diff-tag">+{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

const Experience = () => (
  <section className="experience" id="experience">
    <Breadcrumb path={["portfolio", "src", "sections", "experience.log"]} />

    <div className="log-header">
      <span className="log-prompt">$</span> git log --stat
    </div>

    <ul className="commit-list">
      {experience.map((item, index) => (
        <CommitEntry key={item.id} item={item} isHead={index === 0} />
      ))}
    </ul>
  </section>
);

export default Experience;
