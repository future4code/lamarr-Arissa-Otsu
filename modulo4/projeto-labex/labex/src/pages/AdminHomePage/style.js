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
    flex-direction: row;
    align-items: center;
    height: 20vh;
    min-height: fit-content;
    justify-content: space-evenly;

    button {
        width: 10vw;
        min-width: fit-content;
        border-radius: 0.5em;
        border-color: darkorange;
        height: 2em;
        min-height: fit-content;
    }

    button:hover {
        background-color: orange;
    }
`

export const AdminHomeContainer = styled.form `
    display: flex;
    flex-direction: column;
    width: 60vw;
    min-width: fit-content;
    height: 20vh;
    min-height: fit-content;
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

export const ListItem = styled.li `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em;
    align-items: center;
    margin: auto;
    width: 30vw;
    min-width: fit-content;
    height: 5vh;
    min-height: fit-content;
    background-color: #FFE2BB;
    border: solid 0.2em orange;
    margin-bottom: 1em;
    border-radius: 2em;
`

export const Loading = styled.div `
    text-align: center;
`

export const LoadingIcon = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const ListButtons = styled.div `
    display: flex;
    align-items: center;

    button {
        width: fit-content;
        border-radius: 0.5em;
        border-color: darkorange;
        height: 2em;
        min-height: fit-content;
    }

    button:hover {
        background-color: orange;
    }

    .deleteButton {
        width: fit-content;
        margin-left: 1em;
    }
`

export const Footer = styled.footer`
    background-color: #96c6fe;
    bottom: 0;
    width: 100%;
    height: 5vh;
    min-height: fit-content;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 1em;
`