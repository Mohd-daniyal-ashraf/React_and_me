import React from "react";

function Btn({ color, fun }) {
  return (
    <button
      className="outline outline-2 px-4 py-1 rounded-xl m-2 text-base font-medium"
      onClick={() => fun(color)}
      style={{ backgroundColor: color, color: "white" }}
    >
      {color}
    </button>
  );
}

export default Btn;
