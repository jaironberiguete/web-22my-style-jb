export const CategoryTabs = ({ categories, active, setActive }) => {
  
  
    return (
    <div className="flex gap-4 mb-8 flex-wrap">
      <button
        onClick={() => setActive("all")}
        className={`px-4 py-2 rounded border ${
          active === "all" ? "bg-white text-black" : "text-white"
        }`}
      >
        ALL
      </button>

      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => setActive(cat.slug)}
          className={`px-4 py-2 rounded border ${
            active === cat.slug ? "bg-white text-black" : "text-white"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};
