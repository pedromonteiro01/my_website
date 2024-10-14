import './Footer.css';
import { data } from "./data";
import FooterItem from './components/FooterItem';

const Footer = () => {
return (
    <div className="footer">
        <h2>CONTACT ME!</h2>
        <ul className="icons">
        {data.map((item) => {
            return (
              <FooterItem key={item.id} class={item.class} icon={item.icon} link={item.link} text={item.text} />
            );
          })}
          </ul>
        <span style={{display: 'block'}}>2022 Pedro Monteiro<br></br>Made with React and Font Awesome</span>
    </div>

)
}

export default Footer;