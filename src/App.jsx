// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';

import Skid from './components/Products/Skid';


import About from './components/About';
import Contact from './components/Contact';

import BrandPage from './components/BrandPage';

import PrductPage from './components/PrductPage';

import EventPage from './components/EventPage';
import Filterfour from './components/Products/Filterfour';
import Filtereight from './components/Products/Filtereight';
import Filterten from './components/Products/Filterten';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
       
        <Route path="/skid" element={<Skid />} />
        <Route path="/4ff" element={<Filterfour />} />
        <Route path="/8ff" element={<Filtereight />} />
        <Route path="/10ff" element={<Filterten />} />
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
