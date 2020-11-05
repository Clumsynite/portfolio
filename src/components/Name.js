import Typed from "react-typed";

const Name = () => {
  return (
    <div className="Name">
      <div
        style={{ fontSize: 24, backgroundColor: "black", color: "cyan" }}
        className="container mt-3 p-5"
        id="name-typed"
      >
        <Typed
          strings={[
            "<span style='color:#00ff80;'>Hello.</span>",
            "I am Rishabh Pathak.",
            "I am also known as Clumsyknight.",
            "A FullStack developer",
            "<span style='color:#00ffbf;'>View my projects below.</span>",
          ]}
          typeSpeed={40}
          smartBackspace={true}
          backSpeed={60}
        />
      </div>
    </div>
  );
};

export default Name;
