import { useState } from 'react'
import './App.css'
import UseStateDive from "./useStateDive";

function App() {

 let [value, setValue] = useState(0);

 function addOne() {
  setValue(value++);
 }

  return (
    <div>
     <p>React hooks - Deep Dive</p>
     <UseStateDive />
    </div>
  );
}

export default App;
