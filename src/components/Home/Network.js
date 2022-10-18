import styled from "styled-components";
import Button from "../styled/Button.styled";
import { Colors, Devices } from "../Theme";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

const NetworkEl = styled.article`
  // background: ${Colors.GradientsRed};
  color: ${Colors.Black};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  z-index:2;
  // max-width:95%;
  // background: linear-gradient(231.34deg, #D515AA 6.9%, #FFE55C 90.35%);
  @media ${Devices.Laptop} {
     padding: 10rem 5%;
     max-width:auto;
     height:100vh;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  // margin-top: -150px;
  margin-bottom: 100px;
  gap: 2rem;
  z-index:2;
  flex-direction: column-reverse;
  @media ${Devices.Laptop} {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

const RightSection = styled.div`

  margin-left:2rem;
`;

const Title = styled.h1`
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  text-align:start;
  color:${Colors.White};
  @media ${Devices.Tablet} {
    font-size: 47px;
    line-height: 50px;
  }
`;
const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    text-align:start;
    color:${Colors.White};
    @media ${Devices.Tablet} {
      font-size: 20px;
      line-height: 40px;
       max-width:85%;

    }
`;
const BtnContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: row;
  @media ${Devices.Laptop} {
    flex-direction: row;
  }
`;
const Icon = styled.img`
  width:32px;
  height:32px;
`;

const Illustration = styled.img`
 width:100%;
`;

export default function Network() {
  const containerRef = useRef();
  const section = useRef();


  // useEffect(() => {
  
  //   let ctx = gsap.context(() => {

  //     const tl = gsap.timeline({
  
  //       scrollTrigger: {
  //       trigger: containerRef.current,
  //       pin: true,
  //       scrub: true,
  //       end:"+=100px"
  //       // end: () => `+=${containerRef.current.offsetWidth}`
          
  //     }
      
  //   })
  //   // tl
  //   // .to(section.current, { duration: 1, opacity:0, ease: "none" }, 0)
      
      
  //   },[]); // <- IMPORTANT! Scopes selector text
    
  //   return () => ctx.revert(); // clean
    
    
  // }, [])



    return (
      <NetworkEl ref={containerRef}>
        <SectionContainer ref={section}>
          <LeftSection>
            <Title> <span style={{color:"white"}}>Welcome to the</span><br/> <span style={{color:'#6E0B66F9'}}> MetaCryp Network  </span><br/> <small style={{fontWeight:'400'}}>Unwind - Create and Escape</small> </Title>
            <Text>Escape to a World of Virtual Reality.With Metacryp you can leave  the hustle 
                and bustle of daily life behind to explore a world of endless possibilities
            </Text>
            <BtnContainer>
                <Button round="32px" background = "#32E2B8"> Enter PreSale <Icon src="/images/icon/arrow-right.svg"/> </Button>
                <Button round="32px" color="#32E2B8">Audit(soon) <Icon src="/images/icon/arrow-solid.svg" /></Button>

            </BtnContainer>
          </LeftSection>
          <RightSection>
            <Illustration src="/images/illustration.svg"/>
          </RightSection>
        </SectionContainer>
      </NetworkEl>
    );
  }
  