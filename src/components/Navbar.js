import { push as Menu } from "react-burger-menu";
import { InlineIcon } from "@iconify/react";
import outlineHome from "@iconify/icons-ic/outline-home";
import sharpContactPage from "@iconify/icons-ic/sharp-contact-page";
import appSwitcher from "@iconify/icons-carbon/app-switcher";
import "../styles/Navbar.css";
import "../styles/Link.css";

const Navbar = () => {
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      width={250}
    >
      <div className="d-flex flex-column justify-content-around h-50">
        <a id="home" className="menu-item link font-em" href="/">
          <InlineIcon icon={outlineHome} /> Home
        </a>
        <a id="projects" className="menu-item link  font-em" href="/">
          <InlineIcon icon={appSwitcher} /> Projects
        </a>
        <a id="contact" className="menu-item link  font-em" href="/">
          <InlineIcon icon={sharpContactPage} /> Contact
        </a>
      </div>
    </Menu>
  );
};

export default Navbar;
