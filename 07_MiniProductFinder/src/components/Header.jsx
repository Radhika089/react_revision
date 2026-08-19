import React from "react";
import { Heart, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between gap-5">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mini Finder</h1>

            <p className="text-sm text-gray-500">Find products you'll love</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="w-64 border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>

            <button className="relative p-2.5 rounded-xl border border-gray-200 hover:bg-gray-50">
              <Heart size={20} />

              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="relative mt-4 sm:hidden">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
