import styled from "styled-components";
import Grid from "./styled/Grid.styled";
import { Colors, Devices } from "./Theme";
import { Circle, Circle2, Circle3, Circle4, } from "./styled/Circles.styled"

    
const NetworkEl = styled.article`
  background: ${Colors.Purple};
  color: ${Colors.White};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow:hidden;
  @media ${Devices.Laptop} {
    padding: 4rem 5%;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  margin-top:50px;
  margin-bottom: 100px;
  gap: 2rem;
  z-index:3;
  flex-direction: column;
  @media ${Devices.Laptop} {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`;

const RightSection = styled.div`
  margin-left:2rem;
  flex:1;
`;

const Title = styled.h1`
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
`;
const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;

    @media ${Devices.Tablet} {
      font-size: 20px;
    }

`;

const Illustration = styled.img`
   width:100%;
`;


const EnterOuter = styled.div`
    width: 166px;
    height: 166px;
    position: absolute;
    top: 21px;
    left: 620px;
    z-index:2;
    border-radius:50%;   
    border: 2px solid #22FFD7;
    display:none;
    @media ${Devices.Tablet} {
      display:block;
    }
`
const Enter = styled.div`
    width: 124px;
    height: 124px;
    position: absolute;
    top: 21px;
    z-index:2;
    margin-left: 20px;
    border-radius:50%;
    display:flex;
    align-items:center;
    padding:1rem;
    text-align:center;
    background: linear-gradient(180deg, #3757FF -18.57%, #22FFD7 100%);
    
`


export default function About() {
    return (
      <NetworkEl>
        <SectionContainer>
          <LeftSection>
            <Title> About Us</Title>
            <Text>MetaCryp Network is a metaverse project that is creating a haven for people to escape from the stress of daily lives. 
                Owning the native token of the MetaCryp ecosystem offers you access to a league of exciting activities and places to visit in the metaverse. As the ecosystem grows, holders will enjoy additional value. 
                MetaCryp Metaverse is a community-centric ecosystem where decisions fall in the hands of the native tokens holders. Holding the token offers you membership to an elite members-only group of like-minded individuals that want to unwind and create a blissful experience on the well-tailored metaverse. 
                With our plans, community members will have access to customized country clubs, vacation spots, and event centres. People can tailor their avatars to their needs.  
            </Text>
          
          </LeftSection>
          <RightSection>
            <Illustration src="/images/metaverse.svg"/>
          </RightSection>
        </SectionContainer>
        <EnterOuter>
         <Enter>Enter MetaCryp Network</Enter>
        </EnterOuter>

        <Circle></Circle>
        <Circle2></Circle2>
        <Circle3></Circle3>
        <Circle4></Circle4> 

      </NetworkEl>
    );
  }
  