
import React, { useRef } from 'react'
 function UseDebounce(originalFn){
     const currentClock = useRef();

      const fn =()=>{
         clearTimeout(currentClock.current);
         currentClock.current=setTimeout(originalFn,200);
      }
       return fn
 }

const UseDebounceHook = () => {
     function sendDataToBackend(){
         fetch("api.amazon.com/search/");
     }
      const debouncedFn = UseDebounce(sendDataToBackend)
  return (
    <div>
<h1> UseDebounce</h1>
 <input type='text'onChange={debouncedFn}></input>



    </div>
  )
}

export default UseDebounceHook