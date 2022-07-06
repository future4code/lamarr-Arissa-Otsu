import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div `
    display: flex;
    justify-content: center;
    padding: 5px;

	.InputComentario {
		width: 100%;
		margin-right: 5px;
	}
`

export function SecaoComentario(props) {
	return (
		<CommentContainer>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={props.texto}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}