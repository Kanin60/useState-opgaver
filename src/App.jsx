import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] =useState('')
  
  return (
    <div>
      <p>{name}</p>
      <input placeholder={"Skriv dit navn her"} value={name} onChange={(event) => setName(event.target.value)} />
    </div>
  )
}

export default App
