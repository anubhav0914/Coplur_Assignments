import React, { useEffect, useState } from 'react'

export default function DisplayingCounter() {
   
    
    
    const [counter,setCounter] = useState(0);
    const [sec,setSec] = useState(0);

    useEffect(()=>{
        
        setTimeout(()=>{
           setCounter(counter+1);
        },5000);
        

    },[counter]);

    useEffect(()=>{
        setTimeout(()=>{
            setSec(sec+1);
         },1000);
    })
    
    return (
    <div>
      <h1> Second Counter Incresing in every 5 second  </h1> 
      <h1> {counter} </h1> 
      <h1>  </h1>
      <h1> Second Count Down </h1> 
      <h1>{sec}</h1>
    </div>
  )
}

