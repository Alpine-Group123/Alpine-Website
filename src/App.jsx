import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1 className="text-center mt-5">Hello, Bootstrap!</h1>
      <button className="btn btn-primary">Click Me</button>
    </div>
  )
}

export default App
