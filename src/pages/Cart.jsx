import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              
              {/* IMAGE */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-img"
              />

              {/* DETAILS */}
              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
              </div>

            </div>
          ))}

          <h3 className="total">Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;