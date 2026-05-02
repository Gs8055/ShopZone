import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>No items to checkout</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div className="cart-item" key={i}>
              <img src={item.thumbnail} className="cart-img" />
              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}

          <h3 className="total">Total: ₹{total}</h3>

          <button className="checkout-btn">
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;