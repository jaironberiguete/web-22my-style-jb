export const Footer = () => {
  return (
    <footer className="flex justify-between items-center mt-16 py-6 border-t border-gray-700">
      <div>
        <h3 className="font-semibold tracking-widest">22MYSTYLE</h3>
        <p className="text-gray-400 text-sm mt-2 w-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
      </div>

      <div className="text-xl flex gap-4">
        <span className="cursor-pointer">📘</span>
        <span className="cursor-pointer">🐦</span>
      </div>
    </footer>
  );
}
