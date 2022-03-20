
import { useState } from 'react';
import './App.css';
import UseEffect1 from './components/UseEffect1';
import UseEffect2 from './components/UseEffect2';
import UseEffect3 from './components/UseEffect3';
import UseEffect4 from './components/UseEffect4';

function App() {
  const[showComponent,setShowComponent]=useState(true)
  return (
    <div className="App">
     {/* <UseEffect1/> */}
     <button onClick={()=>{
       setShowComponent(!showComponent)
     }}>{showComponent?'Hide':'Show'} Component</button>
     {/* {showComponent?<UseEffect2/>:null}
     <UseEffect3/> */}
     <UseEffect4 showComponent={showComponent}/>
    </div>
  );
}

export default App;
