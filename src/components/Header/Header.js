import Typed from "react-typed";
import 'animate.css/animate.min.css';
import './Header.css';

const Header = () => {
    return (
        <section className="intro-text animate__animated animate__fadeInUp">
            <p className="intro-kicker">Software Engineer</p>
            <h2><Typed
      strings={[
            "Hello, I'm Pedro",
          ]}
          typeSpeed={80}
          backSpeed={80}
          loop
        /></h2>
        </section>
    )
}

export default Header;
