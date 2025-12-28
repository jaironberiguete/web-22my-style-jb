import { Navbar } from '../components/NavSection';
import { Hero } from '../components/HeroSection';
import { Categories } from '../components/Categories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
      <div > 
        {/* Main Content */}
        <main>
            <Hero/>
            <Categories/>
            <FeaturedProducts/>
         </main>
        {/* Footer */}
        <Footer/>

    </div>
    
    );
};