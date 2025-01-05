import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, NavItem, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuIcon } from "../../constants/IconConstants.ts";
import classes from "./Header.module.scss";

export const HeaderMenu = React.memo((): ReactElement => {
  return (
    <Container className={classes.headerMenu}>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>
          <FontAwesomeIcon icon={menuIcon} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className={classes.headerMenuItem} eventKey={1}>
            <Link to="/">Home</Link>
          </Dropdown.Item>
          <Dropdown.Item className={classes.headerMenuItem} eventKey={2}>
            <Link to="/members">Members</Link>
          </Dropdown.Item>
          <Dropdown.Item className={classes.headerMenuItem} eventKey={3}>
            <Link to="/news">News</Link>
          </Dropdown.Item>
          <Dropdown.Item className={classes.headerMenuItem} eventKey={4}>
            <Link to="/matches">Matches</Link>
          </Dropdown.Item>
          <Dropdown.Item className={classes.headerMenuItem} eventKey={5}>
            <Link to="/ranges">Venues</Link>
          </Dropdown.Item>
          <Dropdown.Item className={classes.headerMenuItem} eventKey={6}>
            <Link to="/links">Links</Link>
          </Dropdown.Item>
          <Dropdown.Item className={classes.headerMenuItem} eventKey={7}>
            <Link to="/history">History</Link>
          </Dropdown.Item>
          <Dropdown.Item className={classes.headerMenuItem} eventKey={8}>
            <Link to="/contact_us">Contact Us</Link>
          </Dropdown.Item>
          <Dropdown.Item className={classes.headerMenuItem} eventKey={9}>
            <Link to="/about_us">About Us</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
});
