import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222" }}>
      <Link style={linkStyle} to="/expense">Expense</Link>
      <Link style={linkStyle} to="/shop">Shop</Link>
      <Link style={linkStyle} to="/cart">Cart</Link>
      <Link style={linkStyle} to="/weather">Weather</Link>
      <Link style={linkStyle} to="/blog">Blog</Link>
      <Link style={linkStyle} to="/movies">Movies</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "15px",
  textDecoration: "none",
};
