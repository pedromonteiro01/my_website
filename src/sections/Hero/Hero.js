import Typed from "react-typed";
import { profile, cvFiles, stats, typedStack } from "../../data/profile";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./Hero.css";

const Hero = ({ onNavigate }) => (
  <section className="hero" id="home">
    <Breadcrumb path={["portfolio", "README.md"]} />

    <div className="hero-card">
      <p className="hero-eyebrow"># README.md</p>
      <h1 className="hero-name">
        {profile.name} <span className="hero-wave" aria-hidden="true">👋</span>
      </h1>
      <p className="hero-typed">
        <span className="hero-prompt">&gt;</span> building things with{" "}
        <span className="hero-typed-word">
          <Typed strings={typedStack} typeSpeed={70} backSpeed={35} backDelay={900} loop />
        </span>
      </p>
      <p className="hero-summary">
        {profile.role} at <strong>{profile.company}</strong>, based in {profile.location}.
        MSc in Computer Science Engineering, focused on software development and
        exploring cybersecurity on the side.
      </p>

      <div className="hero-badges">
        <span className="hero-badge">role: {profile.role}</span>
        <span className="hero-badge">location: {profile.location}</span>
        <span className="hero-badge">degree: MSc Computer Science</span>
      </div>

      <div className="hero-actions">
        <button className="hero-btn hero-btn-primary" onClick={() => onNavigate("projects")}>
          <i className="fas fa-folder-open" aria-hidden="true" /> View Projects
        </button>
        <button className="hero-btn" onClick={() => onNavigate("contacts")}>
          <i className="fas fa-terminal" aria-hidden="true" /> ./contact.sh
        </button>
        {cvFiles.map((cv) => (
          <a key={cv.id} className="hero-btn" href={cv.path} target="_blank" rel="noreferrer">
            <i className="fas fa-download" aria-hidden="true" /> {cv.desc}
          </a>
        ))}
      </div>

      <p className="hero-terminal-hint">
        psst — press <kbd>Ctrl</kbd> + <kbd>`</kbd> for a terminal
      </p>

      <SocialLinks className="hero-socials" />

      <dl className="hero-stats">
        {stats.map((stat) => (
          <div key={stat.id} className="hero-stat">
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>

    <button className="hero-scroll-cue" onClick={() => onNavigate("about")} aria-label="Scroll to about">
      <span>scroll</span>
      <i className="fas fa-chevron-down" aria-hidden="true" />
    </button>
  </section>
);

export default Hero;
