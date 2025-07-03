import { useState } from 'react';

function Counter() {
    const [count,setCount] = useState(0);


    return (
       <div>
       <h2>Count: {count}</h2>
       <button className="btn" onClick={() => setCount(count+1)}>Increment</button>
        <button className="btn" onClick={() => setCount(count-1)}>Decrement</button>
         <button className="btn" onClick={() => setCount(0)}>Reset</button>
       </div> 
      
    );
}
//usestate - hook
//add state - data that changes over time
//class - stateful, funtional - stateless
//funtional components 
//hook its is a special function that let as hook into react function

export default Counter