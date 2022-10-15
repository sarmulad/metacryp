import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Colors, Devices } from "./Theme";
import { useState } from "react";

const HeaderEl = styled.header`
  display: flex;
  color: ${Colors.White};
  width: 100%;
  align-items: center;
  height: 10%;
  gap: 1rem;
  padding: 1rem 1.5rem;
  top: 0;
  // background-color: ${Colors.Background};
  position: sticky;
  z-index:100;
  font-family: 'Clash Display', sans-serif;
  // opacity:0.8;
  @media ${Devices.Tablet} {
    position: fixed;
  }
  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;


const Logo = styled.img`
  // width: 100px;
  padding-right: 1rem;
`;

const Nav = styled.nav`
  margin-left: auto;
  border-right: 1px solid ${Colors.Gray};
  padding-right: 1rem;
  display: none;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1rem;
  }

  @media ${Devices.Laptop} {
    display: block;
  }
`;

const NavItem = styled.a`
  font-size: 1rem;
  font-weight: 400;
`;

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${Devices.Laptop} {
    display: none;
  }
`;
const MenuIcon = styled(SearchIcon)``;



export default function Header({ mobileMenu }) {
  const { MobileMenuIsOpen, setMobileMenuIsOpen } = mobileMenu;

  function toggleMenu() {
    setMobileMenuIsOpen(!MobileMenuIsOpen);
  }

  return (
    <HeaderEl>
      <MenuIcon>
        {MobileMenuIsOpen ? (
          <IoClose
            style={{ fontSize: "2.5rem" }}
            color={Colors.Primary}
            onClick={() => {
              toggleMenu();
            }}
          />
        ) : (
          <FiMenu
            onClick={() => {
              toggleMenu();
            }}
          />
        )}
      </MenuIcon>
      <Center>
        <NavItem href="/"><Logo src="/images/logo.svg" /></NavItem>
        <Nav>
          <ul>
            <li>
              <NavItem href="/">Home</NavItem>
            </li>
            <li>
              <NavItem href="/about">About us</NavItem>
            </li>
            <li>
              <NavItem href="/governance">Government & Rewards</NavItem>
            </li>
            <li>
              <NavItem href="#">Whitepaper</NavItem>
            </li>
           
          </ul>
        </Nav>
      </Center>
    </HeaderEl>
  );
}
