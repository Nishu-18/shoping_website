import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";



const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  console.log(cart);
  

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
  {cart.length === 0 ? (
    <tr>
      <td colSpan="4" className="empty">Your cart is empty.</td>
    </tr>
  ) : (
    cart.map(item => (
      <tr key={item.id}>
        <td className="item-cell" data-label="Item">
          <img src={item.image} alt={item.title} />
          <span>{item.title}</span>
        </td>
        <td data-label="Price">${item.price.toFixed(2)}</td>
        <td data-label="Quantity">{item.quantity}</td>
        <td data-label="Remove">
          <FaTrash className="trash" onClick={() => removeFromCart(item.id)} />
        </td>
      </tr>
    ))
  )}
</tbody>

      </table>

      {cart.length > 0 && (
        <div className="cart-footer">
          <p>Total: <strong>${total.toFixed(2)}</strong></p>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}

      {orderPlaced && (
        <div className="popup"> Order placed successfully!</div>
      )}
    </div>
  );
}

export default Cart;
