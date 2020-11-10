import Typed from "react-typed";
import FitText from "@kennethormandy/react-fittext";
import "../styles/Name.css";

const Name = () => {
  return (
    <div className="p-5 typed col-md-6" id="name-typed">
      <FitText compressor={1}>
        <Typed
          strings={[
            "<span style='color:#EA0F1E;font-weight:bold'>Hello.</span>",
            "I am Rishabh Pathak <span class='badge badge-pill badge-info'>AKA</span> Clumsyknight.",
          ]}
          typeSpeed={50}
          smartBackspace={true}
          backSpeed={50}
          showCursor={false}
        />
      </FitText>
      <FitText>
        <Typed
          strings={[
            "I am a FullStack developer.",
            "<span style='color:#00ffbf;'>View my projects <a href='#recent-projects' class='link'>below</a>.</span>",
          ]}
          startDelay={5500}
          typeSpeed={50}
          backSpeed={40}
          showCursor={false}
        />
      </FitText>
    </div>
  );
};

export default Name;
