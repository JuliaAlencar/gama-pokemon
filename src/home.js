import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Final from './Pages/Final/final';

function App() {
  const [ pesquisa, setPesquisa ] = useState('');
  
  function handlePesquisa(){
  		axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`).then(response => console.log(response.data));
    }

  return (
    <>
    	<h1>PokeStore</h1>
    	<input className="pesquisaInput" placeholder="Procurando um pokémon?" value ={pesquisa} onChange={e => setPesquisa(e.target.value)} />
    	<button type="button" onClick={handlePesquisa}>Go!</button>
    </>
  );
}

export default App;
