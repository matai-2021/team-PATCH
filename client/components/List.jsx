import React, { useEffect, useState } from 'react'
import { getPokemonData } from '../apiList'

const List = () => {
  const [pokemonList, setPokemonList] = useState([])
  // console.log(pokemonList)


  useEffect(() => {
    getPokemonData()
      .then((pokemonList) => {
        // console.log(pokemonList)
        setPokemonList(pokemonList)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <>
    <div className="p-4">
      <h1 className="text-gray-800 text-3xl">This is List.jsx</h1>
      <ul>
        {pokemonList.map(item => (
          console.log(item.name),
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default List
