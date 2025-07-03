


import { useState } from 'react';
import './App.css';
import Counter from './counter';

function App() {
   const[darkMode, setDarkMode]= useState(false);
   const [showContent, setShowContent] = useState(false);
   const [name, setName] = useState("");

  return (
    <div className = {darkMode ?  'container dark' : 'container light'}>
      <button className={showContent ? 'off-btn' : 'on-btn'}
        onClick={() => setShowContent(!showContent)}>
        {showContent ? "Dont show text" : "Show Text"}
        </button>

        {showContent && (
          <>
       <h1>Click Counter App</h1>
       <input 
       type="text"
       placeholder='Enter your name'
       value={name}
       onChange={(e)=>setName(e.target.value)}/>
       <p>Hello,{name? name:"User"}</p>
       <Counter/>


       <button className="btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'switch to Light Mode' : 'Switch to darkMode'}
       </button>
       </>
        )}
   </div>    
  );
}

export default App;

//Two way binding - changes in the ui(like form inputs) update the components the component state.



