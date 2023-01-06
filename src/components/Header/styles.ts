import styled from "styled-components"

export const HeaderContainer = styled.header`
    height: 105px;

    padding: 12px 135px;

    background-color: var(--secondary-color);

    & > nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & > nav > div {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    @media (max-width: 975px) {
        padding: 12px 50px;
    }

    @media (max-width: 510px) {
        padding: 12px 10px;; 
    }

    @media (max-width: 475px) {
        height: fit-content;

        padding: 12px 20px;

        & > nav {
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        & > nav > img {
            margin-left: 60px;
        }

        & > nav > div {
            width: 100%;

            justify-content: center;
        }
    }
`

export const ProfileImg = styled.img`
    width: 50px;
    height: 50px;

    object-fit: cover;

    border-radius: 50%;
`
export const LogoutImg = styled.img`
    width: 40px;
    height: 42px;
`