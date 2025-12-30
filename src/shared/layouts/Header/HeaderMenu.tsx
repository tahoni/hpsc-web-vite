import React, { ReactElement } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { PageMapping } from "@models/pages/PageMapping";
import { menuItems } from "@helpers/menuHelpers";

export const HeaderMenu = React.memo((): ReactElement => {
  return (
    <Container>
      <Navbar expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {menuItems.map((item: PageMapping, index: number) => (
              <Nav.Link
                href={item.path}
                key={"menu_item_" + index}
                active={item.path === window.location.pathname}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
});
