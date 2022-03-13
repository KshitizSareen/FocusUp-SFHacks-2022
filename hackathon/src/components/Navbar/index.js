import React from "react";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks
} from "./NavbarElements";
import appLogo from "../../images/app-logo.png";

const Navbar = (props) => {
  return (
    <IconContext.Provider>
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

            <NavItem>
              <NavLinks exact activeClassName="" to="">
                {props.title}
              </NavLinks>
            </NavItem>

            {/* <NavItem>
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
