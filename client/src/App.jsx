import { createRoot } from "react-dom/client";
import Order from "./components/Order";
import PizzaOfTheDay from "./components/PizzaOfTheDay";
import Header from "./components/Header";
import { CartContext } from "./components/contexts";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Past from "./components/Past";

const App = () => {
  const cartHook = useState([]);
  return (
    <Router>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/past" element={<Past />} />
            <Route path="/order" element={<Order />} />
          </Routes>
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
