import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'Counter - ' + count; // Corrected the template string usage
  }, [count]); // Added the dependency array to avoid unnecessary re-renders

  return (
    <>
      <h1>COUNTER = {count}</h1> {/* Corrected variable name from "counter" to "count" */}
      <button onClick={() => setCount(count + 1)}>Increment</button> {/* Fixed typo in "buton" */}
    </>
  );
}

export default App;
