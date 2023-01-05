import styled from "styled-components";

export const FilterBtn = styled.button`
    height: 31px;

    padding: 7px 20px;

    border: none;
    border-radius: 10px;

    font-weight: 600;
    font-size: 11px;
    color: #71B1A1;

    background-color: var(--white);

    &:focus {
        color: var(--white);

        background-color: var(--secondary-color);
    }
`