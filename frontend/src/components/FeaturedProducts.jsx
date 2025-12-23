import { useEffect, useState } from "react";
import axios from "axios";

export const FeaturedProducts = ({ onCartUpdate }) => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("accessToken"); // JWT from login

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/products/");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/cart/add/",
        { product_id: productId, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (onCartUpdate) onCartUpdate(res.data.items); // update Navbar cart
    } catch (err) {
      console.error("Failed to add product to cart:", err.response?.data || err.message);
    }
  };

  return (
    <section className="border-r border-l border-gray-700">
      <h2 className="text-xl font-semibold mb-6 ml-4">FEATURED PRODUCTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 px-10">
        {products.map((p) => (
          <div
            key={p.id} // use unique id
            className="bg-gradient-to-b from-[#111827] to-[#0b0d12] rounded-xl p-6 flex flex-col items-center justify-between hover:bg-[#1a1f2e] transition h-80"
          >
            <div className="flex items-center justify-center h-40 w-full">
              <img
                src={p.image || "images/products/default.png"} 
                alt={p.name}
                className="h-36 object-contain"
              />
            </div>

            <div className="mt-auto text-center">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-gray-400">${p.price}</p>
              <div>
                <button
                  onClick={() => handleAddToCart(p.id)}
                  className="border rounded-lg hover:bg-white hover:text-black transition px-4 py-2 mt-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
