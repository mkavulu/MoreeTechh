import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer'; // Merged Footer link asset
import { CartProvider } from './context/CartContext'; // Cart context provider

function App() {
  // Track selected product for detail view
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <CartProvider> {/* Global cart state available everywhere */}
      <Router>
        {/* Modern Flex Layout Framework to cleanly push footer to bottom baseline */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          <Navbar />
          
          {/* Main layout routing engine pushes viewport cards to grow automatically */}
          <main style={{ flexGrow: 1 }}>
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
              {/* Future routes can be added here seamlessly */}
              {/* Example:
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              */}
            </Routes>
          </main>
          
          {/* Sits at the absolute baseline edge of both home and details screens */}
          <Footer /> 
          
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;