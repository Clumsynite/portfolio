import Navbar from "./components/Navbar";
import Name from "./components/Name";
import "./styles/Scroll.css";

const App = () => {
  return (
    <div className="App" id="outer-container">
      <Navbar />
      <div id="page-wrap">
        <section className="scroll-child d-flex">
          <Name />
        </section>
      </div>
    </div>
  );
};

export default App;
