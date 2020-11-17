import Progress from "../templates/Progress";
import languages from "../data/languages";
import "../styles/Elements.css";

const About = () => {
  return (
    <div className="About">
      <h1 className="text-center mt-5 mb-4 pt-3 section-title">About Me</h1>
      <div id="about-body" className="container">
        <div className="languages-progress col-md-6 mx-auto">
          {languages.map((language, index) => {
            return <Progress language={language} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
