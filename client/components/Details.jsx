import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import getPokeDetailById from '../apiDetails'



function Details () {
  // console.log(getPokeDetailById('charmander'))

  const [pokemon, setPokemon] = useState({})
  const { name } = useParams()

  // const pokeObj = getPokeDetailById(name)

  useEffect(() => {
    getPokeDetailById(name)
    .then(pokemon => {
      // console.log('pokemon', pokemon)
      setPokemon(pokemon)
      return null
    })
    .catch(err => {
      console.error(err)
    })
  }, [name])

pokemon.id && console.log(pokemon)

   return (
    //  pokemon.id && 
      <div>
      <Link to="/">Go Home !</Link>
      <h1>#{pokemon.id}</h1>
      <h1>{pokemon.name}</h1>
      <img src={`http://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} />
      <h1>{pokemon.weight} pokegrams</h1>
      <h1>{pokemon.height} pokemetres</h1>
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