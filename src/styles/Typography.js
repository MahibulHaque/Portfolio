import { createGlobalStyle } from "styled-components";


import Poppins from '../assets/fonts/Poppins.woff';
import PoppinsSemibold from '../assets/fonts/PoppinsSemibold.woff';
import MontserratBold from '../assets/fonts/MontserratBold.woff';
const Typography = createGlobalStyle`
    @font-face {
        font-family: 'PoppinsSemibold';
        src: url(${PoppinsSemibold}) format('woff');
        font-weight: Semibold;
        font-style: normal;
        font-display: swap;


    }

    @font-face {
        font-family: 'MontserratBold';
        src: url(${MontserratBold}) format('woff');
        font-weight: Bold;
        font-style: normal;
        font-display: swap;



    }

    @font-face {
        font-family: 'PoppinsRegular';
        src: url(${Poppins}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display:swap;


    }




    *{
        color:var(--white)
    }
    html{
        font-family:'PoppinsRegular';
        color: var(--white);
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'MontserratBold';
    }
    
`;

export default Typography;
