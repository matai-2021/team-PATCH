import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import List from './components/List'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <List/>,
    document.getElementById('app')
  )
})
