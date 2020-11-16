import Progress from "../templates/Progress";
import languages from "../data/languages";
import "../styles/Elements.css";

const About = () => {
  return (
    <div className="About">
      <h1 className="text-center mb-4 pt-3 section-title">About Me</h1>
      <div id="about-body" className="container">
        {languages.map((language, index) => {
          const { name, progress } = language;
          return <Progress language={name} progress={progress} key={index} />;
        })}
      </div>
    </div>
  );
};

export default About;
