import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext'; // Cart context provider

function App() {
  return (
    <CartProvider> {/* Global cart state available everywhere */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future routes can be added here */}
          {/* Example:
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

