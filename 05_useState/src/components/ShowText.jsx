import React, { useState } from "react";

const ShowText = () => {
  const [show, setShow] = useState(true);

  function toggleText() {
    setShow((prev) => !prev);
  }

  return (
    <div>
      <div>
        <h1>{show ? "Hii, I am Radhika" : ""}</h1>
        <button onClick={toggleText}>{show ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
};

export default ShowText;
