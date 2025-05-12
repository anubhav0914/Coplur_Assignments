import { Component, useState } from 'react'
import './App.css'
import MainComponent from './Component/MainCopoenet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MainComponent></MainComponent>
      </div>
  
    </>
  )
}

export default App
