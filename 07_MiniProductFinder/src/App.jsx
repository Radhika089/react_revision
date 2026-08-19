import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import { products } from "./data/products";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category === "" || product.category === category;

    return matchSearch && matchCategory;
  });

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));

    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header search={search} setSearch={setSearch} favorites={favorites} />

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

          <CategoryFilter category={category} setCategory={setCategory} />
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

          <ProductList
            filteredProducts={filteredProducts}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
