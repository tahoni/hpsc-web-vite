import React, { ReactElement } from "react";
import { Container, Dropdown, NavItem, NavLink } from "react-bootstrap";
import classes from "./Header.module.scss";
import { NavLink as RouterNavLink } from "react-router-dom";

export const HeaderMenu = React.memo((): ReactElement => {
  return (
    <Container className={classes.headerMenu}>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <RouterNavLink to={"/"}>Home</RouterNavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <RouterNavLink to={"/members"}>Members</RouterNavLink>
          </Dropdown.Item>
          {/*
          <Dropdown.Item>
            <RouterNavLink to={"/news"}>News</RouterNavLink>
          </Dropdown.Item>
*/}
          {/*
          <Dropdown.Item>
            <RouterNavLink to={"/matches"}>Matches</RouterNavLink>
          </Dropdown.Item>
*/}
          {/*
          <Dropdown.Item>
            <RouterNavLink to={"/ranges"}>Venues</RouterNavLink>
          </Dropdown.Item>
*/}
          <Dropdown.Item>
            <RouterNavLink to={"/links"}>Links</RouterNavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <RouterNavLink to={"/history"}>History</RouterNavLink>
          </Dropdown.Item>
          {/*
          <Dropdown.Item>
            <RouterNavLink to={"/contact_us"}>Contact Us</RouterNavLink>
          </Dropdown.Item>
*/}
          <Dropdown.Item>
            <RouterNavLink to={"/about_us"}>About Us</RouterNavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
});
