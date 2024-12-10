import { useState, useEffect } from "react";
import { getPastOrders, getPastOrder } from "../apis";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

const Past = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showOrder, setShowOrder] = useState(null);
  const [pastOrders, setPastOrders] = useState({});

  useEffect(() => {
    const fetchPastOrder = async () => {
      const data = await getPastOrder("showOrder");
      setPastOrders(data);
    };
    if (showOrder) {
      fetchPastOrder();
    }
  }, [showOrder]);

  useEffect(() => {
    const fetchPastOrder = async () => {
      setLoading(true);
      const orders = await getPastOrders(page);
      setData(orders);
      setLoading(false);
    };
    fetchPastOrder();
  }, [page]);

  if (loading) {
    return (
      <div className="past-orders">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="past-orders">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>DATE</td>
              <td>TIME</td>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.order_id}>
                <td>
                  <button onClick={() => setShowOrder(order.order_id)}>
                    {order.order_id}
                  </button>
                </td>
                <td>{order.date}</td>
                <td>{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pages">
          <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Previous
          </button>
          <button disabled={data.length < 10} onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
        {showOrder ? (
          <Modal>
            <h2>Order #{showOrder}</h2>
            <table>
              <thead>
                <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Size</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {pastOrders?.orderItems?.map((pizza) => (
                  <tr key={pizza.pizza_id}>
                    <td>
                      <img src={pizza.image} alt={pizza.name} />
                    </td>
                    <td>{pizza.name}</td>
                    <td>{pizza.size}</td>
                    <td>{pizza.quantity}</td>
                    <td>{intl.format(pizza.price)}</td>
                    <td>{intl.format(pizza.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => setShowOrder(null)}>Close</button>
          </Modal>
        ) : null}
      </div>
    </ErrorBoundary>
  );
};

export default Past;
