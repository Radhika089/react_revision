import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      description: "Premium wireless headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3999,
      description: "Modern smartwatch with fitness tracking",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 5499,
      description: "RGB mechanical keyboard",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 1299,
      description: "Ergonomic wireless mouse",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 1799,
      description: "Adjustable aluminum laptop stand",
      image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6",
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Products</h2>

        <p className="text-gray-500 mt-1">
          Choose products and add them to your cart.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
