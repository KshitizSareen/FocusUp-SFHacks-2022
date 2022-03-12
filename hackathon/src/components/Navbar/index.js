import React from "react";
import { IconContext } from "react-icons";
import { Nav, NavbarContainer, NavMenu } from "./NavbarElements";
import appLogo from "../../images/app-logo.png";

const Navbar = ({ toggle }) => {
  return (
    <IconContext.Provider value={{ color: "#272343" }}>
      <Nav>
        <NavbarContainer>
          <NavMenu>
            <div style={{ marginTop: "8rem", height: "10rem" }}>
              <img
                style={{ height: "50%" }}
                src={appLogo}
                alt="Focus Up Logo"
              />
            </div>

            {/* <NavItem>
              <NavLinks exact activeClassName="active" to="/work">
                Work
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks exact activeClassName="active" to="/blog">
                Blog
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks exact activeClassName="active" to="/connect">
                Connect
              </NavLinks>
            </NavItem> */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
