import Typed from "react-typed";
import './Header.css';

const Header = () => {
    return (
        <section class="intro-text">
            <h2><Typed
      strings={[
            "Hello, I'm Pedro",
          ]}
          typeSpeed={112}
          backSpeed={100}
          loop
        /></h2>
        </section>
    )
}

export default Header;