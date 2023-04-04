
import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState, useEffect } from "react"
import Navbar from './Navbar';





function App() {



  let [pokemonIndex, setPokemonIndex] = useState(0);
  

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


  let pokemon = {
    name: pokemonList[pokemonIndex].name,
    imgSrc: pokemonList[pokemonIndex].imgSrc,
  }
  
  useEffect(
    () => {
      alert("Hello Pokemon Trainer");
    },
    []
  )

  return (
    <div className="App">
      <PokemonCard
        name={pokemon.name}
        imgSrc={pokemon.imgSrc}
      />
      <Navbar
      pokemonIndex = {pokemonIndex}
      pokemonList = {pokemonList}
      setPokemonIndex = {setPokemonIndex}
      
      
      />
      

       </div>
       );
        }



export default App



