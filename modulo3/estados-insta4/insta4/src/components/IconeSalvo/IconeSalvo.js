import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div `
    display: flex;

	.IconImage {
		margin-right: 5px;
	}
`


export function IconeSalvo(props) {
	return <IconContainer>
		<img className ='IconImage' alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</IconContainer>
}
