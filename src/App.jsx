import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from './context/CartContext'; // Cart context provider

function App() {
  // Track selected product for detail view
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <CartProvider> {/* Global cart state available everywhere */}
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              selectedProduct ? (
                <ProductDetails
                  product={selectedProduct}
                  onBack={() => setSelectedProduct(null)}
                />
              ) : (
                <Home onSelectProduct={setSelectedProduct} />
              )
            }
          />
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
