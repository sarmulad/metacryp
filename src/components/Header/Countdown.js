import React from "react";
import styled from "styled-components";
import { useCountdown } from "../hooks/useCountdown";
import { Colors, Devices } from "../Theme";


const Container = styled.div`
   display:flex;
   flex-direction:column; 
   gap: 0.5rem;
  }
  @media ${Devices.Laptop} {
    gap: 0.5rem;
    align-items:center; 
   }
 }
`
const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  
 }
  @media ${Devices.Laptop} {
    gap: 1.5rem;
    display:flex;
 }
}
`
const CountdownItem = styled.div`
   text-align: center;
   h2{
    width: 30px;
    height: 30px;
    padding:0.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3.71575px);
    border-radius: 8.91781px;
    font-size:12px;
  
    @media ${Devices.Tablet} {
      width: 50px;
      height: 50px;
      padding: 0.7rem 0.5rem;
      font-size:23px;
   }

  }
  span{
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 27px;
      letter-spacing: 0.05em;
      @media ${Devices.Tablet} {
        font-weight: 600;
        font-size: 15px;
     }

  }


  // .countdown_item{
  //   h2{
  //     width: 70px;
  //   }
`

const H2 = styled.h2`
    font-weight: 600;
    font-size:10px;
    @media ${Devices.Laptop} {
        font-size: 13px;
    }

`


const Countdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const hasPassed = new Date() > targetDate;

  return (
     <Container>
      <H2>Presale stage 2  will end in </H2>
      <CountdownContainer >
        <CountdownItem>
          <h2>{hasPassed ? 0 : days}</h2>
          <span>Days</span>
        </CountdownItem>
        <CountdownItem>
          <h2>{hasPassed ? 0 : hours}</h2>
          <span>Hours</span>
        </CountdownItem>
        <CountdownItem>
          <h2>{hasPassed ? 0 : minutes}</h2>
          <span>Mins</span>
        </CountdownItem>
        <CountdownItem>
          <h2>{hasPassed ? 0 : seconds}</h2>
          <span>Secs</span>
        </CountdownItem>
    </CountdownContainer>
     
     </Container>
  );
};



export default Countdown;
