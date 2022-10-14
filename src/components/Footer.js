import styled from "styled-components";
import { BsInstagram, BsMedium, BsDiscord, BsTelegram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { Colors, Devices } from "./Theme";
import Image from "next/image";

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
export default function Footer() {
  return (
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
        <a href="#">About</a>
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
  );
}
