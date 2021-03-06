import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "react-router-dom";
import Progress from "../templates/Progress";
import SkillIcons from "../templates/Languages-Project";
import languages from "../data/languages";
import "../styles/Elements.css";
import LanguageIcons from "../templates/Languages-About";
import RESUME from "../resume/resume.jpg";
import PDF from "../resume/resume.pdf";

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
    github: true,
    npm: true,
    ubuntu: true,
  };
  return (
    <div className="About mb-4">
      <h1 className="text-center mt-5 mb-4 pt-3 section-title">About Me</h1>
      <div id="about-body" className="container">
        <div className="content mb-4 container-fluid">
          I am{" "}
          <span className="text-danger font-weight-bold font-italic">
            Rishabh Jitendra Pathak
          </span>
          , a Fullstack web developer. You can find some of my projects on{" "}
          <Link to="/projects" className="link">
            this
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
          . I am a self-motivated developer with experience in{" "}
          <span className="text-info font-italic">responsive design </span>
          and creating{" "}
          <span className="text-info font-italic">
            mobile responsive websites
          </span>{" "}
          from Scratch.{" "}
          <span className="text-primary font-weight-bold font-italic">
            Clumsyknight
          </span>
          , is a pseudonym that I often use in those websites.
        </div>
        <div className="col-md-6 mx-auto">
          <Accordion allowZeroExpanded>
            <AccordionItem className="accordion-item">
              <AccordionItemHeading>
                <AccordionItemButton
                  className="accordion-button"
                  style={{ borderTop: "none" }}
                >
                  Languages I know
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel style={{ padding: 10 }}>
                {languages.map((language, index) => {
                  return <Progress language={language} key={index} />;
                })}
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-button">
                  I am Skilled in using
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel style={{ padding: 10 }}>
                <div className="frameworks-and-technologies">
                  <SkillIcons languages={skills} className="icon-grid" />
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-button">
                  Resume
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel style={{ padding: 10 }}>
                <div className="resume">
                  <a
                    href={RESUME}
                    target="_blank"
                    rel="noreferrer"
                    id="resume-jpg"
                  >
                    <img
                      src={RESUME}
                      alt="Rishabh Pathak's Resume"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </a>
                  <a
                    className="btn btn-block btn-resume link-white mt-2"
                    href={PDF}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View as PDF
                  </a>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
