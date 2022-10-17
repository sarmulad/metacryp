import styled from "styled-components";
import Button from "../styled/Button.styled";
import { Colors, Devices } from "../Theme";


const NetworkEl = styled.article`
  background: linear-gradient(231.34deg, #D515AA 6.9%, #FFE55C 90.35%);
  color: ${Colors.Black};
  display: flex;
  flex-direction: column;
  padding:3rem 1rem;
  @media ${Devices.Laptop} {
    padding: 0rem 10%;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  @media ${Devices.Laptop} {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
 
`;

const RightSection = styled.div`
   display:flex;
   flex-direction:column;
   row-gap:3rem;
   margin-top:2rem;
   
   @media ${Devices.Tablet} {
    margin-left:2rem;
  }
   
`;

const Title = styled.h1`
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color:${Colors.White};
  line-height: 50px;
  text-align:center;
  @media ${Devices.Laptop} {
      font-size: 40px;
      line-height: 64px;
      margin-bottom:5rem;

  }

`;

const Number = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 216.615px;
    line-height: 41px;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
     display:none;

    @media ${Devices.Tablet} {
      display:block;
    }
`;

const Illustration = styled.img`
  height:100%;
  width:280px;
  display:none;
  @media ${Devices.Tablet} {
   display:block;
 }
`;

const Container = styled.div`
  display:flex;
  align-items:center;
  gap:3rem;
`

const ContainerRight = styled.div`
  display:flex;
  align-items:center;
  @media ${Devices.Laptop} {
    margin-left:13rem;
    column-gap:3rem;

  }
`
const Cover = styled.div`
    background: url("images/cover.svg");
    background-repeat:no-repeat;
    // background-size: cover;
    width:320px;
    height:196px;
    display:flex;
    align-items:start;
    padding:2rem;
`

const Ul = styled.ul`
   
`
const Text = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color:#161452;
    margin-bottom:1rem;
`;
const Li = styled.li`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #161452;
`

export default function Roadmap() {
    return (
      <NetworkEl>
        <SectionContainer>
          <LeftSection>
            <Illustration src="/images/roadmap.svg"/>  
          </LeftSection>
          <RightSection>
              <Title>Roadmap</Title>
              <Container>
                 <Number>1</Number>
                 <Cover>
                    <Ul>
                        <Text>Stage 1</Text>
                        <Li>Presale</Li>
                        <Li>VR demo of the MetaCryp Universe</Li>
                        <Li>Building of the in-game assets in the Metaverse</Li>
                    </Ul>
                 </Cover>
                 
              </Container>
              <ContainerRight>
                 <Number>2</Number>
                 <Cover>
                    <Ul>
                        <Text>Stage 1</Text>
                        <Li>Presale</Li>
                        <Li>VR demo of the MetaCryp Universe</Li>
                        <Li>Building of the in-game assets in the Metaverse</Li>
                    </Ul>
                 </Cover>
              </ContainerRight>
              <Container>
                 <Number>3</Number>
                 <Cover>
                    <Ul>
                        <Text>Stage 1</Text>
                        <Li>Presale</Li>
                        <Li>VR demo of the MetaCryp Universe</Li>
                        <Li>Building of the in-game assets in the Metaverse</Li>
                    </Ul>
                 </Cover>
                 
              </Container>
              <ContainerRight>
                 <Number>4</Number>
                 <Cover>
                    <Ul>
                        <Text>Stage 1</Text>
                        <Li>Presale</Li>
                        <Li>VR demo of the MetaCryp Universe</Li>
                        <Li>Building of the in-game assets in the Metaverse</Li>
                    </Ul>
                 </Cover>
              </ContainerRight>
          </RightSection>
        </SectionContainer>
      </NetworkEl>
    );
  }
  