import { useState } from "react";

import "./App.css";
import AddTodo from "./componant/addTodo";
import Todos from "./componant/Todos";

function App() {
  return (
    <>
      <h1>This redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
