import Navbar from "./components/Navbar";
import Name from "./components/Name";
import { pushRotate as Menu } from "react-burger-menu";

const App = () => {
  return (
    <div
      className="App"
      id="outer-container"
      style={{ backgroundColor: "black", minHeight: "100vh" }}
    >
      <Navbar />
      <div id="page-wrap" className="pt-4">
        <Name />
      </div>
    </div>
  );
};

export default App;
