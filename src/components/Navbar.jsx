import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiPhone } from 'react-icons/fi';
import { useCart } from '../context/CartContext'; 
import styles from './Navbar.module.css';

const Navbar = ({ onResetHome, searchQuery, onSearchChange }) => {
  const { getCartCount } = useCart(); 

  return (
    <nav className={styles.navbar}>
      <div className={styles.topBar}>
        <span><FiPhone /> Call Us: +254 724 137 327</span>
        <span>Free Delivery within Nairobi CBD</span>
      </div>
      <div className={styles.mainNav}>
        
        {/* Logo resets storefront view */}
        <Link to="/" className={styles.logo} onClick={onResetHome}>
          MOREE<span>TECH</span>
        </Link>
        
        {/* Dynamic Search Bar */}
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search for laptops, desktops, accessories..." 
            value={searchQuery || ''}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
          <button type="button" aria-label="Search"><FiSearch /></button>
        </div>
        
        {/* Cart Icon & Badge */}
        <div className={styles.navActions}>
          <Link to="/cart" className={styles.cartIcon}>
            <FiShoppingCart size={24} />
            <span className={styles.badge}>{getCartCount()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;