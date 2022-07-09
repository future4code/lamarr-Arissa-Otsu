import styled from 'styled-components'

export const Content = styled.main`
    display:flex;
    justify-content: center;
    
    .sidebar {
        background-color:white;
        height:100vh;
    }

    .main-content {
        background-color: beige;
        border: 1px solid black;
        padding-bottom: 1vh;
        height:100vh;
        display:flex;
        flex-direction:column;
    }

    .chat-content{
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: end;
        justify-content: flex-end;
        padding: 20px;
    }

    .send-bar {
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        align-items: flex-end;
    }
    
    .user-input {
        margin-left:1vw;
        margin-right: 0.5vw;
        width: 8vw;
        border-radius: 5px;
        border: 1px solid gray;
        padding-left:0.5vw;
    }

    .message-input {
        width: 26vw;
        border-radius: 5px;
        border: 1px solid gray;
        padding-left:0.5vw;
    }

    .main-content button {
        margin-left:0.5vw;
        margin-right: 1vw;
        width: 4vw;
        border-radius: 5px;
        border: 1px solid gray;
    }
`


