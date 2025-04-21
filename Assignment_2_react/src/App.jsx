import { useState } from 'react'
import './App.css'
import FuntionalComonent from './ClassComponent'

function App() {
  const [count, setCount] = useState(0)
  const students = [
    { name: "Anubhav", marks: { Math: 85, Science: 78, English: 92 } },
    { name: "Nitin", marks: { Math: 74, Science: 88, English: 81 } },
    { name: "Sohel", marks: { Math: 90, Science: 91, English: 85 } },
    { name: "Akhilesh", marks: { Math: 66, Science: 72, English: 78 } },
    { name: "Akhil", marks: { Math: 95, Science: 89, English: 94 } },
    { name: "Shiva", marks: { Math: 82, Science: 76, English: 88 } },
    { name: "Abhishek", marks: { Math: 70, Science: 68, English: 75 } },
    { name: "Pawan", marks: { Math: 88, Science: 84, English: 90 } },
    { name: "Irfan", marks: { Math: 76, Science: 80, English: 79 } },
    { name: "Rahul", marks: { Math: 92, Science: 95, English: 91 } }
  ];
  

  return (
    <>
    <h1>Student details</h1>
     <FuntionalComonent students={students}></FuntionalComonent>
    </>
  )
}

export default App
