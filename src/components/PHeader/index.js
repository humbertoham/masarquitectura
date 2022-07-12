import React, { useState } from "react";

import { Nav, Logo, Hamburger, Menu, MenuLink, LogoN } from "./PHeader.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
const PHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faCircleChevronDown} id="downA" />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="#civil" className="primero">
          Civil
        </MenuLink>
        <hr class="menu" />
        <MenuLink href="#comercial" className="primero">
          Comercial
        </MenuLink>
        <hr class="menu" />
        <MenuLink href="#concretosestampados" className="primero">
          Concretos Estampados
        </MenuLink>
        <hr class="menu" />
        <MenuLink href="#concretosoxidados" className="primero">
          Concretos Oxidados
        </MenuLink>
        <hr class="menu" />
        <MenuLink href="#diseno" className="primero">
          Diseño y construcción
        </MenuLink>
        <hr class="menu" />
        <MenuLink href="#industrial" className="primero">
          Industrial
        </MenuLink>
        <hr class="menu" />
        <MenuLink href="#microcemento" className="primero">
          Microcemento
        </MenuLink>
        <hr class="menu" />
      </Menu>
    </Nav>
  );
};

export default PHeader;
