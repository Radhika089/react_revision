import React from "react";

const CategoryFilter = ({ category, setCategory }) => {
  const categories = ["All", "Electronics", "Fashion", "Home"];

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((item) => (
        <button
          onClick={() => (item === "All" ? setCategory("") : setCategory(item))}
          key={item}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            (item === "All" && category === "") || item === category
              ? "bg-black text-white"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
          }`}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
