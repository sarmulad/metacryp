import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";

import { Colors } from "../src/components/Theme";
import { useState } from "react";
import Header from "../src/components/Header";
import Button from "../src/components/styled/Button.styled";
import Page from "../src/components/styled/Page.styled";
import Footer from "../src/components/Footer";
import "./styles.css"

const GlobalStyle = createGlobalStyle`
 

  html,
  body {
    background-color: ${Colors.Background};
    font-family: 'Clash Display', sans-serif;
    
  }
  

  p,a,h1,h2,h3,h5,h6,div,span{
    /* color:${Colors.White}; */
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition:all .3s;
  }

  /* width */
  body::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  body::-webkit-scrollbar-track {
    background: #ffffff;
  }

  /* Handle */
  body::-webkit-scrollbar-thumb {
    background: #212121;
    border-radius: 20px;
  }

  /* Handle on hover */
  body::-webkit-scrollbar-thumb:hover {
    background: rgb(43, 43, 43);
  }


`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const MobileMenu = styled.div`
  background-color: ${Colors.Background};
  color: ${Colors.White};
  z-index: ${(p) => (p.open ? "9" : "-1")};
  position: fixed;
  padding: 2rem 1rem 1rem 1.2rem;
  left: 0;
  // top:200px;
  display: flex;
  width: ${(p) => (p.open ? "100%" : "0")};
  height: 100vh;

  ul {
    opacity: ${(p) => (p.open ? "1" : "0")};
    transition: all 0.1s ease-out;
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

`;
const Icon = styled.img`
  width:32px;
  height:32px;
`;

const NavItem = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
`;

function MyApp({ Component, pageProps }) {
  const [MobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <>
     <Head>
        <title>Metacrypt</title>
        <meta
          name="description"
          content="Metacrypt token"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GlobalStyle />
      <Main>
        <Header mobileMenu={{ MobileMenuIsOpen, setMobileMenuIsOpen }} />
        <Page>
          <MobileMenu open={MobileMenuIsOpen}>
            <ul>
              <li>
                <NavItem href="/">Home</NavItem>
              </li>
              <li>
                <NavItem href="/about">About Us</NavItem>
              </li>
              <li>
                <NavItem href="/governance">Government & Rewards</NavItem>
              </li>
              <li>
                <NavItem href="#">Whitepaper</NavItem>
              </li>
              <li>
               <Button background="#32E2B8" width="140px" round>Login<Icon src="/images/icon/arrow-right.svg"/></Button>
              </li>
              {/* <hr color={Colors.White} size="1" />
              <li>
                <NavItem href="#">Sign In</NavItem>
              </li>
              <li>
                <NavItem href="#">Sign Up</NavItem>
              </li> */}
            </ul>
          </MobileMenu>
          <Component {...pageProps} />
        </Page>
        <Footer />
      </Main>
    </>
  );
}

export default MyApp;
