import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    max-width: 1200px;
    padding: 0 135px;
    margin: 30px auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
        margin-bottom: 30px;
    }
    & > div > img {
        width: 100%;
    }

    @media(max-width: 425px){
        padding: 0 30px;

        & > div{
            font-size: 10px;
            display: flex;
            flex-direction: column;
        }
        & > div > img{
            display: none;
        }
    }
`

export const Button = styled.button`
    height: 31px;
    padding: 7px 20px;

    border: none;
    border-radius: 10px;

    font-weight: 600;
    font-size: 11px;

    color: var(--white);
    background-color: var(--secondary-color);
    
    :hover{
        border: 1px solid var(--secondary-color);
        color: var(--hover-color);
        background-color: var(--white);
    }
    
    @media(max-width: 425px){
        width: 100%;
    }
`



export const HomeFilterContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    gap: 11px;
    width: 100%;

    @media(max-width: 425px){
        overflow-x: scroll;
    }
`
export const HomePublish = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 425px){
        flex-direction: column;
    }
`
export const RecipesContainer = styled.ul`
    margin-top: 10px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    @media(max-width: 425px){
        gap: 10px;
        justify-content: center;
    }
`