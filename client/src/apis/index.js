const getPastOrder = async (order) => {
  const response = await fetch(`/api/past-order/${order}`);
  return await response.json();
};

const getPastOrders = async (page) => {
  const response = await fetch(`/api/past-orders?page=${page}`);
  return await response.json();
};

export { getPastOrder, getPastOrders };
