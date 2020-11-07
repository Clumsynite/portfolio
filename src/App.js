import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "./styles/Scroll.css";

const App = () => {
  return (
    <div className="App" id="outer-container">
      <Router basename="/">
        <Navbar />
        <div id="page-wrap" className="pt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
