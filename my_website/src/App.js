import "./App.css";
import About from "./views/About/About";
import Contacts from "./views/Contacts/Contacts";
import Footer from "./views/Footer/Footer";
import Intro from './views/Intro/Intro';
import MyBackground from "./views/MyBackground/MyBackground";

function App() {
  return (
    <>
      <Intro />
      <About />
      <MyBackground />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
