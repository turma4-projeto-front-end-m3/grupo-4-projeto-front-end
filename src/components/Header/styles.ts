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

    .logo_container {
        display: flex;
        align-items: center;

        font-weight: 800;
        font-size: 17px;
        color: var(--white);
    }

    .profile_container {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .logoutImg {
        width: 30px;
        height: 30px;
        color: white;
        cursor: pointer;
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
    }

    @media (max-width: 400px) {
        & > nav {
            flex-direction: column;
            gap: 20px
        }
    }
`

export const ProfileImg = styled.img`
    width: 50px;
    height: 50px;

    object-fit: cover;

    border-radius: 50%;
`
