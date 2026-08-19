import React from "react";
import { Heart } from "lucide-react";

const ProductCard = ({ product, toggleFavorite, favorites }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative h-56 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
          <Heart
            size={19}
            fill={favorites.includes(product.id) ? "black" : "none"}
          />
        </button>
      </div>

      <div className="p-5">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {product.category}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 mt-1">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price}
          </span>

          <button className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
