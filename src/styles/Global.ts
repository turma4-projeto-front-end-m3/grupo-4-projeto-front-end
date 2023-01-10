import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    :root {
        --primary-color: #6BCA3C;
        --secondary-color: #3B701F;
        --hover-color: #329F5B;

        --background-color: #E5C2C0;

        --black: #000000;
        --white: #FFFFFF;

        --gray: #808080;
        --dark-gray: #A9A9A9;
        --light-gray: #d3d3d3;
        --alert: #b90000;
    }

    button, a {
        cursor: pointer;
    }
`;
