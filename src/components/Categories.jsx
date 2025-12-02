const categories = [
  { label: "MEN", img: "cat-men.png" },
  { label: "WOMEN", img: "cat-women.png" },
  { label: "KIDS", img: "/cat-kids.png" },
];

export const Categories = () => {
  return (
    <section className=" relative border-r border-l border-gray-700 py-8 w-full  border-gray-700 py-8 w-full">
      <h2 className="text-xl font-semibold mb-6 ml-4 ">SHOP BY CATEGORY</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 imtems-center justify-center px-10 ">
        {categories.map((c) => (
          <div
            key={c.label}
            className="bg-[#111827] p-6 rounded-xl flex text-xl flex-col items-center cursor-pointer hover:bg-[#1a1f2e] transition"
          >
            <img src={c.img} alt={c.label} className="h-64   object-cover" />
            <p className="tracking-wide">{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
