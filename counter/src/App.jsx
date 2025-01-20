import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 0;

  let [add, setAdd] = useState(0);
  let [sub, setSub] = useState(0);


  const addValue = () => {
    setAdd(add + 1);
  };

  return (
    <>
      <h1> Counter app using react and vite </h1>

      <h4> count = {add}</h4>

      <button
      onClick={addValue}
      >Add</button>
      <br></br>
      <br></br>
      <button>Subtract</button>
    </>
  )
}

function Increment(){

}

export default App
