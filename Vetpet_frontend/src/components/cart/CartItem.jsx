import { useState } from "react";
import api, { BASE_URL } from "../../api";

const CartItem = ({ item, setCartTotal, cartItems, setNumberCartItems }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const itemData = { quantity: quantity, item_id: item.id };

  function updateCartItem() {
    api
      .patch("update_quantity/", itemData)
      .then((res) => {
        console.log(res.data);

        const updatedItems = cartItems.map((cartItem) =>
          cartItem.id === item.id ? res.data.data : cartItem
        );

        const newTotal = updatedItems.reduce(
          (acc, curr) => acc + curr.quantity * curr.product.price,
          0
        );

        setCartTotal(newTotal);
        setNumberCartItems(
          updatedItems.reduce((acc, curr) => acc + curr.quantity, 0)
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="col-md-12">
      {/* Cart Items */}
      <div
        className="cart-item d-flex align-items-center mb-3 p-3"
        style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}
      >
        <img
          src={`${BASE_URL}${item.product.image}`}
          alt="Product Image"
          className="img-fluid"
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        <div className="ms-3 flex-grow-1">
          <h5 className="mb-1">{item.product.name}</h5>
          <p className="mb-0 text-muted">{item.product.price}</p>
        </div>
        <div className="d-flex align-items-center">
          <input
            type="number"
            min={1}
            className="form-control me-3"
            defaultValue={quantity}
            onChange={(e) => {
              const value = Math.max(1, e.target.value);
              setQuantity(value);
            }}
            style={{ width: "70px" }}
          />
          <button
            className="btn btn-sm mx-2"
            style={{ backgroundColor: "#4b3bcb", color: "white" }}
            onClick={updateCartItem}
          >
            Update
          </button>
          <button className="btn btn-danger btn-sm">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
