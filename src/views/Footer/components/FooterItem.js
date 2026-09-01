import './FooterItem.css';

const FooterItem = (props) => {
    const isExternal = !props.link.startsWith("mailto:");

    return (
        <li className="footer-item">
              <a
                href={props.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={props.text}
              >
                <i className={props.icon}></i>
                <p>{props.text}</p>
              </a>
        </li>
    )
}

export default FooterItem;
