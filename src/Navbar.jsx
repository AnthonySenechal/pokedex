import React from "react";
import { useState } from "react";





function Navbar({ pokemonList, pokemonIndex, setPokemonIndex }) {
  function handleClick() {
    setPokemonIndex(pokemonIndex + 1);
  }

  function handleClickPrevious() {
    setPokemonIndex(pokemonIndex - 1);
  }
  return (
    <div>
      {pokemonList[pokemonIndex].name == 'pikachu' && alert("pika pikachu !!")  }
      {pokemonIndex <= 0 ? (
        <display:none></display:none>
      ) : (
        <button onClick={handleClickPrevious}>Previous</button>
      )
      }
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClick}>Next</button>
      ) : (
        <display:none></display:none>
      )
      }

    </div>
  )
}

export default Navbar