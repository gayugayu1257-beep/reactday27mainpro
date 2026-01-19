import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExpensePage from "./pages/ExpenseTracker/ExpensePage";
import Products from "./pages/Ecommerce/Products";
import Cart from "./pages/Ecommerce/Cart";
import Weather from "./pages/Weather/Weather";
import BlogList from "./pages/Blog/BlogList";
import AddBlog from "./pages/Blog/AddBlog";
import MovieList from "./pages/Movies/MovieList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/expense" element={<ExpensePage />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/weather" element={<Weather />} />

        {/* BLOG ROUTES */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/add" element={<AddBlog />} />

        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
