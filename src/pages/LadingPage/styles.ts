import styled from "styled-components";
import background from "../../assets/background.svg"

export const Main = styled.main`
 width: 100vw;
 height: 100vh;
 background-image: url("${background}"); 

`
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: center;

  
  .section {
    margin-top: 50px;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo > img {
    width: 100px;
    height: 123px;
    border-radius: 50px;
  }

  .logo > h1 {
    color: #FFFF;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    margin-top: 25px;
  }

  .description > h2 {
    color: #FFFF;
    font-weight: 800;
    font-size: 30px;
  }

  .description > p {
    width: 170px;
    text-align: center;

    font-weight: 800;
    font-size: 15px;
    color: var(--black);
  }

  a {
    cursor: pointer;
    margin-top:  25px;
    gap: 10px;

    text-decoration: none;
    background-color: var(--secondary-color);
    border-radius: 10px;
    color: #FFFF;

    width: 90%;
    max-width: 300px;
    height: 50px;
    

    display: flex;
    align-items: center;
    justify-content: center;

  }

  @media (min-width: 900px) {
    .section{
      margin-top: 100px;
    }

    .description > p {
      width: 500px;
      margin-bottom: 15px;
      margin-top: 5px;
    }
  }

`

