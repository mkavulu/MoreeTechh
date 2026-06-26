import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future page routes can be added here like:
        <Route path="/cart" element={<Cart />} /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;