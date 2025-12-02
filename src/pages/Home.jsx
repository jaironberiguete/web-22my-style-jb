import { Navbar } from '../components/NavSection';
import { Hero } from '../components/HeroSection';

export const Home = () => {
    return ( <div className="min-h-screen bg-white text-gray-900"> 
        {/* Main Content */}
        <Navbar/>
        <main>
            <Hero/>
         </main>
        {/* Footer */}

    </div>
    );
};