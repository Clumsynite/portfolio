import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Progress from "../templates/Progress";
import languages from "../data/languages";
import "../styles/Elements.css";

const About = () => {
  return (
    <div className="About mb-4">
      <h1 className="text-center mt-5 mb-4 pt-3 section-title">About Me</h1>
      <div id="about-body" className="container">
        <div className="content mb-4">
          I am <span className="text-primary font-italic">Rishabh Pathak</span>,
          a Fullstack web developer. I have been using the pseudonym{" "}
          <span className="text-info font-italic">Clumsyknight</span> in my
          projects.
        </div>
        <div className="col-md-6 mx-auto">
          <Accordion allowZeroExpanded>
            <AccordionItem
              style={{ backgroundColor: "aquamarine", borderRadius: "12px" }}
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
        </div>
      </div>
    </div>
  );
};

export default About;
