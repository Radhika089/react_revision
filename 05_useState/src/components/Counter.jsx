import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function incre() {
    setCount((prev) => prev + 1);
  }
  function decre() {
    if (count > 0) {
      return setCount(count - 1);
    }
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={incre}
          style={{
            padding: "8px",
            margin: "10px",
            background: "#22c55e",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
          Increment
        </button>
        <button
          onClick={decre}
          disabled={count === 0}
          style={{
            padding: "8px",
            margin: "10px",
            background: "#ef4444",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: count === 0 ? "not-allowed" : "pointer",
          }}>
          Decrement
        </button>
        <button
          onClick={reset}
          style={{
            padding: "8px",
            margin: "10px",
            background: "#6b7280",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
