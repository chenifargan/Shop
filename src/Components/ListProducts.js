import React from "react";
import Product from "./Product";

const ListProducts = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products List</h2>

      <div className="product-list">
        {products.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
