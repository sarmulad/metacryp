import styled from "styled-components";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Colors, Devices } from "../Theme";
import Button from "../styled/Button.styled";
import Grid from "../styled/Grid.styled";
import { FadeAnimate } from "../animation/Animation";
import { gsap,} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";


gsap.registerPlugin(ScrollTrigger);


const FeaturesEl = styled.article`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 50%;
  height:auto;
  z-index:0;
  overflow:hidden;
  background: linear-gradient(180deg, #3757FF -18.57%, #22FFD7 100%);
  backdrop-filter: blur(200px);
  position:relative;
  height:100vh;
 
  @media ${Devices.Laptop} {
   padding: 6rem 4rem 5rem 4rem;
   height:100vh;
  }
`;


const InnerCircle = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  background: linear-gradient(145.6deg, #CF1395 -12.91%, rgba(110, 11, 102, 0.977546) 50.81%, rgba(34, 4, 66, 0.96) 100.61%);
  @media ${Devices.Laptop} {
    width: 464px;
    height: 464px;
  }
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 50px;
    line-height: 119px;
    text-align: center;
    color: #FFFFFF;
    position:absolute;
    margin-top:20%;
    @media ${Devices.Tablet} {
      font-size: 211.556px;
      margin-top:3rem;
    }

`;

const ExploreEl = styled.article`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  clip-path: circle(100% at 50% 50%);
  // height: 100vh;
  width:100%;
  overflow:hidden;
  @media ${Devices.Laptop} {
    // height:100vh;
    padding: 6rem 4rem 5rem 4rem;
  }
`;

const ElementContainer = styled(motion.div)`
    display:flex;
    flex-direction:column;
    gap:2rem;
    padding:2rem;
    background: url(/images/frost.svg);
    background-size:cover;
    border-radius: 39px;

    @media ${Devices.Tablet} {
      gap:2rem;
      padding:2rem;
    }

`;

const Element = styled.div`
    background: linear-gradient(180deg, #3757FF -18.57%, #22FFD7 100%);
    border-radius: 20px;
    padding:2rem ;
    text-align:start;
    display:flex;
    flex-direction:column;
    align-items:start;
    gap:1rem;
    min-height:320px;
`;
const P2 = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: #FBFBFB;
`
const P1 = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #161452;
`
const Icon = styled.img`
  width:32px;
  height:32px;
`;

const AnimateText = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    letter-spacing: 0.02em;
    color: transparent;
    -webkit-text-stroke: 2px #3757FF;
     margin-top:2rem;
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    -moz-animation: scroll 6S linear infinite;
    -webkit-animation: scroll 6S linear infinite;
    animation: scroll 6S linear infinite;
    animation-direction: reverse;
    // animation-play-state:running;
    white-space: nowrap;
    @media ${Devices.Laptop} {
      font-size: 157px;
      line-height: 180px;
    }
   
    @-webkit-keyframes scroll{
      from { -webkit-transform: translateX(100%); }
      to { -webkit-transform: translateX(-100%); }
    }
    @keyframes scroll{
      from {
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
      }
      to {
        -moz-transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }

`
export default function Features() {
  const panel_one = useRef();
  const dot = useRef();
  const explore = useRef();
  const titleRef = useRef();
  const container = useRef();



  useEffect(() => {
    let ctx = gsap.context(() => {
     
      // let title = gsap.timeline({
      //   defaults: { duration: 2, ease: 'none' },
      //   scrollTrigger: {
      //     trigger: titleRef.current,
      //     start: "center",
      //     end: "center",
      //     scrub: true,
      //     pin: true
      //   },
      // })
      
      // tl
      //   .to(dot.current, { scale: 2})
      //   .set(panel_one.current, { autoAlpha: 0, })
        
      // title
      // .to(titleRef.current, {
      //   scale:0.5,
      //   opacity:0.5,
      // })
      // .to(titleRef.current, {
      //   scale:0.3,
      //   opacity:0.3,
      // })
      // .to(titleRef.current, {
      //   scale:0,
      //   opacity:0,
      // })

      const reveal = gsap.timeline({
        defaults: {
          ease: "none",
          // duration: 4,
        },
        scrollTrigger: {
          trigger: panel_one.current,
          start: "top",
          end: "+=100% ",
          // end: () => `+=${document.querySelector(".mask").offsetWidth}`,
          scrub: 1,
          // markers:true,
          // pin:true,
          // pinSpacing:false,
        }
      });

      const down = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: panel_one.current,
          start: "top",
          end: "+=100% ",
          // end: () => `+=${document.querySelector(".mask").offsetWidth}`,
          scrub: 1,
          // pin:true,
        }
      });
       
      reveal
       .to(dot.current, {
         scale:3.5,
       })

       down.to(titleRef.current, {
          scale:0,
          opacity:0
       })


      //  const show = gsap.timeline({
      //   defaults: { duration: 2, ease: 'none' },
      //   scrollTrigger: {
      //     trigger:".container",
      //     start: "top",
      //     end: "+=300%",
      //     scrub: 1,
      //     markers: true,
      //     pin: true
      //   }
      // });

      // show.from(explore.current, {
      //   clipPath: "circle(0% at 50% 50%)",
      //   stagger: 1
      // });
      // show.set(".container", {duration: 0, display:"block"}) 

    },[]);
    return () => ctx.revert(); // clean
    
  }, [])


  return (
    <>
    <FeaturesEl ref={panel_one}>
    <InnerCircle  ref={dot}>
    </InnerCircle>
    <Title ref={titleRef}>Our Features</Title>
     </FeaturesEl>   
    <div ref={container} className="container">
     <div className="overlay"></div>
     <video src="/images/animation.mp4" autoPlay playsInline loop muted type="video/mp4"/>
     <ExploreEl ref ={explore}>
        <Grid 
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true, amount:0.5}}
          transition={{staggerChildren:0.5}}>
           <ElementContainer
              variants={FadeAnimate}
           >
              <Element>
                 <Image src="/images/icon/svg2.svg" alt="" width="57px" height='31px'/>
                 <P2>Explore Vast Landscapes & Multiple Regions</P2>
                 <P1>Get lost in a universe that never stops surprising you. Experience breathtaking and scapes and manmade 
                    creations by venturing across the ever expanding Metacrypuniverse.
                </P1>
              </Element>
              <Button round width="160px" background="linear-gradient(180deg, #3757FF -18.57%, #22FFD7 100%);">Learn more <Icon src="/images/icon/arrow-blue.svg" /></Button>
           </ElementContainer>
           <ElementContainer
              variants={FadeAnimate}
             
           >
             <Element>
               <Image src="/images/icon/svg3.svg" alt="" width="57px" height='31px'/>
                 <P2>Put Your Creative Skills To The Test</P2>
                 <P1>Create and build anything you want from buildings to artwork to games. Each and every
                    creation can be monetized for your benefit.
                </P1>
              </Element>
              <Button round width="160px" background="linear-gradient(180deg, #3757FF -18.57%, #22FFD7 100%);">Learn more <Icon src="/images/icon/arrow-blue.svg" /></Button>

           </ElementContainer>
           <ElementContainer
              variants={FadeAnimate}
             
           >
             <Element>
             <Image src="/images/icon/svg1.svg" alt="" width="57px" height='31px'/>
                 <P2>See You At The Country Club</P2>
                 <P1>Holders of the Metacryp token will have exclusive rights to access the many different
                    Country Clubs created. Each region will have its own Country Club where you can meet
                    and socialise with other token holders.
                </P1>
              </Element>
              <Button round width="160px" background="linear-gradient(180deg, #3757FF -18.57%, #22FFD7 100%);">Learn more <Icon src="/images/icon/arrow-blue.svg" /></Button>

            </ElementContainer>
        </Grid>
        <AnimateText>OUR FEATURES </AnimateText>
    </ExploreEl>
    </div>
    </>

  );
}
