const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

const Cart = ({ cart, checkout }) => {
  let total = 0;
  cart.forEach((pizza) => (total += pizza.pizza.sizes[pizza.size]));

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((pizza, index) => (
          <li key={index}>
            <span className="size">{pizza.size}</span>
            <span className="type">{pizza.pizza.name}</span>
            <span className="price">{pizza.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
