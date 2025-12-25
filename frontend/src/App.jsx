import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavSection';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import './index.css';

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center bg-[#0b0d12] text-white '>
      <div className='w-full max-w-6xl px-6 py-4 '>
        <BrowserRouter>
          {/* Navbar is outside Routes so it's always visible */}
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />        
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
