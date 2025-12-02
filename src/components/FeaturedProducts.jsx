const products = [
  { name: "CASUAL SHIRT", price: "$75.00", img: "/prod-shirt.png" },
  { name: "DENIM JEANS", price: "$145.00", img: "/prod-jeans.png" },
  { name: "LEATHER JACKET", price: "$249.00", img: "/prod-jacket.png" },
  { name: "SNEAKERS", price: "$133.00", img: "/prod-sneakers.png" },
];

export const FeaturedProducts = () => {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">FEATURED PRODUCTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-[#111827] p-6 rounded-xl text-center hover:bg-[#1a1f2e] transition"
          >
            <img src={p.img} alt={p.name} className="w-32 mx-auto mb-4" />
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-gray-400">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
