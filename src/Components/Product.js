import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <span>
        {product.name} price = {product.price}
      </span>
      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Product;
