import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200">
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900">{item.name}</h3>

            <p className="text-sm text-gray-500 mt-1">₹{item.price}</p>
          </div>

          {/* You will connect this */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-sm text-red-500 hover:text-red-700">
            Remove
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            {/* You will connect these */}
            <button
              className="w-8 h-8 hover:bg-gray-100"
              onClick={() => decreaseQuantity(item.id)}>
              −
            </button>

            <span className="w-10 text-center text-sm">{item.quantity}</span>

            <button
              className="w-8 h-8 hover:bg-gray-100"
              onClick={() => increaseQuantity(item.id)}>
              +
            </button>
          </div>

          <p className="font-semibold text-gray-900">
            ₹{item.price * item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
