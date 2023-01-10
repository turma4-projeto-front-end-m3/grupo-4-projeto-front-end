import styled from "styled-components";

export const StyledRecipeModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(107, 202, 60, 0.38);

  @media (max-width: 630px) {
    height: max-content;
    max-height: max-content;
    overflow-y: scroll;
    padding: 2rem 0;
  }
`;

export const StyledRecipeModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--light-gray);
  max-width: 50rem;
  max-height: 50rem;
  border-radius: 0.5rem;

  @media (max-width: 630px) {
    max-height: max-content;
    width: 90%;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
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
      font-weight: 700;
      font-size: 0.875rem;
    }
  }

  form {
    display: flex;
    padding: 1rem 3rem 2rem 3rem;
    gap: 2rem;

    @media (max-width: 630px) {
      flex-direction: column;
      max-height: max-content;
      padding: 0.5rem;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      font-size: 0.75rem;
    }

    input {
      display: flex;
      padding: 0.3rem 1rem;
      border-radius: 0.5rem;
      outline: none;
      border: none;
      margin-bottom: 0.5rem;
    }

    select {
      display: flex;
      padding: 0.3rem 1rem;
      border-radius: 0.5rem;
      outline: none;
      border: none;
      margin-bottom: 0.5rem;
      color: var(--gray);
    }

    section {
      width: 100%;
      height: 20%;
      border-radius: 0.5rem;
      background-color: #ffffff;
      margin-bottom: 2.5rem;

      @media (max-width: 630px) {
        height: 5rem;
      }
    }
  }

  .miniCont {
    display: flex;
    flex-direction: row;
  }

  .smallInput {
    display: flex;
    width: 7rem;
  }

  .miniInput {
    display: flex;
    width: 3rem;
    padding: 0 0.3rem;
  }

  textarea {
    width: 100%;
    height: 30%;
    border-radius: 0.5rem;
    background-color: #ffffff;
    border: none;
    margin-bottom: 0.5rem;
    resize: none;

    @media (max-width: 630px) {
      height: 5rem;
    }
  }

  .buttonMiniCont {
    display: flex;
    flex-direction: row;
  }
`;

export const StyledCancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  background-color: var(--background-color);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  width: 48%;
`;

export const StyledGreenButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  background-color: var(--secondary-color);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  width: 48%;
`;
