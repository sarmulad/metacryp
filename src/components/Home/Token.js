import styled from "styled-components";
import { Colors, Devices } from "../Theme";
import Image from "next/image";
// import ellipse1 from ".//images/ellipse.svg"

const TokenEl = styled.article`
  background: url("images/background.svg");
  background-size:cover;
  color: ${Colors.Black};
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;

  @media ${Devices.Laptop} {
    padding: 5rem 10%;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  margin-bottom: 100px;
  gap: 1rem;
  flex-direction: column;
  @media ${Devices.Laptop} {
    flex-direction: row;
    gap: 2rem;
    margin-top: 150px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

const RightSection = styled.div`
  margin-top:1rem;
  @media ${Devices.Tablet} {
    margin-left:2rem;
    margin-top:2rem;
  }

`;

const Title = styled.h1`
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color:${Colors.White};
  line-height: 50px;
  text-align: center;
  margin-bottom: 2rem;

  @media ${Devices.Laptop} {
    font-size: 47px;
    margin-bottom: 3rem;
    line-height: 64px;

  }
`;
const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    color:${Colors.Purple};
`;

const Icon = styled.img`
    width:18px;
    height:11px;
    margin-right: 5px;

`;
const Illustration = styled.img`
//   max-width: 80%;
//   max-height: 80%;
`;

const TokenDist = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
    padding: 2rem 1rem;
    grid-gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 50px;
    border-radius: 16px;
    border: 1px solid #fff;
    background: rgba(242, 242, 242, 0.1);

@media ${Devices.Laptop} {
    display: flex;
    justify-content: space-around;
   
  }
`
const TokenElement = styled.div`
  color: ${Colors.White};
  text-align:center;  
`

const H2 = styled.h2`
    font-weight: 600;
    font-size:20px;
  
    @media ${Devices.Laptop} {
        font-size: 32px;
    }

`
const H6 = styled.h6`
    font-size: 16px;
    line-height: 20px;
`

const TableContainer = styled.div`
    border-radius: 30px;
    padding: 3rem 2rem;
    display flex;
    align-items:center;
    justify-content:center;
    margin: 0 auto;
    @media ${Devices.Tablet} {
        padding: 4rem 3rem;
        max-width:600px;
        border: 1px solid #FDFDFD;
      }

`
const Table = styled.table`
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 32px;
    border-collapse: collapse;
    height: 100%;
    padding: 20px;
`
const Td = styled.td`
    text-align: left;
    padding: 15px;
    color: #161452;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    @media ${Devices.Tablet} {
      padding: 20px;
    }
`
const Th = styled.th`
    text-align: left;
    padding: 16px;
    color: #161452;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  @media ${Devices.Tablet} {
    font-size: 14px;
    padding: 20px;
  }
  
`
const Tr = styled.tr`
    border:0.6px solid #200A34;
`

const LineBig = styled.img`
  display:none;

  @media ${Devices.Laptop} {
    display:block;
  }
 
`

export default function Token() {
    return (
      <TokenEl>
         <Title>  Token Distribution & Fund Utilization </Title>
         <TokenDist>
          <TokenElement>
             <H6>Token Name</H6>
             <H2>METACRYP</H2>  
          </TokenElement>
            <LineBig src="images/icon/line.svg"/>
          <TokenElement>
            <H6>Ticker</H6>
            <H2>$MTCR</H2>
          </TokenElement>
          <LineBig src="images/icon/line.svg"/>
          <TokenElement>
             <H6>Token Supply</H6>
             <H2>500,000,000</H2>
          </TokenElement>
          <LineBig src="images/icon/line.svg"/>

          <TokenElement>
             <H6>Standard</H6>
             <H2>BEP-20</H2>
          </TokenElement>
         </TokenDist>
        <SectionContainer>
          <LeftSection>
            <Illustration src="/images/Pie.svg"/>
          </LeftSection>
          <RightSection>
         <TableContainer>
          <Table>
            <tbody>

                <Tr>
                    <Th>TOKEN DISTRIBUTION</Th>
                    <Th>Token AMOUNT</Th>
                    <Th>Percentage</Th>
                    {/* <Th className='mbl-h'>%</Th> */}
                </Tr>
                <Tr>
                    <Td><Icon src="/images/icon/ellipse.svg"/> Presale</Td>
                    <Td>150,000,000</Td>
                    <Td>30%</Td>
                </Tr>
                <Tr>
                    <Td><Icon src="/images/icon/ellipse.svg"/> P2E funding</Td>
                    <Td>50,000,000</Td>
                    <Td>10%</Td>
                </Tr>
                <Tr>
                    <Td><Icon src="/images/icon/ellipse.svg"/> Staking rewards</Td>
                    <Td>50,000,000</Td>
                    <Td>10%</Td>
                </Tr>
                <Tr>
                    <Td><Icon src="/images/icon/ellipse.svg"/>Fund</Td>
                    <Td>50,000,000</Td>
                    <Td>10%</Td>
                </Tr>
                <Tr>
                    <Td><Icon src="/images/icon/ellipse.svg"/> Team</Td>
                    <Td>50,000,000</Td>
                    <Td>10%</Td>
                </Tr>
                <Tr>
                    <Td><Icon src="/images/icon/ellipse.svg"/> Airdrop</Td>
                    <Td>50,000,000</Td>
                    <Td>10%</Td>
                </Tr>
                <Tr>
                    <Td> <Icon src="/images/icon/ellipse.svg"/>Bonuses</Td>
                    <Td>25,000,000</Td>
                    <Td>5%</Td>
                </Tr>
                <Tr>
                    <Td><Icon src="/images/icon/ellipse.svg"/> Liquidity</Td>
                    <Td>25,000,000</Td>
                    <Td>5%</Td>
                </Tr>
                <Tr>
                    <Td> <Icon src="/images/icon/ellipse.svg"/>Reserve</Td>
                    <Td>25,000,000</Td>
                    <Td>5%</Td>
                </Tr>
                <Tr>
                    <Td> <Icon src="/images/icon/ellipse.svg"/>Advisor</Td>
                    <Td>25,000,000</Td>
                    <Td>5%</Td>
                </Tr>
            </tbody>
            </Table>
         </TableContainer>
          </RightSection>
        </SectionContainer>
        <Text>
            The maximum amount of MetaCryp token ($MTCR) That will ever be created and be in 
            circulation at any point in time is 500,000,000 (500 million) $MTCR.  
            MetaCryp tokens are BEP-20 tokens hosted on Binance smart Chain.
        </Text>
      </TokenEl>
    );
  }
  