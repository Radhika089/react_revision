import React from "react";

const Button = () => {
  function changeText() {
    console.log("Hi");
  }

  return (
    <div>
      <h1>Button</h1>
      <button onClick={changeText}>Click me</button>
    </div>
  );
};

export default Button;
