import { Navbar } from '../components/NavSection';
import { Hero } from '../components/HeroSection';
import { Categories } from '../components/Categories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#0b0d12] text-white">
      <div className="w-full max-w-6xl px-6 py-4"> 
        {/* Main Content */}
        <Navbar/>
        <main>
            <Hero/>
            <Categories/>
            <FeaturedProducts/>
         </main>
        {/* Footer */}
        <Footer/>

    </div>
   </div>
    
    );
};