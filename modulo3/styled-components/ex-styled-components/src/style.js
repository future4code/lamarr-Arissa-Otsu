import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;

    img {
        width:50px;
        margin: 5px;
    }
`
export const Content = styled.main`
    display:grid;
    grid-template-columns: 1fr 4fr 1fr;
    
    .sidebar {
        background-color:orange;
        height: 80vh;
    }

    .main-content {
        display: flex;
        flex-direction:row;
        align-items: flex-end;
        justify-content: space-evenly;
        padding-bottom:4vh;
        padding-left: 2vw;
        padding-right: 2vw;
    }

    .message-input {
        width: 28vw;
    }

    .message-label{
        margin-left:1vw;
    }

    .main-content button {
        margin-left: 1vw;
    }
`

export const Footer = styled.footer`
    background-color: gainsboro;
    text-align: center;
    bottom: 0;
    position: fixed;
    width: 100%;
`
