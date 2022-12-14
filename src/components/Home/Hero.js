import styled from "styled-components";
import { Colors, Devices } from "../Theme";
import { useRef, useEffect } from "react";
import { gsap, timeline, Power1 } from "gsap";
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
  // margin-bottom: 150px;
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
  margin-top:30%;
  background: linear-gradient(231.34deg, #D515AA 6.9%, #FFE55C 90.35%);
  border-radius:50%;
  width: 370px;
  height: 370px;
  @media ${Devices.Tablet} {
    width: 1016px;
    height: 1016px;
    margin-top:0;
   }

`;
const FirstCircle = styled.div`
  background:${Colors.Background};
  border-radius: 50%;
  width: 340px;
  height: 340px;
  position: relative;
  margin:15px;
  // top:30%;
  @media ${Devices.Tablet} {
    width: 970px;
    height: 970px;
    top:20px;
    left:20px;
    margin:0px;
   }

`;
const Gradient = styled.div`
  background:  linear-gradient(231.34deg, #D515AA 6.9%, #FFE55C 90.35%);
  border-radius:50%;
  width: 250px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -125px -125px;
  @media ${Devices.Tablet} {
    width: 620px;
    height: 620px;
    margin: -310px -310px;
  }

`
const OuterCircle = styled.div`
  border-radius: 50%;
  width: 230px;
  height: 230px;
  position: absolute;
  background:${Colors.Background};
  top: 50%;
  left: 50%;
  margin: -115px 0px 0px -115px;

  @media ${Devices.Tablet} {
    width: 572px;
    height: 572px;
    margin: -286px 0px 0px -286px;
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
 
  
  @media ${Devices.Tablet} {
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
   left: 30%;
  @media ${Devices.Tablet} {
    width: 300px;
    left: 35%;
    // margin: -200px;

   }
  
`;



export default function Hero() {
  const triggerRef = useRef();
  const circleRef = useRef();
  const logoRef = useRef();
  const FirstCircleRef = useRef();

  useEffect(() => {
  
    let ctx = gsap.context(() => {

      let first = gsap.timeline({

        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top",
          end: "+=100%",
          scrub: 1,
          // pin: true
        },
      })

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top",
          end: "+=100%",
          scrub: 1,
          // pinSpacing:false,
          // pin: true
        },
      })
      let logo = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top",
          end: "+=100%",
          scrub: true,
          // pin: true
        },
      })


      logo.to(logoRef.current,{
        scale:0,
        opacity:0
      })
      
      first.to(FirstCircleRef.current,{
        scale: "4",
      })

      tl.to(circleRef.current,{
        scale: "4",
      })

      
      
    },[]);
    
    return () => ctx.revert(); 
    
    
  }, [])


  return (
    <HeroEl ref={triggerRef}>
      <CircleContainer ref={FirstCircleRef}>
        <FirstCircle
         >
           <Gradient>
             <OuterCircle >
             </OuterCircle>
           </Gradient>
          <InnerCircle 
            ref={circleRef}
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
