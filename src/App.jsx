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
  const [currentCategory, setCurrentCategory] = useState('All'); 

  // Reset scroll position on view/category change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
  }, [selectedProduct, activeInfoPage, currentCategory]); 

  // Reset to initial storefront view (Logo or Home click)
  const handleResetToHomeStorefront = () => {
    setActiveInfoPage(null);
    setSelectedProduct(null);
    setCurrentCategory('All');
  };

  // Open policy info pages (Terms, Privacy, Warranty)
  const handleInfoSelect = (policyType) => {
    setSelectedProduct(null);
    setActiveInfoPage(policyType);
  };

  // Switch category filters from Sidebar or Footer
  const handleCategoryChange = (category) => {
    setActiveInfoPage(null);
    setSelectedProduct(null);
    setCurrentCategory(category);
  };

  // Render main content dynamically based on active state
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

    return (
      <Home 
        onSelectProduct={setSelectedProduct} 
        currentCategory={currentCategory} 
        onCategoryChange={handleCategoryChange}
      />
    );
  };

  return (
    <CartProvider>
      <Router>
        <ScrollToTop /> 

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          <Navbar onResetHome={handleResetToHomeStorefront} />
          
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={renderMainContent()} />
            </Routes>
          </main>
          
          <Footer 
            onInfoClick={handleInfoSelect} 
            onCategoryChange={handleCategoryChange} 
          /> 
          
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;