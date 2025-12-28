export const ProductGrid = ({ products }) => {
  if (!products.length)
    return <p className="text-gray-400">No products found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div
          key={product.id}
          className="border rounded-lg p-4 hover:scale-105 transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-cover rounded"
          />
          <h3 className="mt-2 font-semibold">{product.name}</h3>
          <p className="text-gray-400">${product.price}</p>
        </div>
      ))}
    </div>
  );
};
