import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import getPokeDetailById from '../apiDetails'

function Details () {
  const [pokemon, setPokemon] = useState({})
  const { name } = useParams()

  useEffect(() => {
    getPokeDetailById(name)
      .then(pokemon => {
        setPokemon(pokemon)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [name])

  pokemon.id && console.log(pokemon)

  return (
    <>
      <div className="p-3 font-bold text-xl font-gameboy">
        <Link to="/"><h2>👈 Home</h2></Link>
        <Link to="/list"><h2>👈 Pokedex</h2></Link>
      </div>
      <div className="py-20 px-60">
        <div className="bg-white rounded-2xl shadow-2xl border-4 border-gold md:flex m-12 font-pokemon">
          <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name} className="h-60 w-60 p-1 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
          <div className="p-6">
            <h1 className="font-bold text-lg md:text-3xl mb-2 text-orange-700">#{pokemon.id} - {String(pokemon.name).toUpperCase()}</h1>
            <p>Pokegrams: {pokemon.weight}</p>
            <p>Pokemeters: {pokemon.height}</p>
            <p>Types:</p>
            {pokemon.id &&
            <ul>
              {pokemon.types.map(type => {
                return (
                  <li key={type.type.name}>
                    - {type.type.name}
                  </li>
                )
              })}
            </ul>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
