import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="h-52 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>

        <p className="text-gray-500 text-sm mt-1">{product.description}</p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price}
          </span>

          {/* You will connect this */}
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
