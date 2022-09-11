import Education from "./components/Education";
import Skills from "./components/Skills";
import "./MyBackground.css";

const MyBackground = () => {
  return (
    <div className="my-background">
      <h3 className="background-header">My Background</h3>
      <div className="background-wrapper">
        <Education />
        <Skills />
      </div>
    </div>
  );
};

export default MyBackground;
