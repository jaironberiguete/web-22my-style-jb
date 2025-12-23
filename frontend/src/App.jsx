import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import './index.css';

function App() {
  return <div >
     <BrowserRouter> 
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
     </BrowserRouter>
  </div>;
}

export default App;