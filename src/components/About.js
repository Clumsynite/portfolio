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
    <div className="About">
      <h1 className="text-center mt-5 mb-4 pt-3 section-title">About Me</h1>
      <div id="about-body" className="container">
        <div className="languages-progress col-md-6 mx-auto">
          <Accordion allowZeroExpanded>
            <AccordionItem
              style={{ backgroundColor: "aquamarine", borderRadius: "12px" }}
            >
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-button">
                  Known languages:
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
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
