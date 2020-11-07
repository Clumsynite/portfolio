import { NavLink } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import { InlineIcon } from "@iconify/react";
import outlineHome from "@iconify/icons-ic/outline-home";
import appSwitcher from "@iconify/icons-carbon/app-switcher";
import roundConnectWithoutContact from "@iconify/icons-ic/round-connect-without-contact";
import aboutMe from "@iconify-icons/cib/about-me";

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
        <NavLink to="/" id="home" className="menu-item link font-em">
          <InlineIcon icon={outlineHome} /> Home
        </NavLink>
        <NavLink
          to="/projects"
          id="projects"
          className="menu-item link font-em"
        >
          <InlineIcon icon={appSwitcher} /> Projects
        </NavLink>
        <NavLink to="/contact" id="contact" className="menu-item link font-em">
          <InlineIcon icon={roundConnectWithoutContact} /> Contact
        </NavLink>
        <NavLink to="/about" id="about" className="menu-item link font-em">
          About <InlineIcon icon={aboutMe} />
        </NavLink>
      </div>
    </Menu>
  );
};

export default Navbar;
