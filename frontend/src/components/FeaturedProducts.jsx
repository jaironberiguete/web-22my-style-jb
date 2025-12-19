import { useEffect, useState } from "react";
import axios from "axios";

// const products = [
//   { name: "CASUAL SHIRT", price: "$75.00", img: "images/products/prod-shirt.png" },
//   { name: "DENIM JEANS", price: "$145.00", img: "images/products/prod-jeans.png" },
//   { name: "LEATHER JACKET", price: "$249.00", img: "images/products/prod-jacket.png" },
//   { name: "SNEAKERS", price: "$133.00", img: "images/products/prod-sneakers.png" },
// ];

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <section className="border-r border-l border-gray-700">
      <h2 className="text-xl font-semibold mb-6 ml-4">FEATURED PRODUCTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 px-10">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-gradient-to-b from-[#111827] to-[#0b0d12] rounded-xl p-6 flex flex-col items-center justify-between hover:bg-[#1a1f2e] transition h-80"
          >
            {/* FIXED IMAGE SIZE + CENTERED */}
            <div className="flex items-center justify-center h-40 w-full">
              <img
                src={p.img}
                alt={p.name}
                className="h-36 object-contain"
              />
            </div>

            {/* PRODUCT INFO STAYS AT BOTTOM */}
            <div className="mt-auto text-center">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-gray-400">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
