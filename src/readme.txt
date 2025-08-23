
function Fruit(name){
    alert(name)
  }

function App(){
  function callFun(){
    alert("function called")
  }
  // function Fruit(name){
  //   alert(name)
  // }

  return (
  <div>
    <h1 > Event and Function call</h1>
    <button onClick= {callFun}>click me</button>
    <button onClick= {()=>{Fruit("apple")}}>apple</button>
    <button onClick= {()=>{Fruit("banana")}}>banana</button>
  </div>
)
}



export default App;

//. State in React Js

• State is a container to store data like variable
• This is mutable and dynamic
• We have to import it when we want to use it
• It re-render component automatically so that data can visible on

import { useState } from "react";
import Counter from "./Coounter";

function App(){
  return(
    <div>
      < Counter />
    </div>
  )
}
export default App;

import { useState } from "react";

const Counter=()=> {
    const [count,setCount] = useState(0);
    const [Rcount,setRCount] = useState(10);
    return (
        <div>
            <h1>Counter:{count}</h1>
            <h1>RCounter:{Rcount}</h1>
            <button onClick={()=>setCount(count+1)}>Updater Counter</button> <br />
            <button onClick={()=>setRCount(Rcount-1)}>Updater RCounter</button>
        </div>
    )
}
export default Counter;


