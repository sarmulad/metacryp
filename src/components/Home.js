import Head from "next/head";
import styled from "styled-components";
import { Colors, Devices } from "./Theme";
import Link from "next/link";
import Hero from "./Home/Hero";
import Network from "./Home/Network";
import Features from "./Home/Features";
import Venues from "./Home/Venues";
import Token from "./Home/Token";
import FAQ from "./Home/faq/Faq";
import Roadmap from "./Home/Roadmap";


const HomeEl = styled.article`
  color: ${Colors.White};
  font-family: 'Clash Display', sans-serif;
`;

export default function Home() {
  return (
    <HomeEl>
      {/* <Head>
        <title>Metecrypt</title>
        <meta
          name="description"
          content="Cleaned create-next-app including styled-components and configured theme"
        />
        <link rel="icon" href="/favicon.png" />
        <link href="http://fonts.cdnfonts.com/css/clash-display" rel="stylesheet"/>
      </Head> */}
      <Hero />
      {/* <Network/> */}
      <Features/>
      <Venues/>
      <Token/>
      <Roadmap/>
      <FAQ/>
    </HomeEl>
  );
}
