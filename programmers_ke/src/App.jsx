import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-purple-700">
      <h1>Hello World</h1>
    </div>
  )
}

export default App
