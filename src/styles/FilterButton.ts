import styled from "styled-components";

export const FilterBtn = styled.button`
    height: 31px;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 20px;

    border: 1px solid var(--secondary-color);
    border-radius: 10px;

    font-weight: 600;
    font-size: 11px;
    color: var(--secondary-color);

    background-color: var(--white);

    &:focus {
        color: var(--white);

        background-color: var(--secondary-color);
    }

    &:hover {
        color: var(--white);

        background-color: var(--secondary-color);
    }
`