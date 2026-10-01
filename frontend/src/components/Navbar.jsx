import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        LUMIÈRE
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart 🛒</Link>
        <Link to="/login">Login</Link>
      </div>

    </nav>
  );
}

export default Navbar;