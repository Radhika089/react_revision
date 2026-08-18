import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartSummary from "./components/CartSummary";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-5">
          <h1 className="text-2xl font-bold text-gray-900">Mini Store</h1>

          <p className="text-sm text-gray-500 mt-1">
            Context API Shopping Cart
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-5 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Products */}
          <div className="lg:col-span-2">
            <ProductList />
          </div>

          {/* Cart */}
          <div className="space-y-6">
            <Cart />
            <CartSummary />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
