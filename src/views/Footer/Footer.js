import './Footer.css';
import { data } from "./data";
import FooterItem from './components/FooterItem';

const Footer = () => {
return (
    <div className="footer">
        <h2>Contact Me</h2>
        <p className="footer-subtitle">Let's connect. Reach out on any of these platforms.</p>
        <ul className="icons">
        {data.map((item) => {
            return (
              <FooterItem key={item.id} icon={item.icon} link={item.link} text={item.text} />
            );
          })}
          </ul>
        <span>&copy; {new Date().getFullYear()} Pedro Monteiro</span>
    </div>

)
}

export default Footer;