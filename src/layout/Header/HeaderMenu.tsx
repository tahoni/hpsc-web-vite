import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Dropdown, NavItem, NavLink, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuIcon } from "../../constants/IconConstants.ts";

export const HeaderMenu = React.memo((): ReactElement => {
  return (
    <>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>
          <span className="visually-hidden">Menu</span>
          <FontAwesomeIcon icon={menuIcon} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Row>
              <Link to="/">Home</Link>
            </Row>
          </Dropdown.Item>
          <Dropdown.Item>
            <Row>
              <Link to="/members">Members</Link>
            </Row>
          </Dropdown.Item>
          <Dropdown.Item>
            <Row>
              <Link to="/links">Links</Link>
            </Row>
          </Dropdown.Item>
          <Dropdown.Item>
            <Row>
              <Link to="/history">History</Link>
            </Row>
          </Dropdown.Item>
          <Dropdown.Item>
            <Row>
              <Link to="/contact_us">Contact Us</Link>
            </Row>
          </Dropdown.Item>
          <Dropdown.Item>
            <Row>
              <Link to="/about_us">About Us</Link>
            </Row>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
});
