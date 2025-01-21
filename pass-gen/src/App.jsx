import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {

  const [l, setl] = useState(0);
  const [numbAllow, setNumbAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, SetPass] = useState("");

  const passwordGenerator = () => {

  }

  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App