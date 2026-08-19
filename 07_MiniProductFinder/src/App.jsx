import React, { useState } from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import { products } from "./data/products";

const App = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header search={search} setSearch={setSearch} />

      <main className="max-w-7xl mx-auto px-5 py-10">
        {/* Hero */}
        <section className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Find something you'll love.
          </h2>

          <p className="text-gray-500 mt-2 max-w-xl">
            Search, explore and save your favorite products.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Categories</h2>
          </div>

          <CategoryFilter />
        </section>

        {/* Products */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Products</h2>

              <p className="text-sm text-gray-500 mt-1">
                Explore our collection
              </p>
            </div>

            <span className="text-sm text-gray-500">
              {filteredProducts.length} Products
            </span>
          </div>

          <ProductList filteredProducts={filteredProducts} />
        </section>
      </main>
    </div>
  );
};

export default App;
