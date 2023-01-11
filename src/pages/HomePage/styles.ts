import styled from "styled-components";

export const HomeContainer = styled.main`
  min-height: 72.5vh;
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

  .divInputSearch {
    position: relative;

    input {
      width: 270px;
      height: 40px;

      border: 1.3px solid var(--light-gray);
      border-radius: 10px;

      padding: 10px 20px 10px 30px;
    }

    input:focus {
      outline: 1.3px solid var(--secondary-color);
    }

    img {
      filter: invert(60%);
      position: absolute;
      left: 10px;
      bottom: 13px;
    }

    @media (max-width: 475px) {
      input {
        width: 100%;
      }
    }
  }

  @media (max-width: 425px) {
    padding: 0 30px;

    & > div {
      font-size: 10px;
      display: flex;
      flex-direction: column;
    }
    & > div > img {
      display: none;
    }
  }
`;

export const Button = styled.button`
  height: 31px;
  padding: 7px 20px;

  border: none;
  border-radius: 10px;

  font-weight: 600;
  font-size: 11px;

  color: var(--white);
  background-color: var(--secondary-color);

  :hover {
    border: 1px solid var(--secondary-color);
    color: var(--hover-color);
    background-color: var(--white);
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const HomeFilterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  gap: 11px;
  width: 100%;

  @media (max-width: 425px) {
    overflow-x: scroll;
  }
`;
export const HomePublish = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  h1 {
    font-size: 25px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
export const RecipesContainer = styled.ul`
  margin-top: 10px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    gap: 10px;
    justify-content: center;
  }
`;
