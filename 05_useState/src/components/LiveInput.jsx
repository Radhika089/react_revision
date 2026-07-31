import React, { useState } from "react";

const LiveInput = () => {
  const [input, setInput] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={input}
        style={{ padding: "5px" }}
        onChange={inputChange}
      />
      <h2>Hello,{input}</h2>
    </div>
  );
};

export default LiveInput;
