import { push as Menu } from "react-burger-menu";
import "../styles/Navbar.css";
import "../styles/Link.css";

const Navbar = () => {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a id="home" className="menu-item link" href="/">
        Home
      </a>
    </Menu>
  );
};

export default Navbar;
