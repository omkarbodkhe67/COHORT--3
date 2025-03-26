import React from 'react'
import { useState } from 'react'

const demo = () => {
    const [count,setCount]= useState(0);
        function Incr(){
           
          setCount(count+1)
    
        }
     
        function Decr(){
           
          setCount(count-1 )
    
        }
         function resetCount(){
           setCount(0)
         }
  return (
    <div>

<div>

     
<p> Count: {count}</p>
<button onClick ={Incr}>Increment</button>
<button onClick ={Decr}>Dercrement</button>
<button onClick ={resetCount}>Reset</button>

</div>
    </div>
  )
}

export default demo