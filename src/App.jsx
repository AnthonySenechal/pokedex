
import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from "react";

function App() {
  let [pokemonIndex, setPokemonIndex] = useState (0);
    
  function handleClick () {
    setPokemonIndex(pokemonIndex + 1)}
    let pokemon = {
      name: pokemonList[pokemonIndex].name,
      imgSrc: pokemonList[pokemonIndex].imgSrc,
    }

  return (
    <div className="App">
      <PokemonCard 
      name = {pokemon.name}
      imgSrc = {pokemon.imgSrc}
      />
       <button onClick={handleClick}>next</button>
        

      
    </div>
  )
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


export default App



