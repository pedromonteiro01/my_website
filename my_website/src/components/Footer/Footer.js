import './Footer.css';

const Footer = () => {
return (
    <div className="footer">
        <h2>STALK ME!</h2>
        <ul className="icons">
            <li className="linkedin">
              <a href="https://www.linkedin.com/in/pedromonteiro01/" target="_blank" rel="noreferrer">
                <i class="fab fa-linkedin-in"></i>
                <p>Linkedin</p>
              </a>
            </li>
            <li className="github">
              <a href="https://github.com/pedromonteiro01" target="_blank" rel="noreferrer">
                <i class="fab fa-github"></i>
                <p>GitHub</p>
              </a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/pedro_monteiro_01/" target="_blank" rel="noreferrer">
                <i class="fab fa-instagram"></i>
                <p>Instagram</p>
              </a>
            </li>
          </ul>
        <span style={{display: 'block'}}>2022 Pedro Monteiro<br></br>Made with ReactJS and Font Awesome</span>
    </div>

)
}

export default Footer;