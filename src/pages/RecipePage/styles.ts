import styled from "styled-components";

export const RecipePageStyles = styled.div`
  height: 100vh;
`;

export const MainRecipeStyles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e8e8;
  height: max-content;
  overflow-y: scroll;
  padding: 2rem 0;
`;

export const ContainerRecipe = styled.div`
  max-width: 920px;
  width: 80%;
  min-height: 72vh;
  height: max-content;
  background-color: var(--white);
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 25px;

  @media (max-width: 500px) {
    width: 95%;
  }

  & div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    img {
      max-width: 40%;
      border-radius: 3rem;
    }

    @media (max-width: 500px) {
      flex-wrap: wrap;
    }
  }

  & div:nth-child(1) div:nth-child(2) {
    h1 {
      font-weight: 600;
      font-size: 35px;
      line-height: 52px;
      text-align: center;
      color: #000000;
    }
  }

  & div:nth-child(1) div:nth-child(2) span:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 33px;
    margin-top: 15px;

    span:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      width: 46px;
      height: 41px;
      border-radius: 50%;
      background-color: #ffe1b3;

      p {
        font-size: 10px;
      }
    }

    span:nth-child(2) {
      margin-bottom: 10px;
      width: 106px;
      height: 33px;
      font-weight: 600;
      font-size: 15px;
      line-height: 22px;
      text-align: center;
      background-color: var(--secondary-color);
      border-radius: 8px;
      color: var(--white);
    }
  }

  & div:nth-child(1) div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-right: 28px;

    span:nth-child(1) {
      width: 68px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--secondary-color);
      border-radius: 8px;
    }

    span:nth-child(2) {
      width: 68px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #eca09b;
      border-radius: 8px;

      img {
        width: 25px;
        height: 26px;
      }
    }
  }

  .recipeInfo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: max-content;
    gap: 1rem;

    @media (max-width: 500px) {
      padding-top: 2rem;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }

  .recipeInfo div:nth-child(1),
  .recipeInfo div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 281px;
    height: 299px;
    background: #e8e8e8;
    border: 1px solid var(--secondary-color);
    border-radius: 8px;
    padding: 15px 20px;
    gap: 2rem;

    span:nth-child(1) {
      font-weight: 600;
      font-size: 15px;
      line-height: 22px;
      text-align: center;
      color: #000000;
    }

    span:nth-child(2) {
      font-size: 10px;
      line-height: 15px;
      color: #000000;
    }
  }

  .lastDiv {
    width: 30%;
    height: 299px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;

    & div:nth-child(2) {
      height: 150px;
      background-color: transparent;
      border: 1px solid transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      img {
        width: 52px;
        height: 54px;
        border-radius: 50%;
      }
    }

    img {
      width: 26px;
      height: 27px;
    }

    p {
      font-size: 15px;
      line-height: 22px;
      color: #938e8e;
    }
  }

  @media (max-width: 960px) {
    overflow-y: scroll;

    .recipeInfo {
      height: 90%;
      display: flex;
      flex-direction: column;

      gap: 30px;
    }

    & div:nth-child(1) {
      gap: 10px;
      height: 10%;
    }

    & div:nth-child(1) div:nth-child(2) {
      h1 {
        font-size: 12px;
        line-height: 18px;
      }
    }

    .imgRecipe {
      width: 106px;
      height: 102px;
    }

    & div:nth-child(1) div:nth-child(2) span:nth-child(2) {
      gap: 15px;
      margin-top: 0px;
      span:nth-child(1) {
        width: 45px;
        height: 24px;
      }

      span:nth-child(2) {
        width: 78px;
        height: 28px;
        margin: 0;
      }
    }

    & div:nth-child(1) div:nth-child(3) {
      span {
        background-color: red;
        width: 51px;
        height: 24px;

        img {
          width: 29px;
          height: 26px;
        }
      }
    }

    .lastDiv {
      width: 100%;
    }
  }
`;
