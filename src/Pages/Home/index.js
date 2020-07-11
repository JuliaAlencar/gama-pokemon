import React, { useState } from 'react';
import axios from 'axios';
import  * as S from './styled'

function App() {
  const [ pesquisa, setPesquisa ] = useState('');

  var pagina = 0;
  
  document.addEventListener("DOMContentLoaded", function() {
    renderEverything();
  });

  function renderEverything(){
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchKantoPokemon();
  }

  function fetchKantoPokemon(){
		pagina=pagina+1;
      fetch('https://pokeapi.co/api/v2/pokemon/?offset=${pagina*20}&limit=${20+pagina*20}')
      .then(response => response.json())
      .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
          fetchPokemonData(pokemon);
        })
    });
    console.log(pagina);
  }

  function fetchPokemonData(pokemon){
    let url = pokemon.url
    fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
        renderPokemon(pokeData)
      })
  }

  function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div")
    pokeContainer.classList.add('ui','card');

    let pokeImage = document.createElement('img')
    pokeImage.innerText = createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name
    
    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `R$ ${pokeData.id},00`
    
    let pokeTypes = document.createElement('ul') 
    createTypes(pokeData.types, pokeTypes) 
    
    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
    allPokemonContainer.appendChild(pokeContainer);
  }

  function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
  }  

  function createTypes(types, ul){
    types.forEach(function(type){
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    ul.append(typeLi)
    })
  }

  return (
    <>
    	<S.Titulo>PokeStore</S.Titulo>
    	<S.Barrinha/>
      <div id="barraPesq">
        <S.Pesquisa className="pesquisaInput" placeholder="Procurando um pokémon?" value ={pesquisa} onChange={e => setPesquisa(e.target.value)} />
      	<S.buttonPesquisa type="button" onClick={fetchKantoPokemon}>Go!</S.buttonPesquisa>
      </div>
      <div id="corpo">
        <div id="poke-container">
        </div>      
        <div id="pokedex">
          <h1 id="sideTitulo">Pokedex</h1>
          <hr/>
          <div id="totalCompra">
            <p>Total:</p>
            <p>${0}</p>
          </div>
          <button id="finalizar">Finalizar compra</button>
        </div>
      </div>
    </>
  );
}

export default App;
