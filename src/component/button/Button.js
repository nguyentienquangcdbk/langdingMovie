import React from "react";
// import { Navigate } from "react-router-dom";

const Button = ({
  onclick,
  className,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";

      break;
    case "secondary":
      bgClassName = "bg-secondary";
    default:
      break;
  }
  return (
    <button
      onClick={onclick}
      className={`px-6 py-3 mt-auto ${bgClassName} bg-[#F62682] text-white rounded-lg w-full hover:bg-pink-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
