import styled from "styled-components";

export const RecipePageStyles = styled.div`
  height: 100vh;
`

export const MainRecipeStyles = styled.main`
  height: calc(100vh - 207px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E8E8E8;
`

export const ContainerRecipe = styled.div`
  max-width: 920px;
  max-height: 650px;
  width: 80%;
  height: 100%;
  background-color: #FFFFFF;
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;

  & div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
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
      background-color: #FFE1B3;    
      
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
      color: #FFFFFF;
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
      background: #ECA09B;
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
    height: 50%;

    img {
      width: 50px;
      height: 50px;
    }
  }

  .recipeInfo div:nth-child(1), .recipeInfo div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 281px;
    height: 299px;
    background: #E8E8E8;
    border: 1px solid var(--secondary-color);
    border-radius: 8px;
    padding: 15px 20px;

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
    
    & div:nth-child(2) {
      height: 150px;
      background-color: transparent;
      border: 1px solid transparent;
      display: flex;
      flex-direction: column;
      align-items: center;

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
      color: #938E8E;
    }
  }

  @media(max-width: 960px) {
    max-height: 700px;

    .recipeInfo {
      height: 90%;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      overflow-y: scroll;
      padding-top: 300px;
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
`