import React from "react";
import { useCart } from "../context/CartContext";

const CartSummary = () => {
  const { totalItems, totalPrice, clearCart } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

      <div className="space-y-3 mt-5 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Items</span>

          <span className="font-medium">{totalItems()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>

          <span className="font-medium">₹{totalPrice()}</span>
        </div>

        <div className="border-t border-gray-200 pt-4 flex justify-between">
          <span className="font-semibold">Total</span>

          <span className="text-xl font-bold">₹{totalPrice()}</span>
        </div>
      </div>

      <button className="w-full mt-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
        Checkout
      </button>

      <button
        onClick={() => clearCart()}
        className="w-full mt-3 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition">
        Clear Cart
      </button>
    </div>
  );
};

export default CartSummary;
