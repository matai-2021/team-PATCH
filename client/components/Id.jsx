import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getDetailsById } from '../apiClient'

function Id () {
  const [pokemon, setPokemon] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getDetailsById(id)
      .then(pokemon => {
        setPokemon(pokemon)
        return null
      })
      .catch(err => console.error(err))
  }, [id])

  return (
    <div style={{ backgroundImage: 'url("img/wallpaper-dusk.png")' }} className="h-screen">
      <div className="p-3 font-bold text-xl font-gameboy">
        <Link to="/"><h2>👈 Home</h2></Link>
        <Link to="/pokedex"><h2>👈 Pokedex</h2></Link>
      </div>
      <div className="py-20 px-60">
        <div className="grid grid-cols-3 gap-4 bg-white shadow-2xl pxl-border md:flex m-12 font-pokemon">
          <div className="h-72 w-72">
          <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name}
               className="p-1 rounded-t-lg md:rounded-l-lg md:rounded-t-none"/>
          </div>
          <div className="p-6">
            <h1
              className="font-bold text-lg md:text-3xl mb-2 text-orange-700">No.{pokemon.id} - {String(pokemon.name).toUpperCase()}</h1>
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
            </ul>}
          </div>
          <div>
            <Link to={`/id/${pokemon.id + 1}`} replace
                  className="py-auto content-center items-center text-center justify-self-center font-bold text-3xl mb-2 text-gold filter drop-shadow-lg font-gameboy">Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Id
