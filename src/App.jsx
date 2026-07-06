import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import InfoPage from './pages/InfoPage'; 
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop';  
import { CartProvider } from './context/CartContext'; 

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeInfoPage, setActiveInfoPage] = useState(null); 
  
  // State: Holds the active category selected via footer links or home buttons
  const [activeCategory, setActiveCategory] = useState('All'); 

  // Combined listener to instantly fix scroll positions during interface state mutations
  useEffect(() => {
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
  }, [selectedProduct, activeInfoPage, activeCategory]); 

  // 💡 Global reset sequence helper function when clicking the MoreeTech logo
  const handleResetToHomeStorefront = () => {
    setActiveInfoPage(null);     // Close any open policy pages
    setSelectedProduct(null);    // Close any open product detail views
    setActiveCategory('All');    // Reset the store filter list back to 'All' products
  };

  // Helper function to handle category clicks from the footer
  const handleFooterCategorySelect = (category) => {
    setActiveInfoPage(null);    // Close info sheets if open
    setSelectedProduct(null);   // Close details screen if open
    setActiveCategory(category); // Apply filter string directly
  };

  const renderMainContent = () => {
    if (activeInfoPage) {
      return (
        <InfoPage 
          type={activeInfoPage} 
          onBack={() => setActiveInfoPage(null)} 
        />
      );
    }

    if (selectedProduct) {
      return (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      );
    }

    // Pass the selected category state value down to your Home component dashboard
    return (
      <Home 
        onSelectProduct={setSelectedProduct} 
        currentCategory={activeCategory} 
        onCategoryChange={setActiveCategory}
      />
    );
  };

  return (
    <CartProvider>
      <Router>
        <ScrollToTop /> 

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          {/* 💡 Pass the reset handler cleanly to your Navbar component */}
          <Navbar onResetHome={handleResetToHomeStorefront} />
          
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={renderMainContent()} />
            </Routes>
          </main>
          
          {/* Pass down both state controllers cleanly here */}
          <Footer 
            onSelectInfo={setActiveInfoPage} 
            onSelectCategory={handleFooterCategorySelect} 
          /> 
          
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;