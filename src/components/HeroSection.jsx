export const Hero = () => {
  
    return (
    <section className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">New Season, New Styles</h1>
          <p className="text-gray-700 mb-6">Discover the latest trends in fashion and elevate your wardrobe with Clothify.</p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">Shop Now</button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="https://images.unsplash.com/photo-1520975916210-9e41ab07b06b?auto=format&fit=crop&w=800&q=80" alt="Clothing" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};