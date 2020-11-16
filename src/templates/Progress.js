import "../styles/Progress.css";

const Progress = (props) => {
  const { language, progress } = props;
  return (
    <div className="Progress">
      <div
        className="ProgressBar"
        style={{ width: `${100}%` }}
        onMouseEnter={(e) => {
          e.target.style.width = `${progress}%`;
        }}
        onMouseLeave={(e) => {
          e.target.style.width = `${100}%`;
        }}
      >
        {language}
      </div>
    </div>
  );
};

export default Progress;
