import styled from "styled-components"
export const NavBar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 6px 10px -1px rgba(0,0,0,0.46);
    background-color: var(--primary-color);
    width: 100%;
    margin-bottom: 20px;
    z-index: 2020;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media(max-width: 400px){}
`