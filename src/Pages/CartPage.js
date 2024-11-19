import React from "react";
import { useLocation } from "react-router-dom";
import home from "../Imeges/home.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState(location.state?.products || []);
  const [purchased, setPurchased] = useState([]);
  const navigate = useNavigate();
  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );
  function handlePurchase() {
    setPurchased([...purchased, ...products]);
    setProducts([]);
  }
  function goHomePage() {
    if (products.length === 0) {
      navigate("/");
    }
  }

  return (
    <div>
      <img src={home} alt="home" onClick={goHomePage} />
      <h2>Your Cart</h2>

      {products.length > 0 ? (
        <div className="product-list">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <span>
                {product.name} - ${product.price}
              </span>
            </div>
          ))}

          <div>
            <h3>Total: ${totalPrice}</h3>
          </div>

          <button className="btn" onClick={handlePurchase}>
            Buy
          </button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
