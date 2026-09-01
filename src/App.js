import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./views/About/About";
import Contacts from "./views/Contacts/Contacts";
import Experience from "./views/Experience/Experience";
import Footer from "./views/Footer/Footer";
import Intro from './views/Intro/Intro';
import MyBackground from "./views/MyBackground/MyBackground";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Stats from "./views/Stats/Stats";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Intro />
            <About />
            <MyBackground />
            <Stats />
            <Experience />
            <Contacts />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
