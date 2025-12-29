import axios from "axios";

export const ProductGrid = ({ products }) => {
  if (!products.length)
    return <p className="text-gray-400">No products found.</p>;

    const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("accessToken");

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/cart/add/",
        { product: productId, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (onCartUpdate) onCartUpdate(res.data);
    } catch (err) {
      console.error("Failed to add product to cart:", err.response?.data || err.message);
    }
  };


  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-0 md:px-6 ">
      {products.map(product => (
        <div
          key={product.id}
          className=" border border-gray-400 border-solid from-[#111827] to-[#0b0d12] rounded-lg p-4 hover:scale-105 transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-contain rounded"
          />
          <h3 className="mt-2 font-semibold">{product.name}</h3>
          <p className="text-gray-400">${product.price}</p>
          <button
                onClick={() => handleAddToCart(product.id)}
                className="border rounded-lg hover:bg-white hover:text-black transition px-4 py-2 mt-2"
              >
                Add to Cart
              </button>
        </div>
      ))}
    </div>
  );
};
