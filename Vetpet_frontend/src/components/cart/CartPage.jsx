import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartSummary from "./Cartsummary";
import api from "../../api";
import { Link } from "react-router-dom";

const CartPage = ({ setNumberCartItems }) => {
  const cart_code = localStorage.getItem("cart_code");
  const [cartItem, setCartItem] = useState([]);
  const [cartTotal, setCartTotal] = useState(0.0);
  const tax = 4.0;

  useEffect(
    function () {
      api
        .get(`get_cart?cart_code=${cart_code}`)
        .then((res) => {
          setCartItem(res.data.items);
          setCartTotal(res.data.sum_total);
        })
        .catch((err) => console.log(err.message));
    },
    [cart_code]
  );

  if (cartItem.length < 1) {
    return (
      <div className="container my-5 py-5 text-center">
        <h4>Your cart is empty 🛒</h4>
        <p className="text-muted">You haven't added any items yet.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div
      className="container my-3 py-3"
      style={{ height: "80vh", overflow: "scroll" }}
    >
      <h5 className="mb-4">Shopping Cart</h5>
      <div className="row">
        <div className="col-md-8">
          {cartItem.map((Item) => (
            <CartItem
              key={Item.id}
              item={Item}
              setCartTotal={setCartTotal}
              cartItems={cartItem}
              setNumberCartItems={setNumberCartItems}
            />
          ))}
        </div>
        <CartSummary cartTotal={cartTotal} tax={tax} />
      </div>
    </div>
  );
};

export default CartPage;
