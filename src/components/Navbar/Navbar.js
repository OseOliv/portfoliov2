import React from "react";
import {
  NavbarContainer,
  LogoContainer,
  MenuContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  LogoNavbar,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavbarStyles";
import Logo from "../../assets/img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <MenuContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Inicio </NavbarLink>
            <NavbarLink to="/sobre"> Sobre </NavbarLink>
            <NavbarLink to="/projetos"> Projetos </NavbarLink>
            <NavbarLink to="/contato"> Contato </NavbarLink>

            <OpenLinksButton
            onClick={() => {
    setExtendNavbar((curr) => !curr);
}}
>
{extendNavbar ? <span style={{color: 'red'}}> &#10005;</span> : <span style={{color: 'red'}}> &#9776; </span>}


            </OpenLinksButton>
          </NavbarLinkContainer>
        </MenuContainer>
        <LogoContainer >
          <Link to="/"><LogoNavbar src={Logo} ></LogoNavbar></Link>
        </LogoContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended onClick={() => setExtendNavbar(false)} to="/"> Inicio </NavbarLinkExtended>
          <NavbarLinkExtended onClick={() => setExtendNavbar(false)} to="/sobre"> Sobre </NavbarLinkExtended>
          <NavbarLinkExtended onClick={() => setExtendNavbar(false)} to="/projetos"> Projetos </NavbarLinkExtended>
          <NavbarLinkExtended onClick={() => setExtendNavbar(false)} to="/contato"> Contato </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
