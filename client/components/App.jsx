import React, { useEffect, useState } from 'react'
import { getGreeting } from '../apiClient'
import Details from './Details'
import { Route } from 'react-router-dom'

const App = () => {

  return (
    <div className="p-4">
      <h1 className="text-pink-600 text-3xl">If this is pink, tailwind is working</h1>
      <Route exact path ='/details' component={Details} />
    </div>
  )
}

export default App
