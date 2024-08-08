import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://googal.com",
//     target: "_blank",
//   },
//   childern: "Click here",
// };
let a = 3 + 2;
const cusreact = React.createElement(
  "a", // tag
  {// Attribute
    href: "https://googal.com",
    target: "_blank",
  },
  "click me", // Text
  a // Expression
);
ReactDOM.createRoot(document.getElementById("root")).render(cusreact);
