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
export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: auto;
    background-color: #FFE2BB;
    border: solid 0.2em orange;
    width: 50vw;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 2em;

    p {
        margin: 0.5em;
    }
`
export const List = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: auto;
    flex-direction: column;
    width: 70vw;
    border-radius: 2em;
    border: solid 0.2em orange;
    
    h2 {
        text-align:center;
    }
    
`
export const LoadingIcon = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Buttons = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1em;
    margin-top: 1em;

    button {
        width: 10vw;
        min-height: fit-content;
        min-width:fit-content;
        border-radius: 0.5em;
        border-color: darkorange;
        height: 2em;
    }

    button:hover {
        background-color: orange;
    }
`
export const Loading = styled.div `
    text-align: center;
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