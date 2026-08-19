import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ filteredProducts, toggleFavorite, favorites }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      ))}
    </div>
  );
};

export default ProductList;
