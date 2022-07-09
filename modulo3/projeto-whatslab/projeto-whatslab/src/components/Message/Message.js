import React, {useState} from 'react'
import styled from 'styled-components'

const MessageSection = styled.div`
    background-color: greenyellow;
    border-radius: 5px;
    text-align: left;
    padding-left: 0.5vw;
    margin-left: 1vw;
    margin-right: 1vw;
    
    .UserSection {
        font-weight: bold;
        margin-right: 8px;
    }
`

function Message(props) {
    return (
        <MessageSection>
            <p className='UserSection'>{props.user}</p>
            <p>{props.message}</p>   
        </MessageSection>
    )
}

export default Message