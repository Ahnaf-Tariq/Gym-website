import './App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Aboutroute } from './components/Aboutroute';
import { Servicesroute } from './components/Servicesroute';
import { Galleryroute } from './components/Galleryroute';
import { Contactroute } from './components/Contactroute';
import { Errorroute } from './components/Errorroute';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Footer />} />
          <Route path='/about' element={<Aboutroute />} />
          <Route path='/services' element={<Servicesroute />} />
          <Route path='/gallery' element={<Galleryroute />} />
          <Route path='/contact' element={<Contactroute />} />
          <Route path='*' element={<Errorroute />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
