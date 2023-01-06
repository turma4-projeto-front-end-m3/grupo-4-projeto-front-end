import styled from "styled-components";

export const StyledRemoveRecipeModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);

  @media (max-width: 630px) {
    max-height: max-content;
    overflow-y: scroll;
    padding: 2rem 0;
  }
`;

export const StyledRemoveModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--light-gray);
  max-width: 30rem;
  max-height: 50rem;
  border-radius: 0.5rem;

  @media (max-width: 630px) {
    max-height: max-content;
    width: 90%;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    background-color: var(--secondary-color);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    h3 {
      color: #ffffff;
    }

    button {
      background-color: var(--secondary-color);
      border: none;
      color: #ffffff;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 2rem 3rem;

    .removeMiniContButtons {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      .confirm {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background-color: var(--secondary-color);
        border: none;
        color: #ffffff;
        border-radius: 0.5rem;
      }

      .deny {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background-color: var(--background-color);
        border: none;
        color: #ffffff;
        border-radius: 0.5rem;
      }

      button:hover {
        opacity: 80%;
      }
    }
  }
`;
