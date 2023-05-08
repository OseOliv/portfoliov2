import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "5rem")};
  background-color: rgb(4, 9, 32);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    height: 5rem;
  }
`;

export const MenuContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const LogoContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 11.125rem;

  @media screen and (max-width: 600px) {
    margin-right: 142.125px;
  }
`;

export const LogoNavbar = styled.img`
  margin: 0.625rem;
  max-width: 5.45rem;
  height: auto;
  padding-top: 0.75rem;

  @media screen and (min-width: 600px) {
    max-width: 5.45rem;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(NavLink)`
  color: rgb(178, 224, 224);
  font-size: 1.125rem;
  font-family: "Roboto Mono", monospace;
  text-decoration: none;
  margin: 0.625rem;
  padding: 0.625rem;
  border-bottom: 3px solid transparent;
  

  &:hover {
    color: #03e9f4;
    font-weight: 700;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(
      0.25turn,
      #03e9f4,
      rgb(138, 43, 226),
      #38029b
    );
    border-image-slice: 1;
    width: 100%;
    background: rgb(0, 0, 0, 1);
    transition: all 0.6s ease;

  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  color: rgb(178, 224, 224);
  font-size: 1.2rem;
  font-family: "Roboto Mono", monospace;
  text-decoration: none;
  margin: 0.625rem;
`;

export const OpenLinksButton = styled.button`
  width: 4.375rem;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;
