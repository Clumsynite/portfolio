import "../styles/Progress.css";

const Progress = (props) => {
  const { language, width } = props;
  return (
    <div className="Progress">
      <div className="ProgressBar" style={{ width: `${width}%` }}>
        {language}
      </div>
    </div>
  );
};

export default Progress;
