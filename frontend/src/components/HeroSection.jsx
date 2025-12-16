export const Hero = () => {
  return (
    <section className="relative border border-gray-700 py-8 w-full bg-gradient-to-r from-[#111827] to-[#0b0d12] p-10  flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      <div className="mt-14 md: mb-20 max-w-lg z-10 ml-20">
        <h1 className="text-4xl font-bold">NEW COLLECTION</h1>
        <p className="text-gray-400 mt-3">
          Discover the latest trends in fashion
        </p>

        <button className="mt-6 px-6 py-3 border rounded-lg hover:bg-white hover:text-black transition">
          SHOP NOW
        </button>
      </div>

      <img
        src="images/hero-model.png"
        alt="model"
        className="absolute bottom-0 top-20 right-20 w-64 md:w-60"
      />
    </section>
  );
};
