import Typed from "react-typed";
import FitText from "@kennethormandy/react-fittext";
import "../styles/Name.css";

const Name = () => {
  return (
    <div className="pl-4 typed col-md-6 align-self-center" id="name-typed">
      <FitText compressor={1}>
        <Typed
          strings={[
            "<span style='color:#EA0F1E;font-weight:bold'>Hello.</span>",
            "I am Rishabh Pathak <span class='badge badge-pill badge-info'>AKA</span> Clumsyknight.",
            "I am a FullStack developer.",
            "<span style='color:#00ffbf;'>View my projects below.</span>",
          ]}
          typeSpeed={60}
          smartBackspace={true}
          backSpeed={50}
        />
      </FitText>
    </div>
  );
};

export default Name;
