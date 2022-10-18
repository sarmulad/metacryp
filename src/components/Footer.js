import styled from "styled-components";
import { BsInstagram, BsMedium, BsDiscord, BsTelegram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { Colors, Devices } from "./Theme";
import Image from "next/image";
import Link from "next/link";

const FooterEl = styled.footer`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 2rem;
  color: ${Colors.White};
  padding: 2rem;
  background: #161452;
  z-index:2;

  @media ${Devices.Tablet} {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }
`;

const Socials = styled.div`
  display: flex;
  font-size: 1.5rem;
  gap: 1.5rem;
`;

const Links = styled.div`
  color: lightgray;
  display: flex;
  align-items:start;
  text-align:start;
  flex-direction: column;
  gap: 1rem;

  // @media ${Devices.Tablet} {
  //   flex-direction: column;
  //   align-items: center;
  //   gap: 1rem;
  // }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap:2rem;

`
const Noise = styled.div`
   height: 100%;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;

    &:after {
      -webkit-animation: noise 1s steps(2) infinite;
      animation: noise 1s steps(2) infinite;
      animation-duration: 1s;
      animation-timing-function: steps(2);
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: none;
      animation-play-state: running;
      animation-name: noise;
      background-image: url(images/noise.png);
      content: "";
      height: calc(100% + 20rem);
      left: -10rem;
      position: absolute;
      top: -10rem;
      width: calc(100% + 20rem);
      will-change: transform;
      }

      @keyframe noise {
        from {
          opacity:1;
        }

        to{
          opacity:0;
        }
  }
`
export default function Footer() {
  return (
    <>
    <FooterEl>
      <Container>
      <Image src="/images/logo.svg" alt="" width='100%' height="100%"/>
      <Socials>
        <a hef="#">
          <BsInstagram />
        </a>
        <a hef="#">
          <GrTwitter />
        </a>
        <a hef="#">
          <BsMedium />
        </a>
        <a hef="#">
          <BsDiscord />
        </a>
        <a hef="#">
          <BsTelegram />
        </a>
      </Socials>
      </Container>
      <Links>
        <Link href="/about">About</Link>
        <a href="#">Get MetaCryp</a>
        <a href="#">Privacy Policy</a>
      </Links>
      <Links>
        <a href="#">Careers</a>
        <a href="#">Staking</a>
        <a href="#">Terms and Conditions</a>
      </Links>
      <Links>
        <h4>Links</h4>
        <a href="#">Polygon</a>
        <a href="#">KUCOIN</a>
        <a href="#">SHIBASWAP</a>
        <a href="#">Citizen X</a>

      </Links>
    </FooterEl>
    <Noise></Noise>
    </>
  );
}
