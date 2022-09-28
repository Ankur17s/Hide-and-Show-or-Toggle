import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [state, setState] = useState(true)
  return (
    <div>
      <button onClick={() => setState(true)}>Show</button>
      <button onClick={() => setState(false)}>Hide</button>
      <button onClick={() => setState(!state)}>Toggle</button>
     {
       state ? <h2>hello React</h2> : null
     } 
    </div>
  );
}
