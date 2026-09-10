import SocialLinks from "../../components/SocialLinks/SocialLinks";
import "./Footer.css";

const Footer = () => (
  <footer className="site-footer">
    <p className="site-footer-line">
      <span className="site-footer-prompt">pedro@monteiro</span>
      <span className="site-footer-sep">:</span>
      <span className="site-footer-path">~</span>
      <span className="site-footer-sep">$</span> echo "thanks for reading"
    </p>
    <SocialLinks />
    <p className="site-footer-copy">&copy; {new Date().getFullYear()} Pedro Monteiro — built with React</p>
  </footer>
);

export default Footer;
