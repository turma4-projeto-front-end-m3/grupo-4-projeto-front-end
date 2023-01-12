import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;

  .NoRecipe{
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      font-size: 15px;
      font-weight: 700;
    }
  }
`;

export const RecipeItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 153px;
  height: 190px;

  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  border-top: 10px solid var(--secondary-color);

  padding: 10px;

  margin-bottom: 60px;

  & > img {
    position: absolute;
    top: -50px;

    width: 106px;
    height: 90px;

    object-fit: cover;

    border-radius: 45%;
  }
`;

export const RecipeItemContent = styled.div`
  margin-top: 33px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    width: 74px;

    font-size: 600;
    font-size: 12px;
    color: var(--black);
  }

  .avaliation_container {
    display: flex;
    align-items: center;
    gap: 4px;

    width: 45px;
    height: 23px;

    padding: 3px 7px;

    border-radius: 20px;

    background-color: #ffe1b3;

    span {
      font-weight: 400;
      font-size: 11px;
    }
  }

  .star_icon {
    width: 10px;
    height: 10px;
  }

  & > span {
    font-weight: 400;
    font-size: 10px;
    color: #938e8e;
  }
`;

interface iButtonProps {
  btnColor: string;
}

export const RecipeBtn = styled.button<iButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 51px;
  height: 24px;

  border: none;
  border-radius: 8px;

  ${({ btnColor }) => {
    switch (btnColor) {
      case "green":
        return css`
          background-color: var(--secondary-color);

          &:hover {
            background-color: var(--primary-color);
          }
        `;
      case "pink":
        return css`
          background-color: #f2463d;

          &:hover {
            background-color: #eca09b;
          }
        `;
    }
  }}
`;
