import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 0;

  let [count, setCount] = useState(0);


  const addValue = () => {
    setCount(count + 1);
  };

  const subValue = () =>{
    setCount(count - 1);
  };


  return (
    <>
      <h1> Counter app using react and vite </h1>

      <h4> count = {count}</h4>

      <button
      onClick={addValue}
      >Add</button>
      <br></br>
      <br></br>
      <button onClick={subValue}>Subtract</button>
    </>
  )
}

function Increment(){

}

export default App
