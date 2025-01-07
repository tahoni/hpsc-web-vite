import React, { ReactElement } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuIcon } from "../../constants/IconConstants";

export const HeaderMenu = React.memo((): ReactElement => {
  return (
    <>
      <NavDropdown
        title={
          <>
            <span className="visually-hidden">Menu</span>
            <FontAwesomeIcon icon={menuIcon} />
          </>
        }
      >
        <NavDropdown.Item as={Link} to="/">
          Home
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/members">
          Members
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/links">
          Links
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/history">
          History
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/contact_us">
          Contact Us
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/about_us">
          About Us
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
});
