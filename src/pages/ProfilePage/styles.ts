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
    }

    @media(max-width: 1000px) {
        flex-direction: column;
        gap: 20px;
        height: fit-content;
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
`
