import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    height: 100px;

    padding: 30px 135px;

    background-color: #0D5D5661;

    & > div {
        display: flex;
        align-items: center;
        gap: 11px;

        overflow-x: auto;

        max-width: 450px;
        height: 50px;

        cursor: pointer;
    }

    & > div::-webkit-scrollbar {
        height: 10px;
    }

    & > div::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: var(--primary-color);
    }

    @media(max-width: 975px) {
        flex-direction: column;
        gap: 20px;

        height: fit-content;

        padding: 30px 50px;

        & > div {
            max-width: 100%;
        }
    }

    @media (max-width: 510px) {
        padding: 30px 10px;; 
    }

    @media (max-width: 475px) {
        padding: 30px 20px;
    }
`

export const InputSearchContainer = styled.div`
    position: relative;

    input {
        width: 270px;
        height: 40px;

        border: 1.3px solid var(--light-gray);
        border-radius: 10px;

        padding: 10px 20px 10px 30px;
    }

    input:focus {
        outline: 1.3px solid var(--secondary-color);
    }

    img {
        filter: invert(60%);
        position: absolute;
        left: 10px;
    }

    @media (max-width: 475px) {
        input {
            width: 100%;
        }
    }
`

export const MainContainer = styled.main`
    margin: 36px auto;

    width: 690px;

    min-height: 436px;

    & > div {
        display: flex;
        justify-content: space-between;

        margin-bottom: 60px;
    }

    h2 {
        font-weight: 700;
        font-size: 24px;
        color: var(--black);
    }

    & > div > button {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 32px;
        height: 32px;

        border: none;
        border-radius: 8px;

        background-color: var(--secondary-color);
    }

    & > div > button:hover {
        background-color: var(--hover-color);
    }

    @media (max-width: 975px) {
        max-width: 70%;
    }

    @media (max-width: 475px) {
        max-width: 85%;
    }
`
