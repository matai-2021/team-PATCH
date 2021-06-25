import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="text-center content-center justify-center items-center overflow-hidden p-4">
        <img src="logo.svg" alt="pokemon logo" className="filter drop-shadow-md mx-auto mt-16 flex" width="600px"/>
        {/* <button className="bg-gray-400 rounded mt-8 p-4 bg-red-600 rounded-full">Go!</button> */}
        <Link to="/list">
          <button
            className="mt-16 filter drop-shadow-md hover:drop-shadow-xl rounded-full w-44 w- h-44 justify-center items-center overflow-hidden  transition duration-200 ease-in-out transform hover:scale-110">
            <img src="pokeball.svg" alt="pokeball button" className="hover:animate-wiggle"/>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
