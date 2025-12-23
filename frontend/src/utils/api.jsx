import axios from "axios";

export const addToCart = async (productId, quantity = 1) => {
  const token = localStorage.getItem("accessToken");
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/cart/add/",
      { product_id: productId, quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data; // return updated cart
  } catch (err) {
    console.error(err.response?.data || err.message);
    return null;
  }
};