import styled from "styled-components";
import { Colors, Devices } from "../Theme";
import { useRef, useEffect } from "react";
import { gsap, timeline } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Network from "./Network";


gsap.registerPlugin(ScrollTrigger)

const HeroEl = styled.article`
  display: flex;
  text-align: center;
  z-index: 12;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow:hidden;


  @media ${Devices.Laptop} {
    // margin: 3rem 4rem 5rem 4rem;
    // margin-top: -100px;
    // padding:2rem;
    height: auto;
    overflow:hidden;
  }

  // @media ${Devices.LaptopL} {
  //   margin: 3rem 10rem 5rem 10rem;
  // }
`;
const CircleContainer = styled.div`
  z-index:0;
  @media ${Devices.Laptop} {
    width: 1016px;
    height: 1016px;
   }

`;
const FirstCircle = styled.div`
  // background:  linear-gradient(231.34deg, #D515AA 6.9%, #FFE55C 90.35%);
  border-radius: 50%;
  width: 350px;
  height: 350px;
  border: 5px solid #FF786F;
  position: relative;
  top:30%;
 
  @media ${Devices.Laptop} {
    width: 1016px;
    height: 1016px;
    border: 20px solid #FF786F;
    top:0%;
   }

`;

const OuterCircle = styled.div`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  border: 5px solid #FF786F;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -125px -125px;

  @media ${Devices.Laptop} {
    width: 592px;
    height: 592px;
    margin: -296px 0px 0px -296px;
    border: 30px solid #FF786F;

   }
  
`;

const InnerCircle = styled.div`
  position: absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  background: linear-gradient(231.34deg, #D515AA 6.9%, #FFE55C 90.35%);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  margin: -100px  -100px;
 
  @media ${Devices.Laptop} {
    width: 464px;
    height: 464px;
    margin: -232px;

   }
`;

const Logo = styled.img`
   width: 150px;
  //  padding-right: 1rem;
   position: absolute;
   top: 45%;
   left: 35%;
  @media ${Devices.Laptop} {
    width: 300px;
    // margin: -200px;

   }
  
`;


export default function Hero() {
  const circleRef = useRef();
  const logoRef = useRef();
  const FirstCircleRef = useRef();

  useEffect(() => {
  
    let ctx = gsap.context(() => {

      let first = gsap.timeline({
        scrollTrigger: {
          trigger: FirstCircleRef.current,
          start: "center center",
          end: "+=100%",
          scrub: true,
          // pin: true
        },
      })

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: circleRef.current,
          start: "center center",
          end: "+=100%",
          scrub: true,
          // pin: true
        },
      })
      let logo = gsap.timeline({
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top center",
          end: "+=100%",
          scrub: true,
          // pin: true
        },
      })
      
      first.to(FirstCircleRef.current,{
        scale: "4"
      })

      tl.to(circleRef.current,{
        scale: "4"
      })
      // tl.to(FirstCircleRef.current,{
      //   scale: "3"
      // })
      logo.to(logoRef.current,{
        scale: "0",
        opacity:"0"
      })
      
      
    },[]); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // clean
    
    
  }, [])

  
  return (
    <HeroEl>
      <CircleContainer >
        <FirstCircle
         ref={FirstCircleRef}
         >
          <OuterCircle ></OuterCircle>
          <InnerCircle 
            ref={circleRef}
            // className = "circle"
            >
          </InnerCircle>
          <Logo src="/images/logo.svg" 
            ref={logoRef}
           />
        </FirstCircle>

      </CircleContainer>
      <Network/>
    </HeroEl>
  );
}
