import List from './List'
import React, { useEffect, useState } from 'react'
import {Route} from 'react-router-dom'


const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-pink-600 text-3xl">If this is pink, tailwind is working</h1>
      <Route path='/list' component={List}/>
    </div>
  )
}

export default App
