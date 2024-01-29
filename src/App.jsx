// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Filters from './components/Products/Filters';
import Skid from './components/Products/Skid';
import Pumps from './components/Products/Pumps';
import Cartridgepro from './components/Products/Cartridgepro';
import UFFilters from './components/Products/UFfilters';
import About from './components/About';
import Contact from './components/Contact';
import Brands from './components/Brands';
import BrandPage from './components/BrandPage';
import Products from './components/Products';
import PrductPage from './components/PrductPage';
import Events from './components/Events';
import EventPage from './components/EventPage';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/cartridge" element={<Cartridgepro />} />
        <Route path="/skid" element={<Skid />} />
        <Route path="/pumps" element={<Pumps />} />
        <Route path="/uffilters" element={<UFFilters />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brands" element={<BrandPage />} />
        <Route path="/products" element={<PrductPage/>} />
        <Route path="/events" element={<EventPage />} />   

      </Routes>
    </Router>
    </>
  );
}

export default App;
