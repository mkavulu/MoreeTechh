import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiPhone } from 'react-icons/fi';
import { useCart } from '../context/CartContext'; 
import styles from './Navbar.module.css';

// 💡 Added onResetHome to the component destructured props
const Navbar = ({ onResetHome }) => {
  const { getCartCount } = useCart(); 

  return (
    <nav className={styles.navbar}>
      <div className={styles.topBar}>
        <span><FiPhone /> Call Us: +254 724 137 327</span>
        <span>Free Delivery within Nairobi CBD</span>
      </div>
      <div className={styles.mainNav}>
        
        {/* 💡 Bound the click handler here to clear active page states */}
        <Link to="/" className={styles.logo} onClick={onResetHome}>
          MOREE<span>TECH</span>
        </Link>
        
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search for laptops, desktops, accessories..." />
          <button><FiSearch /></button>
        </div>
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