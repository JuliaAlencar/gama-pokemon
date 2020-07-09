import styled from 'styled-components';

export const Titulo = styled.h1`
width: 2rem;
height: 1rem;
left: 1rem;
top: 0px;
font-weight: normal;
font-size: 48px;
display: flex;
align-items: center;

color: #3E1D1D;
`;

export const Pesquisa = styled.input`
	position: relative;
	width: 50rem;
	height: 3rem;
	padding-left: 1rem;
	font-size: 16px;
	border: none;
	background: #F5F4F4;
	border-radius: 25px 0px 0px 25px;

	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const buttonPesquisa = styled.button`
	position: relative;
	width: 5rem;
	height: 3rem;
	
	border: none;
	background: #3B4CCA;
	color: white;
	font-size: 16px;
	border-radius: 0px 25px 25px 0px;

	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}	
`;

export const Barrinha = styled.hr`
	width: 100%;
	border-top: 5px solid #FFDE00;
`;

export const Card = styled.div`
	display: flex;
	width: 25%;
	box-shadow: 1px 1px 10px #ededed;
	margin-top: 10px;
	
	&:hover{
		
	}
`;
