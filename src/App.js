import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Name from "./components/Name";
import "./styles/Scroll.css";

const App = () => {
  return (
    <div className="App" id="outer-container">
      <Router basename="/">
        <Navbar />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/">
              <section className="scroll-child d-flex">
                <Name />
              </section>
            </Route>
            <Route exact path="/projects">
              <section className="scroll-child">
                <h1>Projects</h1>
              </section>
            </Route>
            <Route exact path="/contact">
              <section className="scroll-child">
                <h1>Contact</h1>
              </section>
            </Route>
            <Route exact path="/about">
              <section className="scroll-child">
                <h1>About</h1>
              </section>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
