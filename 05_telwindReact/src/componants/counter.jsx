import React from "react";
import { useState } from "react";

function Count() {
  const [counter, setCounter] = useState(2);
  let addvalue = () => {
    if (counter < 10) {
      setCounter(counter + 1);
      setCounter(counter + 10);
      setCounter(counter + 2);
    }
  };
  let removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1 className="mb-4">Cunter : {counter} </h1>
      <button className="mb-4" onClick={addvalue}>
        UP
      </button>
      <br />
      <button onClick={removeValue}>down</button>
    </>
  );
}

export default Count;
