import React from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="search"
          placeholder="Search for songs and artists..."
          className="w-80 rounded-full border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none focus:border-[#9e90dd] focus:ring-2 focus:ring-[#9e90dd]/30"
        />
      </div>

      <div className="flex items-center gap-6">
        <span className="rounded-full bg-white p-4 shadow-md transition-colors hover:bg-gray-100">
          <FaBell className="text-2xl text-[#9e90dd]" />
        </span>

        <span className="rounded-full bg-[#9e90dd] p-4 shadow-md transition-colors hover:bg-[#8d7bd8]">
          <FaUserCircle className="text-2xl text-white" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
