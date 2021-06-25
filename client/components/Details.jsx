import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-xl border-2 border-green-800 md:flex m-12">
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

      {/* <h1>#{pokemon.id}</h1> */}
      {/* <h1>{pokemon.name}</h1> */}
      {/* <img src={`http://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}/> */}
      {/* <h1>{pokemon.weight} pokegrams</h1> */}
      {/* <h1>{pokemon.height} pokemetres</h1> */}
      {/* <h1>Types:</h1> */}
      {/* {pokemon.id && */}
      {/* <ul> */}
      {/*  {pokemon.types.map(type => { */}
      {/*    return ( */}
      {/*      <li key={type.type.name}> */}
      {/*        {type.type.name} */}
      {/*      </li> */}
      {/*    ) */}
      {/*  })} */}
      {/* </ul> */}
      {/* } */}
    </div>

  )
}

export default Details
