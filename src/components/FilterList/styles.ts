import styled from "styled-components";

export const FiltersContainer = styled.div`
    overflow-x: scroll;
    display: flex;
    ::-webkit-scrollbar{
        height: 5px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--primary-color);
        border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background-color: var(--hover-color);
    }
    ::-webkit-scrollbar-track{
        background-color: transparent;
    }
`