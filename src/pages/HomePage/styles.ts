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
        color: var(--hover-color);
        background-color: var(--white);
    }
    
    @media(max-width: 400px){
        width: 100%;
    }
`

export const HomeFilterContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    gap: 11px;
    width: 100%;

    @media(max-width: 400px){
        overflow-x: scroll;
    }
`
export const HomePublish = styled.div`
    display: flex;
    justify-content: space-between;
`
export const RecipesContainer = styled.ul`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    @media(max-width: 400px){

    }
`