import List from './List'
import Home from './Home'
import React from 'react'
import Id from './Id'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/id/:id" component={Id}/>
      <Route exact path="/pokedex" component={List}/>
    </div>
  )
}

export default App
