import "../styles/Progress.css";

const Progress = (props) => {
  const { language } = props;
  const { name, progress } = language;
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
        {name}
      </div>
    </div>
  );
};

export default Progress;
