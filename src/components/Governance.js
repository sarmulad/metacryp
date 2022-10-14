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

const Icon = styled.img`
  width:32px;
  height:32px;
`;

const Illustration = styled.img`
   width:100%;
`;

const ElementContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
    padding:2rem;
    background: url(/images/frost.svg);
    background-size:cover;
    border-radius: 39px;
    z-index:2;
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
    min-height:200px;

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

export default function Governance() {
    return (
      <NetworkEl>
        <SectionContainer>
          <LeftSection>
            <Title> Governance & Rewards</Title>
            <Text>The $MTCR token is the utility token of the MetaCryp Network, availing users the opportunity to bask in the numerous features that our metaverse offers. 
                Every token holder has the right to participate in the DAO. Decision-making will be allocated based on the participants ownership of the $MTCR token. Our native token allows governance privileges. The voting rights and decision-making will be tiered based on cumulative holdings of the governance tokens. Hence the more the token, the more the voting power.
                Our native BEP20 token does not only represent voting rights on the platform but also access to scalable transactions and activities in our metaverse. 
            </Text>
          
          </LeftSection>
          <RightSection>
            <Illustration src="/images/metaverse.svg"/>
          </RightSection>
        </SectionContainer>
        <Grid>
         <ElementContainer>
            <Element>
                 <P2>Unlocking effects</P2>
                 <P1>With the $MTCR token, it is easy to access the gates 
                    of our metaverse and the intriguing elements.
                </P1>
            </Element>
         </ElementContainer>
         <ElementContainer>
            <Element>
                 <P2> Governance effects</P2>
                 <P1>Holding the $MTCR token also confers 
                    a level of governance rights on users.
                </P1>
            </Element>
         </ElementContainer>
         <ElementContainer>
            <Element>
                 <P2>Reward system</P2>
                 <P1>The $MTCR token will reward different behaviours
                     and activities in the metaverse.
                </P1>
            </Element>
         </ElementContainer>
        </Grid>
        <Circle></Circle>
        <Circle2></Circle2>
        <Circle3></Circle3>
        <Circle4></Circle4> 

      </NetworkEl>
    );
  }
  