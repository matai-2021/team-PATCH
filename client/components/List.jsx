import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getAllPokemon } from '../apiClient'

const List = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getAllPokemon()
      .then((pokemonList) => {
        setPokemonList(pokemonList)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div style={{ backgroundImage: 'url("img/grass.png")' }}>
      <div className="p-3 font-bold text-xl font-pokemon">
        <Link to="/"><h2>👈 Home</h2></Link>
      </div>
      <div className="text-center content-center justify-center items-center overflow-hidden p-4">
        <img src="img/pokedex.png" alt="pokedex" className="filter drop-shadow-md mx-auto flex" width="800px"/>
      </div>
      <div className="grid md:grid-cols-1 md:gap-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
        {pokemonList.map(item => (
          <div key={item.name} className="p-4 justify-center justify-items-center content-center text-center">
            <div className="md:flex justify-center justify-items-center content-center text-center">
              <img src={`https://www.smogon.com/dex/media/sprites/xy/${item.name}.gif`} alt={item.name} className="filter drop-shadow-lg h-36 w-36 p-1 justify-self-center" />
              <div className="p-6 content-center text-center flex flex-wrap">
                <Link to={`/details/${item.name}`} className="py-auto content-center items-center text-center justify-self-center font-bold text-3xl mb-2 text-gold filter drop-shadow-lg font-pokemon">{item.name.toUpperCase()}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
