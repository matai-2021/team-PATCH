import List from './List'
import Home from './Home'
import React, {useState} from 'react'
import Details from './Details'
import { Route } from 'react-router-dom'

const App = () => {
  const [currentPokemon, setCurentPokemon] = useState('charizard')
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path ='/details/:name' component={Details}/>
      <Route exact path="/list" component={List}/>
    </div>
  )
}

export default App
