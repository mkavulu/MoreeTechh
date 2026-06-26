import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiPhone } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => {
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
            <span className={styles.badge}>0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;