import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const FeaturedProducts = ({ onCartUpdate }) => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  // Demo fallback products
  const demoProducts = [
    { id: 1, name: "CASUAL SHIRT", price: 75, image: "images/products/prod-shirt.png" },
    { id: 2, name: "DENIM JEANS", price: 145, image: "images/products/prod-jeans.png" },
    { id: 3, name: "LEATHER JACKET", price: 249, image: "images/products/prod-jacket.png" },
    { id: 4, name: "SNEAKERS", price: 133, image: "images/products/prod-sneakers.png" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/products/");
        setProducts(res.data);
      } catch (err) {
        console.warn("Backend not available, using demo products.");
        setProducts(demoProducts);
      }
    };

    fetchProducts();
  }, []);
  


  // Scroll handler
  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  // Add items to cart
  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("accessToken");
    if (!token) return alert("Please log in");

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

  // Limit to 10 products
  const visibleProducts = products.slice(0, 8);

  return (
    <section className="border-r border-l border-gray-700 relative">
      <div className="flex items-center justify-between px-6 mb-6">
        <h2 className="text-xl font-semibold">FEATURED PRODUCTS</h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 border rounded-lg hover:bg-white hover:text-black transition"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border rounded-lg hover:bg-white hover:text-black transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="
          flex gap-6 px-6 pb-6
          overflow-x-auto scroll-smooth
          scrollbar-hide
        "
      >
        {visibleProducts.map((p) => (
          <div
            key={p.id}
            className="
              border border-gray-400 border-solid
              min-w-[240px] h-80
              bg-gradient-to-b from-[#111827] to-[#0b0d12]
              rounded-xl p-6
              flex flex-col items-center justify-between
              hover:bg-[#1a1f2e] transition
            "
          >
            <div className="flex items-center justify-center h-40 w-full">
              <img
                src={p.image || "/images/placeholder-product.png"}
                alt={p.name}
                className="h-36 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/images/defoult.png";
                }}
              />
            </div>

            <div className="mt-auto text-center">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-gray-400">${p.price}</p>

              <button
                onClick={() => handleAddToCart(p.id)}
                className="border rounded-lg hover:bg-white hover:text-black transition px-4 py-2 mt-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
