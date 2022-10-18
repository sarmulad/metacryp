import { motion } from "framer-motion";
import styled from "styled-components";
import Button from "../styled/Button.styled";
import { Colors, Devices } from "../Theme";
import { FadeAnimate , imageFade, imageAnimate} from "../animation/Animation";

const Content = [
    {
      title:"HOLIDAY VENUES",
      text:"Travel to some of the world’s most memorable locations in the comfort of you own living room. Special events and giveaways will be announced in the coming months."
    },
    {
      title:"THE METACRYP WEBSTORE",
      text:"As a member of the exclusive MetaCryp ecosystem, you will have access to a one of a kind online store where you can purchase a range of different things to take your experience in the Metaverse to the next level."
    },
    {
      title:"P2E",
      text:"Gaming in the future will look very different. With Metacryp you will be able to earn whilst you play any of the games in our ecosystem. Weekly and monthly competitions will soon be a regular thing, resulting in more ways for you to earn money."
    },
]

const NetworkEl = styled.article`
  background: #672DA8;
  color: ${Colors.Black};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media ${Devices.Laptop} {
    padding: 1rem 10%;
  }
`;
const SectionContainer = styled(motion.div)`
  display: flex;
  margin-top: 150px;
  margin-bottom: 100px;
  gap: 2rem;
  flex-direction: column-reverse;
  @media ${Devices.Laptop} {
    flex-direction: row;
  }
`;

const LeftSection = styled(motion.div)`
  display: flex;
  flex: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

const RightSection = styled.div`
  margin-left:2rem;
  margin-top:2rem;

`;

const Title = styled.h1`
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color:${Colors.White};
  line-height: 50px;

  @media ${Devices.Tablet} {
    font-size: 40px;
    line-height: 64px;
  }

`;
const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color:${Colors.White};

    @media ${Devices.Tablet} {
      font-size: 25px;
      line-height: 40px;


    }

`;

const Icon = styled.img`
    width:32px;
    height:32px;
`;
const Illustration = styled(motion.img)`
    width:100%;
`;

const Container = styled(motion.div)`
    border-top: 2px solid #fff;
    padding:1rem 0rem;
`

export default function Venues() {
    return (
      <NetworkEl>
        <SectionContainer
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
        >
          <LeftSection
           initial={"offscreen"}
           whileInView={"onscreen"}
           viewport={{once:false, amount:0.5}}
           transition={{staggerChildren:0.5}}
          >
            {Content.map((item, index) => {
                return (
                <Container key={index} variants={FadeAnimate}>
                    <Title> {item.title}</Title>
                    <Text>{item.text}</Text>
                </Container>
                )
            })}
            <Button  variants={FadeAnimate} round="32px" background = "#32E2B8"> Enter PreSale <Icon src="/images/icon/arrow-right.svg"/> </Button>
          </LeftSection>
          <RightSection variants={imageAnimate}>
            <Illustration src="/images/illustration2.svg" />
          </RightSection>
        </SectionContainer>
      </NetworkEl>
    );
  }
  