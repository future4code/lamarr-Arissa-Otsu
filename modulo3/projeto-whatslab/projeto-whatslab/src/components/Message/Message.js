import React from 'react'
import styled from 'styled-components'

const MessageSection = styled.div`
    background-color: greenyellow;
    border-radius: 5px;
    text-align: left;
    padding-left: 0.8vw;
    padding-right: 0.8vw;
    margin-bottom: 1.5vh;
    min-width: 10vw; 
    max-width: 45.5vw;
    width: max-content;
    box-shadow: 5px 4px 5px black;
    border: 1px solid black;
    
    
    .UserSection {
        font-weight: bold;
        margin-top:6px;
        margin-bottom:0px;
    }

    .MessageSection {
        margin-top:1px;
        margin-bottom:6px;     
    }
`

function Message(props) {
    return (
        <MessageSection>
            <p className='UserSection'>{props.user}</p>
            <p className='MessageSection'>{props.message}</p>   
        </MessageSection>
    )
}

export default Message