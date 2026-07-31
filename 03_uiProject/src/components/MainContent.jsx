import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

const MainContent = () => {
  return (
    <div className="flex-1 bg-[#f4e4e5] min-h-screen p-9 rounded-l-2xl">
      <Navbar />
      <Banner />
    </div>
  );
};

export default MainContent;
