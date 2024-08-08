import { useEffect, useRef } from "react";
import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [specialcharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (specialcharAllowed) str += "!@#$%^&*-_+=[]{}~";
    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1);
      pass += str[idx];
    }
    setPassword(pass);
  }, [length, numAllowed, specialcharAllowed, setPassword]);

  // useRef
  const passwordRef = useRef(null);
  const copyClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, specialcharAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full h-screen justify-center ">
        <div className="bg-gray-400 my-8 mx-40 py-4">
          <h1 className="text-3xl my-4 text-center font-bold">
            Password Generator
          </h1>
          <div className="text-center my-4">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              className="w-1/2 rounded py-1 px-4 text-2xl"
              ref={passwordRef}
            />
            <button
              onClick={copyClipboard}
              className="bg-blue-700 rounded text-white py-1 px-4 text-2xl"
              style={{}}
            >
              Copy
            </button>
          </div>

          <div className="flex text-sm gap-x-2 justify-center">
            <div className="flex items-center text-center gap-x-1">
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="text-xl font-medium mr-4 ml-2">
                Length: {length}
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={numAllowed}
                onChange={() => {
                  setnumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput" className="text-xl font-medium mr-4">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="characterInput"
                defaultChecked={specialcharAllowed}
                onChange={() => {
                  setSpecialCharAllowed((prev) => !prev);
                }}
              />
              <label
                htmlFor="characterInput"
                className="text-xl font-medium mr-4"
              >
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
