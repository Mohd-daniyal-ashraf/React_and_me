import React from "react";

function Button({
  chilren,
  type = "button",
  classname = "",
  textColor = "text-white",
  bgColor = "bg-blue-600",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 ${bgColor} ${textColor}` % { classname }}
      {...props}
    >
      {chilren}
    </button>
  );
}

export default Button;
