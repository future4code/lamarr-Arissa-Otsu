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


export const Form = styled.form `
    display: flex;
    flex-direction: column;
    width: 50%;
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

    input {
        margin-bottom: 1em;
        border-radius: 0.5em;
        border-color: black;
        height: 1.5em;
        padding-left:1em;
    }

    select {
        margin-bottom: 1em;
        border-radius: 0.5em;
        border-color: black;
        height: 2em;
        padding-left:1em;
        color: grey;
    }
`
export const Buttons = styled.div `

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 2em;

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
export const Footer = styled.footer`
    background-color: #96c6fe;
    bottom: 0;
    width: 100%;
    height: 5vh;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 1em;
`