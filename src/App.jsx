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
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/filters" element={<Filters />} />
        <Route path="/products/cartridge" element={<Cartridgepro />} />
        <Route path="/products/skid" element={<Skid />} />
        <Route path="/products/pumps" element={<Pumps />} />
        <Route path="/products/UFfilters" element={<UFFilters />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
