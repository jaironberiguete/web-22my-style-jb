export const Navbar = () => {
  
    return (
    <nav className="flex justify-between items-center py-4">
      <div className="text-xl font-semibold tracking-widest">22MYSTYLE</div>

      <ul className="hidden md:flex gap-10 text-sm text-gray-300">
        <li className="cursor-pointer hover:text-white">MEN</li>
        <li className="cursor-pointer hover:text-white">WOMEN</li>
        <li className="cursor-pointer hover:text-white">KIDS</li>
        <li className="cursor-pointer hover:text-white">SALE</li>
      </ul>

      <div className="text-xl cursor-pointer">🛒</div>
    </nav>
  );
}
