import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export default function Products() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Perfume", price: 999 },
    { id: 2, name: "Watch", price: 1999 },
    { id: 3, name: "Shoes", price: 2999 },
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <p><b>Name:</b> {p.name}</p>
          <p><b>Price:</b> ₹{p.price}</p>

          <button onClick={() => dispatch(addToCart(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
