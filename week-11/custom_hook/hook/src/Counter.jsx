import { useState } from 'react'

function useCounter(){
const[count,setCount] = useState(0);

   function increaseCount(){
     setCount(count + 1)

   }
    return {
      count:count,
      increaseCount:increaseCount
    }

 }

const Counter = () => {
    return (
        <>
         {/* <button onClick={increaseCount}>Increase {count} </button> */}
          
          <Counterr/>
          <Counterr/>
          <Counterr/>
          <Counterr/>
          <Counterr/>
         
        </>
      )
    }
     function Counterr(){
       const {count,increaseCount}= useCounter();
       return  (
         <div>
    
          <button onClick={increaseCount}>Increase {count}</button>
         </div> );
     }

export default Counter