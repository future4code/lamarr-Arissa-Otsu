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
export const LoginForm = styled.form `
    display: flex;
    flex-direction: column;
    width: 35%;
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
        margin-bottom: 2em;
        border-radius: 0.5em;
        border-color: black;
        height: 1.5em;
        padding-left:1em;
        width: 25em;
    }

`
export const Input = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;

    label {
        margin-right: 1em;
    }
`

export const Buttons = styled.div `

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    button {
        width: 5vw;
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
    position: fixed;
    width: 100%;
    height: 5vh;
    align-items: center;
    display: flex;
    justify-content: center;
`