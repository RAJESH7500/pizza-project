import { useContext } from "react";
import { CartContext } from "./contexts";
import { Link } from "react-router-dom";

const Header = () => {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Padre Gino's Pizza</h1>
      </Link>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
};

export default Header;
