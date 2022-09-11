import './FooterItem.css';

const FooterItem = (props) => {
    return (
        <li className={props.class}>
              <a href={props.link} target="_blank" rel="noreferrer">
                <i class={props.icon}></i>
                <p>{props.text}</p>
              </a>
        </li>
    )
}

export default FooterItem;