import { useState } from "react";
import Btn from "./Button";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full flex h-screen duration-300 justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex ml-8 mr-8 flex-wrap rounded-xl justify-center shadow-lg px-2 py-.5  bottom-12 inset-x-0 px-2 otline-2 bg-white">
          <Btn color={"Black"} fun={setColor} />
          <Btn color={"Blue"} fun={setColor} />
          <Btn color={"Red"} fun={setColor} />
          <Btn color={"Yellow"} fun={setColor} />
          <Btn color={"Green"} fun={setColor} />
          <Btn color={"Skyblue"} fun={setColor} />
          <Btn color={"Orange"} fun={setColor} />
          <Btn color={"#123422"} fun={setColor} />
        </div>
      </div>
    </>
  );
}

export default App;
