import React, { ReactElement } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuIcon } from "../../constants/IconConstants";
import { PageMapping } from "../../models/PageMapping.ts";
import { menuItems } from "../../helpers/MenuHelpers.tsx";

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
        {menuItems.map((item: PageMapping, index: number) => (
          <NavDropdown.Item as={Link} to={item.path} key={"menu_" + index}>
            {item.name}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </>
  );
});
