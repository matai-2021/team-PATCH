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
      <div className="text-center content-center justify-center items-center overflow-hidden p-4">
        <img src="pokedex.png" alt="pokedex" className="filter drop-shadow-md mx-auto flex" width="800px"/>
        <div className="p-4">
          <div
            className=" py-10 bg-gray-200 rounded-2xl">

            <div className="grid grid-cols-3 gap-4">
              {pokemonList.map(item => (

                // <div className="w-full lg:w-1/2 p-3">
                //   <div
                //     className="flex flex-col lg:flex-row rounded overflow-hidden w-1/2 h-1/2 border shadow shadow-lg">
                //     <img className="block h-auto w-full  flex-none bg-cover "
                //          src={`https://www.smogon.com/dex/media/sprites/xy/${item.name}.gif`}/>
                //     <div
                //       className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                //       <div className="text-black font-bold text-xl mb-2 leading-tight">
                //         Can life make you a bitter developer?
                //       </div>
                //     </div>
                //   </div>
                // </div>

                <div key={item.name} className="p-4 bg-orange-200">
                  <div className="bg-white rounded-lg shadow-xl md:flex">
                    <img src={`https://www.smogon.com/dex/media/sprites/xy/${item.name}.gif`} alt={item.name} className="h-36 w-36 p-1 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                    <div className="p-6">
                      <h3 className="font-bold text-lg md:text-3xl mb-2 text-orange-700">{item.name.toUpperCase()}</h3>
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
    </>
  )
}

export default List

