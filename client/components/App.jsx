import React, { useEffect, useState } from 'react'
import { getGreeting } from '../apiClient'

const App = () => {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
      })
  }, [count])

  return (
    <div className="text-center content-center justify-center items-center overflow-hidden p-4">
      <img src="logo.svg" alt="pokemon logo" className="mx-auto mt-8 flex" width="600px"/>
      {/* <button className="bg-gray-400 rounded mt-8 p-4 bg-red-600 rounded-full">Go!</button> */}
      <button className="filter drop-shadow-md hover:drop-shadow-xl rounded-full w-1/12 h-1/12 justify-center items-center overflow-hidden  transition duration-200 ease-in-out transform hover:scale-110">
        <img src="pokeball.svg" alt="pokeball button" className=""/>
      </button>
    </div>
  )
}

export default App
