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
    <div className="p-4">
      {count}
      <h1 className="text-gray-800 text-3xl">{greeting}</h1>
      <h1 className="text-pink-600 text-3xl">If this is pink, tailwind is working</h1>
      <button className="bg-gray-400 rounded" onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default App
