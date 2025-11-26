import React, { ReactElement } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuIcon } from "@constants/icons/iconConstants";
import { PageMapping } from "@models/pages/PageMapping";
import { menuItems } from "@helpers/menuHelpers";

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
