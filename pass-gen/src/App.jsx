import { useState, useCallback } from 'react';
import './App.css';
import './index.css';

function App() {
  const [l, setL] = useState(8); // Default password length
  const [numbAllow, setNumbAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, SetPass] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbAllow) str += "0123456789";
    if (charAllow) str += "~!@#$%^&*()_+-=";

    for (let i = 0; i < l; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    SetPass(pass);
  }, [l, numbAllow, charAllow]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="container text-center mt-5">
        <div className="settings">
          <label className="block text-white mt-2">
            Password Length: 
            <input
              type="number"
              value={l}
              onChange={(e) => setL(Number(e.target.value))}
              min="1"
              max="20"
              className="ml-2 p-1 rounded"
            />
          </label>
          <label className="block text-white mt-2">
            Include Numbers:
            <input
              type="checkbox"
              checked={numbAllow}
              onChange={(e) => setNumbAllow(e.target.checked)}
              className="ml-2"
            />
          </label>
          <label className="block text-white mt-2">
            Include Special Characters:
            <input
              type="checkbox"
              checked={charAllow}
              onChange={(e) => setCharAllow(e.target.checked)}
              className="ml-2"
            />
          </label>
        </div>
        <button
          onClick={passwordGenerator}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Generate Password
        </button>
        <div className="mt-4">
          <p className="text-white">Generated Password:</p>
          <p className="text-lg text-yellow-300 font-bold">{pass || "Your password will appear here"}</p>
        </div>
      </div>
    </>
  );
}

export default App;
