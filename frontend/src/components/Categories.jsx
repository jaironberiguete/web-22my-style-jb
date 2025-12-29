import { useEffect, useState } from "react";
import axios from "axios";

 // Demo categories fallback
  const demoCategories = [
  { id: 1, name: "MEN", img: "images/models/cat-men.png" },
  { id: 2, name: "WOMEN", img: "images/models/cat-women.png" },
  { id: 3, name: "KIDS", img: "images/models/cat-kids.png" },
  { id: 4, name: "SHOES", img: "images/models/cat-shoes.png" },
];

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/products/categories/");
      setCategories(res.data);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
      setCategories(demoCategories); // fallback if API fails
    }
  };
  fetchCategories();
  }, []);

  return (
    <section className="relative border-r border-l border-gray-700 py-8 w-full pb-40 pt-20">
      <h2 className="text-xl font-semibold mb-6 ml-4">SHOP BY CATEGORY</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 px-10">
        {categories.map((c) => (
          <div
            key={c.id}
            className="relative rounded-xl overflow-hidden cursor-pointer group h-64"
          >

            {/* Background gradient (optional, keeps your style) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F242B] to-[#0E1824]"></div>

            {/* Image fills the card */}
            <img
              src={c.img}
              alt={c.name}
              className="absolute inset-0  h-60 object-cover opacity-90 group-hover:opacity-100 transition"
            />

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Text overlay */}
            <p className="absolute bottom-4 left-4 text-white text-xl font-semibold tracking-wide drop-shadow">
              {c.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
