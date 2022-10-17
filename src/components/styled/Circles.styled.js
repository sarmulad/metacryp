import styled from "styled-components";
import { Colors, Devices } from "../Theme";


export const Circle = styled.div`
    position: absolute;
    width: 380px;
    height: 380px;
    left: -70px;
    top: -170px;
    z-index: 1;
    background: linear-gradient(180deg, #3757FF -18.57%, #22FFD7 100%);
    transform: rotate(135deg);
    border-radius: 50%;
    overflow:hidden;

    @media ${Devices.Tablet} {
        width: 494px;
        height: 494px;
        left: -100px;
        top: -100px;
        z-index: 1;
    }
    
`
export const Circle2 = styled.div`
    position: absolute;
    border-radius: 50%;
    border: 2px solid #3757FF;
    // width: 548.21px;
    // height: 548.21px;
    // left: 388.82px;
    // top: 368.71px;

    z-index:1;
    overflow:hidden;
   
    @media ${Devices.Tablet} {
        width: 900px;
        height: 900px;
        left: -204px;
        top: -300px
    }

`

export const Circle3 = styled.div`
    position: absolute;
    border-radius: 50%;
    border: 2px solid #3757FF;
    width: 500px;
    height: 500px;
    left: -300px;
    top: -400px;
    overflow:hidden;

    @media ${Devices.Tablet} {
        width: 1398.66px;
        height: 1398.66px;
        left: -300px;
        top: -400px;
    }


`

export const Circle4 = styled.div`
    position: absolute;
    border-radius: 50%;
    border: 2px solid #3757FF;
    // width: 1400px;
    // height: 1400px;
    z-index:1;
    left: -300px;
    top: -400px;
    overflow:hidden;
    display:none;
    @media ${Devices.Tablet} {
        width: 1400px;
        height: 1400px;
        z-index:1;
        left: -300px;
        top: -400px;
    }

    
`