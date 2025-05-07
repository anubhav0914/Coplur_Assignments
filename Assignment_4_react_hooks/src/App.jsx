import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayingCounter from './Components/DisplayingCounter'
import ControlledComponent from './Components/ControlledComponent'
import UncontrolledComponent from './Components/UncontrolledComponent'


function App() {


  return (
    <>
      <DisplayingCounter></DisplayingCounter>
      <ControlledComponent></ControlledComponent>
      <UncontrolledComponent></UncontrolledComponent>
    </>
  )
}


export default App
