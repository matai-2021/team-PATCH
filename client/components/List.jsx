import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getPokemonData } from '../apiList'

const List = () => {
  const [pokemonList, setPokemonList] = useState([])

  //          <Link to={`/details/${item.name}`}>{item.name.toUpperCase()}</Link>
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
    <div style={{ backgroundImage: 'url("/grass.png")' }}>
      <div className="p-3 font-bold text-xl">
        <Link to="/"><h2>👈 Home</h2></Link>
      </div>
      <div className="text-center content-center justify-center items-center overflow-hidden p-4">
        <img src="pokedex.png" alt="pokedex" className="filter drop-shadow-md mx-auto flex" width="800px"/>
        <div className="p-4">
          <div className=" p-4 rounded-2xl">
            <div className="grid grid-cols-3 gap-4">
              {pokemonList.map(item => (
                <div key={item.name} className="p-4 bg-orange-200">
                  <div className="bg-white rounded-lg shadow-xl border-2 border-green-800 md:flex">
                    <img src={`https://www.smogon.com/dex/media/sprites/xy/${item.name}.gif`} alt={item.name} className="h-36 w-36 p-1 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                    <div className="p-6">
                      <Link to={`/details/${item.name}`} className="font-bold text-lg md:text-3xl mb-2 text-orange-700">{item.name.toUpperCase()}</Link>
                    </div>
                  </div>
                </div>

              ))}
            </div>

            {/* <li key={item.name}> */}
            {/*  /!* <img src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`} width="34px" alt={item.name}/> *!/ */}
            {/*  <img src={`https://www.smogon.com/dex/media/sprites/xy/${item.name}.gif`} alt={item.name}/> */}
            {/*   <a href={`/${item.name}`}>{item.name.toUpperCase()}</a></li> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default List
