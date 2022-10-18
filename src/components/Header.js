import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { Colors, Devices } from "./Theme";
import { useEffect,useState } from "react";
import dynamic from 'next/dynamic'
import Button from "./styled/Button.styled";
const Countdown = dynamic(
  () => import('./Header/Countdown'),
  { ssr: false }
)
const HeaderEl = styled.header`
  display: flex;
  color: ${Colors.White};
  width: 100%;
  align-items: center;
  height: 10%;
  gap: 1rem;
  padding: 1rem 1.5rem;
  top: 10px;
  // background-color: ${Colors.Background};
  position: sticky;
  z-index:100;
  font-family: 'Clash Display', sans-serif;
  // opacity:0.8;
  @media ${Devices.Tablet} {
    position: fixed;
    height:90px;
  }
  
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2rem;
  // justify-content:space-between;
  @media ${Devices.Laptop} {
    gap: 5rem;
  }
`;


const Logo = styled.img`
  width: 120px;
  @media ${Devices.Tablet} {
    width:auto;
  }
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

  &:hover{
    color:#32E2B8;
  }
`;

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${Devices.Laptop} {
    display: none;
  }
`;
const Icon = styled.img`
  width:32px;
  height:32px;
`;
const MenuIcon = styled(SearchIcon)``;

const Menu = styled.img``;

let targetDate = new Date("december 30,2022");

export default function Header({ mobileMenu }) {
  const { MobileMenuIsOpen, setMobileMenuIsOpen } = mobileMenu;

  function toggleMenu() {
    setMobileMenuIsOpen(!MobileMenuIsOpen);
  }

  return (
    <HeaderEl>
      <Center>
        <NavItem href="/"><Logo src="/images/logo.svg" /></NavItem>
        <Countdown targetDate={targetDate} suppressHydrationWarning/>
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
            <Button background="#32E2B8" width="140px" round>Login<Icon src="/images/icon/arrow-right.svg"/></Button>
          </ul>
        </Nav>
      </Center>
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
          <Menu
            src="images/icon/menu.svg"
            onClick={() => {
              toggleMenu();
            }}
          />
        )}
      </MenuIcon>
    </HeaderEl>
  );
}
