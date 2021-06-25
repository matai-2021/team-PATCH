import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getPokemonData } from '../apiList'

const List = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getPokemonData()
      .then((pokemonList) => {
        setPokemonList(pokemonList)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-gray-800 text-3xl">This is List.jsx</h1>
      <ul>
        {pokemonList.map(item => (
              <div key={item.name}>
          <li ><img src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`} width='34px' /></li>
          <Link to={`/details/${item.name}`}>{item.name.toUpperCase()}</Link>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default List
