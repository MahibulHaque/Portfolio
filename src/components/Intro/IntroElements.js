import styled from "styled-components"
import { AnimatedDiv } from "../../Animated"

export const Screen = styled(AnimatedDiv)`
    width: 100vw;
    height: 100vh;
    background:var(--black);  
    display:grid;
    place-items:center;
    overflow: hidden;
    &>*{
        grid-column-start: 1;
        grid-row-start: 1;
    }
    svg{
        padding:20px;
        width:100%;
        max-width: 700px;
        /* animation: ${({animationComplete})=>(animationComplete?'upward':'none')} .5s ease-in-out;
        animation-delay: .5s;
        -webkit-animation: ${({animationComplete})=>(animationComplete?'upward':'none')} .5s ease-in-out;
        -webkit-animation-delay: .5s;
        @keyframes upward{
            to{
                opacity:0;
                width: 20%;
            }
        } */

    }

   
`


