import React, { useState } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState(true);

  const toggleMode = () => {
    setDark((prev) => !prev);
  };

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        width: "100%",
      }}>
      <h1 style={{ color: dark ? "white" : "black" }}>
        {dark ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </h1>
      <button onClick={toggleMode} style={{ padding: "5px" }}>
        {dark ? "light mode" : "dark mode"}
      </button>
    </div>
  );
};

export default DarkMode;
