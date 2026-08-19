import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white shadow-sm p-3 h-20 mt-3">
      <div className="flex justify-around items-center">
        <h1 className="text-2xl font-bold ">Mini Finder</h1>
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by Products"
            className="outline-none border border-gray-400 rounded-xl py-2 px-6 pl-11"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
