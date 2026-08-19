import React from "react";

const CategoryFilter = () => {
  const categories = ["All", "Electronics", "Fashion", "Home"];

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            category === "All"
              ? "bg-black text-white"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
          }`}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
