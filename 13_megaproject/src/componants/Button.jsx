import React from "react";

function Button({
  children,
  type = "button",
  classname = "",
  textColor = "text-white",
  bgColor = "bg-blue-600",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${classname} `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
