import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartSummary from "./Cartsummary"; // fixed import case
import api from "../../api";
import { Link } from "react-router-dom";
import Spinner from "../ui/Spinner";

const CartPage = ({ setNumberCartItems }) => {
  const cart_code = localStorage.getItem("cart_code");
  const [cartItem, setCartItem] = useState([]);
  const [cartTotal, setCartTotal] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const tax = 4.0;

  useEffect(() => {
    setLoading(true);
    api
      .get(`get_cart?cart_code=${cart_code}`)
      .then((res) => {
        console.log(res.data);
        setCartItem(res.data.items);
        setCartTotal(res.data.sum_total);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, [cart_code]);

  if (loading) {
    return  <spinner Loading ={loading} />
    
  }

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
      style={{ height: "80vh", overflowY: "auto" }}
    >
      <h5 className="mb-4">Shopping Cart</h5>
      <div className="row">
        <div className="col-md-8">
          {cartItem.map((Item) => (
            <CartItem
              key={Item.id}
              item={Item}
              setCartTotal={setCartTotal}
              cartitems={cartItem} // make sure CartItem.jsx uses 'cartitems'
              setNumberCartItems={setNumberCartItems}
              setCartItems={setCartItem}
            />
          ))}
        </div>
        <CartSummary cartTotal={cartTotal} tax={tax} />
      </div>
    </div>
  );
};

export default CartPage;
