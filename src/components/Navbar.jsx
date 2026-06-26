
import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiPhone } from 'react-icons/fi';
import { useCart } from '../context/CartContext'; // <-- 1. Import the hook
import styles from './Navbar.module.css';

const Navbar = () => {
  const { getCartCount } = useCart(); // <-- 2. Destructure the count utility

  return (
    <nav className={styles.navbar}>
      <div className={styles.topBar}>
        <span><FiPhone /> Call Us: +254 724 137 327</span>
        <span>Free Delivery within Nairobi CBD</span>
      </div>
      <div className={styles.mainNav}>
        <Link to="/" className={styles.logo}>
          MOREE<span>TECH</span>
        </Link>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search for laptops, desktops, accessories..." />
          <button><FiSearch /></button>
        </div>
        <div className={styles.navActions}>
          <Link to="/cart" className={styles.cartIcon}>
            <FiShoppingCart size={24} />
            {/* 3. Use the dynamic count variable here */}
            <span className={styles.badge}>{getCartCount()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;