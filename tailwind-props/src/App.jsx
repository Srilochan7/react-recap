import { useState } from 'react';

import './App.css';
import './index.css'; // or wherever your Tailwind styles are located

import Card from './components/card.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-500 p-4 text-white">
        Tailwind is working!
      </div>
      <br></br>
      <br></br>
      
      <Card sub="Monkey NFT 1" price="$100" rate="0.11"/>

      <Card sub="Monkey NFT 2" price="$99" rate="0.10"   />

    </>
  );
}

export default App;
