import { profile } from "../../data/profile";
import "./SocialLinks.css";

const links = [
  { id: "linkedin", href: profile.linkedin, icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { id: "github", href: profile.github, icon: "fab fa-github", label: "GitHub" },
  { id: "email", href: `mailto:${profile.email}`, icon: "fas fa-envelope", label: "Email" },
];

const SocialLinks = ({ className = "" }) => (
  <ul className={`social-links ${className}`}>
    {links.map((link) => (
      <li key={link.id}>
        <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
          <i className={link.icon} aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
