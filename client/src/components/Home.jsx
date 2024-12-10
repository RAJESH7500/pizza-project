import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="index">
      <div className="index-brand">
        <h1>Padre Gino's</h1>
        <p>Pizza and Art at a location near you</p>
      </div>
      <ul>
        <li>
          <Link to="/order">Order</Link>
          <Link to="/past">Past Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
