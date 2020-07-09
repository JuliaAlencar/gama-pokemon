import React from 'react';
import * as S from './styled'

export default function final(){
	return(
		<>
			<S.Titulo>PokeStore</S.Titulo>
			<S.Barrinha/>
			<S.Msg>Compra efetuada com sucesso!</S.Msg>
			<S.subMsg>Verifique em seu pokedex a inclusão dos novos pokémons comprados dentro das próximas 24h</S.subMsg>
		</>
	)
}