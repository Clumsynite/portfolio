import Navbar from "./components/Navbar";
import Name from "./components/Name";
import { pushRotate as Menu } from "react-burger-menu";

const App = () => {
  return (
    <div className="App" id="outer-container">
      <Navbar />
      <div id="page-wrap">
        <Name />
      </div>
    </div>
  );
};

export default App;
