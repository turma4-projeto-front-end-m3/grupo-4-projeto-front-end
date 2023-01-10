import styled from "styled-components";


export const ContainerStyle = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 1rem;
    margin: 0 auto;

    .container2 {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    @media (min-width: 900px) {

        .container2 {
            flex-direction: row;
            gap: 20px;
        }
        
    }
`

export const MainStyle = styled.main`
    background-color: var(--light-gray);

    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;


    .sectionDir {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 100px;

        width: 100%;
        max-width: 350px;

        .letsCooking{
            display: none;

            h2 {
                font-size: 50px;
            }
        }
    }

    @media (min-width: 900px) {
        height: 100vh;
        
        .sectionDir { 
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            gap: 0px;

            .letsCooking{
                display: flex;
                flex-direction: column;
                justify-content: center;

                h2 {
                    color: var(--secondary-color)
                }
            }

            .divWelcome {
                display: none;
            }
        }
    }

    .divWelcome {
        display: flex;
        flex-direction: column;

        h2 {
            color: var(--secondary-color);
            font-weight: bold;
        }

        h3 {
            color: var(--secondary-color);
            font-weight: 400;
        }
    }
    
    .divLogo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    .divLogo > img {
        width: 50px;
        height: 50px;
    }

    @media (min-width: 900px) {
        .divLogo > img {
            width: 150px;
            height: 131px;
    }
    }

    .divLogo > h1 {
        font-size: 15px;
        color: var(--secondary-color);
    }


    .sectionFormRegister {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;


        @media (min-width: 900px) {
            border: 1px solid var(--secondary-color);
            background-color: #FFFF;
            height: 590px;
        }


        border-radius: 10px;
        padding: 15px;

        width: 100%;
        max-width: 400px;

        h2 {
            color: var(--secondary-color);
            font-size: 22px;
            font-weight: 800;
        }

        p {
            color: var(--secondary-color);
            font-weight: 400;
            font-size: 13px;
        }

        .divLogin {
            border-top: 1px solid var(--dark-gray);
            margin-top: 25px;
            width: 80%;

             text-align: center;

        p {
            font-weight: 400;
            font-size: 13px;
            margin-top: 15px;
        }

        a {
            text-decoration: none;
            font-weight: 500;
            font-size: 13px;
            color: var(--secondary-color);
        }
    }
    }
`

export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;

    label {
        color: var(--secondary-color);
        font-weight: 600;
        font-size: 12px;
    }

    input {
        margin-bottom: 10px;
        width: 100%;
        max-width: 310px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid var(--secondary-color);
        padding: 10px;
    }

    a {
        text-align: center;
        text-decoration: none;
    }

    .btnRegister{
        width: 100%;
        height: 40px;
        max-width: 310px;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        background-color: var(--secondary-color);
        color: #FFFF;
        margin-top: 10px ;
        border-radius: 10px;
    }

`