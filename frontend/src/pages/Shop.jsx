import { useEffect, useState } from "react";
import axios from "axios";
import { CategoryTabs } from "../components/CategoryTabs";
import { ProductGrid } from "../components/ProductGrid";

const BASE_URL = "http://127.0.0.1:8000/api";

export const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, prodRes] = await Promise.all([
          axios.get(`${BASE_URL}/products/categories/`),
          axios.get(`${BASE_URL}/products/`)
        ]);

        setCategories(catRes.data);
        setProducts(prodRes.data);
      } catch (error) {
        console.error("Error fetching shop data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter(
          (p) => p.category?.slug === activeCategory
        );


  return (
    <div className="w-full min-h-screen px-6 py-10 border border-gray-700 bg-gradient-to-r from-[#111827] to-[#0b0d12]">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>

      <CategoryTabs
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
};
