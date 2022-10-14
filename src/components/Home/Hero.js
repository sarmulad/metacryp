import styled from "styled-components";
import { Colors, Devices } from "../Theme";
import { useRef, useEffect } from "react";
import { gsap, timeline } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

const HeroEl = styled.article`
  display: flex;
  text-align: center;
  z-index: 12;
  flex-direction: column;
  align-items: center;

  // @media ${Devices.Laptop} {
    // margin: 3rem 4rem 5rem 4rem;
    margin-top: -100px;
       padding:2rem;
  // }

  // @media ${Devices.LaptopL} {
  //   margin: 3rem 10rem 5rem 10rem;
  // }
`;

const FirstCircle = styled.div`
  // background:  linear-gradient(231.34deg, #D515AA 6.9%, #FFE55C 90.35%);
  border-radius: 50%;
  width: 1016px;
  height: 1016px;
  border: 20px solid #FF786F;
  position: relative;
`;

const OuterCircle = styled.div`
  border-radius: 50%;
  width: 592px;
  height: 592px;
  border: 30px solid #FF786F;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -296px 0px 0px -296px;
  
`;


const InnerCircle = styled.div.attrs(props =>({
  className:props.className,
  id: props.id,
}))`
  position: absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  background: linear-gradient(231.34deg, #D515AA 6.9%, #FFE55C 90.35%);
  border-radius: 50%;
  width: 464px;
  height: 464px;
  top: 50%;
  left: 50%;
  margin: -232px  -232px;
`;

const Logo = styled.img`
   width: 388px;
  padding-right: 1rem;
`;


export default function Hero() {
  const circleRef = useRef();
  const logoRef = useRef();
  const FirstCircleRef = useRef();

  // useEffect(() => {
  
  //   let ctx = gsap.context(() => {
    
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: circleRef.current,
  //         start: "top center",
  //         end: "+=100%",
  //         scrub: true,
  //         pin: true
  //       },
  //     })
      
  //     tl.to(circleRef.current,{
  //       scale: "4"
  //     })
  //     // tl.to(logoRef.current,{
  //     //   scale: "1"
  //     // })
      
  //   },[]); // <- IMPORTANT! Scopes selector text
    
  //   return () => ctx.revert(); // clean
    
    
  // }, [])

  
  return (
    <HeroEl>
        <FirstCircle
         ref={FirstCircleRef}
        
        >
          <OuterCircle ></OuterCircle>
          <InnerCircle 
            ref={circleRef}
            className = "circle"
            id= "circle"
            >
           <Logo src="/images/logo.svg" 
            ref={logoRef}
           />
          </InnerCircle>
        </FirstCircle>
      
    </HeroEl>
  );
}
