export const Hero = () => {
  return (
    <section className="relative border border-gray-700 py-8 w-full bg-gradient-to-r from-[#111827] to-[#0b0d12] px-4 sm:px-10 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      <div className="mr-20 mt-10 md:mt-14 mb-10 md:mb-20 max-w-md md:max-w-lg z-10 mx-auto md:ml-20 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold">NEW COLLECTION</h1>
        <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
          Discover the latest trends in fashion
        </p>

        <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 border rounded-lg hover:bg-white hover:text-black transition text-sm sm:text-base">
          SHOP NOW
        </button>
      </div>

      <img
        src="images/hero-model.png"
        alt="model"
        className="absolute bottom-0 top-20 right-0 md:right-20 w-40 sm:w-52 md:w-60"
      />
    </section>
  );
};
