import { useState } from "react";
import "./App.css";
import Card from "./componants/card";
import Count from "./componants/counter";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">This is me</h1>
      <Count />
    </>
  );
}

export default App;
