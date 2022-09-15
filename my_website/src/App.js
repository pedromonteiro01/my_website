import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./views/About/About";
import Contacts from "./views/Contacts/Contacts";
import Experience from "./views/Experience/Experience";
import Footer from "./views/Footer/Footer";
import Intro from './views/Intro/Intro';
import MyBackground from "./views/MyBackground/MyBackground";
import Projects from "./views/Projects/Projects";

function App() {
  return (
    <>
    <Intro />
    <Navbar />
      <About />
      <MyBackground />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
