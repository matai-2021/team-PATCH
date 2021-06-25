import List from './List'
import React from 'react'
import Details from './Details'
import { Route } from 'react-router-dom'


const App = () => {
  return (
    <div className="p-4">
      <Route exact path ='/details' component={Details} />
      <Route exact path='/list' component={List}/>
    </div>
  )
}

export default App
