import { push as Menu } from "react-burger-menu";
import FitText from "@kennethormandy/react-fittext";
import "../styles/Navbar.css";
import "../styles/Link.css";

const Navbar = () => {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a id="home" className="menu-item link" href="/">
        Home
      </a>
      <a id="projects" className="menu-item link" href="/">
        Projects
      </a>
      <a id="contact" className="menu-item link" href="/">
        Contact
      </a>
    </Menu>
  );
};

export default Navbar;
