export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Clothify</div>
        <div className="space-x-6 flex items-center">
          <a href="#" className="text-gray-700 hover:text-gray-900">Men</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Women</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Kids</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Sale</a>
          <button className="bg-black text-white px-4 py-2 rounded">Cart</button>
        </div>
      </div>
    </nav>
  );
};