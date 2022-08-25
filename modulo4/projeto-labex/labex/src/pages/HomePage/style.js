import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content:center;
    align-items: center;
    background-color: #96c6fe;
    margin-bottom: 2vh;

    h1 {
        color: #2a3959;
    }

    img {
        width: 10vw;
    }
    
`
export const Buttons = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20vh;
    justify-content: space-evenly;

    button {
        width: 10vw;
        border-radius: 0.5em;
        border-color: black;
        height: 2em;
    }

    button:hover {
        background-color: orange;
    }
`

export const HomeContainer = styled.form `
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 20vh;
    margin: auto;
    background-color: #FFE2BB;
    border: solid 0.2em orange;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 2em;
    align-content: center;
    justify-content: center;

    h2{
        text-align: center;
    }


`