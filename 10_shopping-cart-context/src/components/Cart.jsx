import React from "react";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, totalItems } = useCart();

  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>

          <p className="text-sm text-gray-500 mt-1">
            Review your selected products.
          </p>
        </div>

        <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium">
          {totalItems()} items
        </span>
      </div>

      {cartItems.length === 0 ? (
        <div className="py-12 text-center">
          <div className="text-5xl mb-4">🛒</div>

          <h3 className="font-semibold text-gray-900">Your cart is empty</h3>

          <p className="text-sm text-gray-500 mt-1">
            Add some products to get started.
          </p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Cart;
