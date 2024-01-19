// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Filters from './components/Products/Filters';
import Cartridge from './components/Products/cartridge';
import Membrane from './components/Products/Membrane';
import Pumps from './components/Products/Pumps';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/filters" element={<Filters />} />
        <Route path="/products/cartridge" element={<Cartridge />} />
        <Route path="/products/membrane" element={<Membrane />} />
        <Route path="/products/pumps" element={<Pumps />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
