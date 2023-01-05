import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --primary-color: #0C8346;
        --secondary-color: #0D5D56;
        --hover-color: #329F5B;
        --background-color: #E5C2C0;
        --black: #000000;
        --gray: #808080;
        --dark-gray: #A9A9A9;
        --light-gray: #d3d3d3;
        --alert: #b90000;
    }
`;
