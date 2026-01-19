import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../features/cart/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #aaa",
            margin: "10px",
            padding: "10px",
          }}
        >
          <p><b>{item.name}</b></p>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.qty}</p>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>
          <button onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
