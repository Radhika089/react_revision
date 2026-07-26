import React from "react";

const Header = () => {
  function inputChange(val) {
    console.log(val);
  }

  return (
    <div>
      <input type="text" onChange={(elem) => inputChange(elem.target.value)} />
    </div>
  );
};

export default Header;
