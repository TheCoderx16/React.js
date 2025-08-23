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