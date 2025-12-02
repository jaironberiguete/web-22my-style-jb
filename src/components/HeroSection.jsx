export const Hero = () => {
  
    return (
    <section className="w-full bg-gradient-to-r from-[#111827] to-[#0b0d12] p-10 rounded-xl flex flex-col md:flex-row items-center justify-between">
      <div>
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
        className="w-64 mt-8 md:mt-0 md:w-60 "
      />
    </section>
  );
}