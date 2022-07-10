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
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    
    .sidebar {
        background-color:orange;
        min-height:85vh;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }

    .main-content {
        background-color: beige;
        background-image: url(https://cutewallpaper.org/23/abstract-simple-astronaut-drawing-wallpaper/10961580.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border: 1px solid black;
        min-height:85vh;
        max-width: 50vw;
        height: max-content;
        display:flex;
        flex-direction:column;
    }

    .chat-content{
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-left: 1.5vw;
        padding-right: 1.5vw;
        padding-bottom: 1vh;
    }

    .send-bar {
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 1vh;
    }
    
    .user-input {
        margin-left: 1.5vw;
        margin-right: 0.5vw;
        width: 12vw;
        height: 3vh;
        border-radius: 5px;
        border: 1px solid black;
        padding-left:0.5vw;
    }

    .user-input:hover {
        border: 2px solid orange;
    }

    .message-input {
        width: 28vw;
        height: 3vh;
        border-radius: 5px;
        border: 1px solid black;
        padding-left:0.5vw;
    }

    .message-input:hover {
        border: 2px solid orange;
    }

    .main-content button {
        margin-left:0.5vw;
        margin-right: 1.5vw;
        height: 3.5vh;
        width: 4vw;
        border-radius: 5px;
        border: 1px solid black;
    }

    .main-content button:hover {
        border: 2px solid orange;
        color:orange;
    }

    label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }
`


export const Footer = styled.footer`
    *{
        margin:0;
        padding:0;
    }
    background-color: gainsboro;
    text-align: center;
`