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

export const TripDetails = styled.div `
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    background-color: #FFE2BB;
    border-radius: 2em;
    border: solid 0.2em orange;
    width: 40vw;
    padding: 1em;
    margin-bottom: 1em;
    
    
    h2 {
        text-align: center;
        margin-top: 0.5em;
    }

    div {
        padding-left: 2em;
    }
`

export const CandidatesList = styled.div `
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    border-radius: 2em;
    border: solid 0.2em orange;
    width: 40vw;
    padding: 1em;
    margin-bottom: 1em;
    
    
    h2 {
        text-align: center;
        margin-top: 0.5em;
    }
`
export const Candidate = styled.div `
    display: flex;
    flex-direction: column;
    margin: auto;
    border: solid 0.2em orange;
    padding: 1em;
    padding-left: 2em;
    border-radius: 2em;
    background-color: #FFE2BB;
    width: 90%;
    margin-bottom: 1em;
    line-height: 2em;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 0.8em;
    }

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
export const ApprovedCandidatesList = styled.div `
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    background-color: #FFE2BB;
    border-radius: 2em;
    border: solid 0.2em orange;
    width: 40vw;
    padding: 1em;
    margin-bottom: 1em;

    h2 {
        text-align: center;
        margin-top: 0.5em;
    }
`

export const Buttons = styled.div `

    display: flex;
    flex-direction: row;
    align-items: center;
    margin:auto;
    width: 40vw;
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

export const LoadingIcon = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;

`