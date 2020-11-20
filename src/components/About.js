import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Progress from "../templates/Progress";
import SkillIcons from "../templates/Languages-Project";
import languages from "../data/languages";
import "../styles/Elements.css";
import LanguageIcons from "../templates/Languages-About";

const About = () => {
  const skills = {
    react: true,
    vue: true,
    pug: true,
    node: true,
    bootstrap: true,
    jQuery: true,
    git: true,
    firebase: true,
    vscode: true,
    photoshop: true,
    mongo: true,
  };
  return (
    <div className="About mb-4">
      <h1 className="text-center mt-5 mb-4 pt-3 section-title">About Me</h1>
      <div id="about-body" className="container">
        <div className="content mb-4">
          I am{" "}
          <span
            className="text-primary font-italic"
            data-tip
            data-for="rishabh"
          >
            Rishabh Pathak
          </span>
          {/* <ReactTooltip id="rishabh" aria-haspopup="true">
            <div className="card bg-light text-dark">
              <div className="card-body">
                <h5 className="card-title"> Rishabh Jitendra Pathak</h5>
                <p className="card-text">Age: 20</p>
                <p className="card-text">Email: rishabhp82@gmail.com</p>
              </div>
            </div>
          </ReactTooltip> */}
          , a Fullstack web developer. I have been using the pseudonym{" "}
          <span className="text-info font-italic">Clumsyknight</span> in my
          projects. You can find some of those projects on the{" "}
          <Link to="/projects" className="link">
            Projects
          </Link>{" "}
          page or on my{" "}
          <a
            href="https://github.com/clumsynite"
            className="link"
            rel="noreferrer"
            target="_blank"
          >
            <LanguageIcons icon={{ github: true }} /> Profile
          </a>
          .
        </div>
        <div className="col-md-6 mx-auto">
          <Accordion allowZeroExpanded>
            <AccordionItem
              style={{
                backgroundColor: "aquamarine",
                borderRadius: "12px",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-button">
                  Languages I know ?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel style={{ padding: 10 }}>
                {languages.map((language, index) => {
                  return <Progress language={language} key={index} />;
                })}
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div className="frameworks-and-technologies">
            {/* <SkillIcons languages={skills} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
