import { useEffect, useState } from 'react'

import './App.css'
import Linked from './Linked'
import Feed from './Feed';


function App() {
    // const [count ,setCount] = useState(1);
    // const [count2 ,setCount2] = useState(1);
    //  function inCount(){
    //    setCount(currentValue=> currentValue+1) }
      
    //    function deCount(){
    //      setCount2(currentValue=>currentValue-1)
    //    }


    //   useEffect (function(){
    //      setInterval( inCount,1000);
    //      setInterval(deCount,1000)
    //   },[])

    //    useEffect (function() {
    //      console.log("the count has been updated to " + count);
    //     },[count]);

   return (

     <div style={{display:"flex"}}>
   
    {/* <Feed/> */}
     {/* <Linked/> */}

      <Carde children={"hi there"}/>
      <Carde  children={ <div style={{color:"green"}}>What do youo want to post  <br /> <br /> <input type={"text"}/></div>}/>
     
      </div>
   )
}function Carde({ children }) {
    return (
      <div style={{ background: "black", borderRadius: 10, color: "white", padding:10,margin:10 }}>
        {children}
      </div>
    );
  }
export default App
