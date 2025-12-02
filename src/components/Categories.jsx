const categories = [
  { label: "MEN", img: "/cat-men.png" },
  { label: "WOMEN", img: "/cat-women.png" },
  { label: "KIDS", img: "/cat-kids.png" },
];

export const Categories = () => {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">SHOP BY CATEGORY</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((c) => (
          <div
            key={c.label}
            className="bg-[#111827] p-6 rounded-xl flex flex-col items-center cursor-pointer hover:bg-[#1a1f2e] transition"
          >
            <img src={c.img} alt={c.label} className="w-36 object-cover mb-4" />
            <p className="tracking-wide">{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
