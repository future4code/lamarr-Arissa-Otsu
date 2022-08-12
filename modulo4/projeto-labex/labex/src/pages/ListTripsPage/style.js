import styled from 'styled-components'

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
    
    h1 {
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
    justify-content: space-around;
    margin:auto;
    margin-bottom: 1em;
    width: 20vw;
`
export const Loading = styled.div `
    text-align: center;
`
