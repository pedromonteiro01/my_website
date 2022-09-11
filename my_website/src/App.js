import "./App.css";
import About from "./views/About/About";
import Contacts from "./views/Contacts/Contacts";
import Footer from "./views/Footer/Footer";
import Intro from './views/Intro/Intro';

function App() {
  return (
    <>
      <Intro />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
