import React from 'react'
import { useState } from 'react'

const Test = () => {
     const [counter, setCounter] = useState(0);
      
     function Increment(){
        setCounter(counter+1);

     }
     function Decrement(){
        setCounter(counter-1);

     }
      function Restart(){
        setCounter(0)

      }
     

  return (
    <>
    
     <h1 > counter = {counter}</h1>

     <button onClick={Increment}> Increment</button>
     <button onClick={Decrement}>Decrement</button>
     <button onClick={Restart}>Restart</button>
    
    
    </>
  )
}

export default Test