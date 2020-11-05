import Typed from "react-typed";

const Name = () => {
  return (
    <div className="Name">
      <div style={{ fontSize: 20 }}>
        <Typed
          strings={[
            "Hello.",
            "I am Rishabh Pathak.",
            "I am also known as Clumsyknight.",
            "View my projects below.",
          ]}
          typeSpeed={40}
          smartBackspace={true}
          backSpeed={50}
        />
      </div>
    </div>
  );
};

export default Name;
