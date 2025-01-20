import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; // or wherever your tailwind styles are located


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="bg-green-500 p-4 text-white">
  Tailwind is working!
</div>

    </>
  )
}

export default App
