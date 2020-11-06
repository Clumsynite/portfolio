import { pushRotate as Menu } from "react-burger-menu";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a id="home" className="menu-item">
        Home
      </a>
    </Menu>
  );
};

export default Navbar;
