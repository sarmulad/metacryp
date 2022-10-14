import styled from "styled-components";
import Button from "../styled/Button.styled";
import { Colors, Devices } from "../Theme";


const NetworkEl = styled.article`
  background: ${Colors.GradientsRed};
  color: ${Colors.Black};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  z-index:2;
  @media ${Devices.Laptop} {
    padding: 1rem 10%;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  margin-top: 150px;
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

  @media ${Devices.Tablet} {
    font-size: 47px;
    line-height: 64px;
  }
`;
const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 40px;

    @media ${Devices.Tablet} {
      font-size: 25px;
      line-height: 64px;
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
    return (
      <NetworkEl>
        <SectionContainer>
          <LeftSection>
            <Title> Welcome to the MetaCryp Network Unwind - Create and Escape</Title>
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
  