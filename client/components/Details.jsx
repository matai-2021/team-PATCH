import React, { useParams, useState, useEffect } from 'react'

import getPokeDetailById from '../apiDetails'



function Details () {
  // console.log(getPokeDetailById('charmander'))

  const [pokemon, setPokemon] = useState([])

  const pokeObj = getPokeDetailById('bulbasaur')

  useEffect(() => {
    getPokeDetailById('bulbasaur')
    .then(pokemon => {
      // console.log('pokemon', pokemon)
      setPokemon(pokemon)
      return null
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

pokemon.id && console.log(pokemon)

   return (
    //  pokemon.id && 
      <div>
      <h1>#{pokemon.id}</h1>
      <h1>{pokemon.name}</h1>
      <img src={`http://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} />
      <h1>{pokemon.weight}poke grams</h1>
      <h1>{pokemon.height}poke metres</h1>
      <h1>Types:</h1>
      {pokemon.id &&
        <ul>
      {pokemon.types.map(type => {
        return (
            <li key={type.type.name}>
              {type.type.name}
            </li>
        )
      })}
      </ul>
    }
      </div>
     
   )
}

export default Details