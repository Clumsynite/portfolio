import Icons from "../templates/Languages-About";
import "../styles/Progress.css";

const Progress = (props) => {
  const { language } = props;
  const { name, progress, icon } = language;
  return (
    <div className="Progress" title={`${progress}%`}>
      <div
        className="ProgressBar"
        style={{ width: `100%` }}
        onMouseEnter={(e) => {
          e.target.style.width = `${progress}%`;
        }}
        onMouseLeave={(e) => {
          e.target.style.width = `100%`;
        }}
      >
        {name} <Icons icon={icon} style={{ pointerEvents: "none" }} />
      </div>
    </div>
  );
};

export default Progress;
