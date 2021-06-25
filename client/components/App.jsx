import List from './List'
import React, {useState} from 'react'
import Details from './Details'
import { Route } from 'react-router-dom'


function getPokeParam (pokemonName) {
  setCurentPokemon(pokemonName)
}


const App = () => {
  const [currentPokemon, setCurentPokemon] = useState('charizard')
  return (
    <div className="p-4">
      <Route exact path ='/details/:name' component={Details}/>
      <Route exact path='/list' component={List}/>
    </div>
  )
}

export default App
