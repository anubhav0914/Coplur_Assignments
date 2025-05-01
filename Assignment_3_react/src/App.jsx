import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Table from './Components/Table'
import User from './Components/User'
import Calculator from './Components/Calculator'

function App() {
  const students = [
    { name: "Anubhav", marks: { Math: 85, Science: 78, English: 92 } },
    { name: "Nitin", marks: { Math: 74, Science: 88, English: 81 } },
    { name: "Sohel", marks: { Math: 90, Science: 91, English: 85 } },
    { name: "Akhilesh", marks: { Math: 66, Science: 72, English: 78 } },
    { name: "Akhil", marks: { Math: 53, Science: 58, English: 44 } },
    { name: "Shiva", marks: { Math: 82, Science: 76, English: 88 } },
    { name: "Abhishek", marks: { Math: 70, Science: 68, English: 75 } },
    { name: "Pawan", marks: { Math: 88, Science: 84, English: 90 } },
    { name: "Irfan", marks: { Math: 16, Science: 23, English: 34 } },
    { name: "Rahul", marks: { Math: 29, Science: 25, English: 21 } }
  ];

  return (
    <>
      <Header></Header>
      <Table StudentData ={students}></Table>
      <User></User>
      <Calculator></Calculator>
    </>
  )
}

export default App
