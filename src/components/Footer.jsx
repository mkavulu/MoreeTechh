import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

// 💡 Added onSelectCategory prop alongside your existing onSelectInfo prop
const Footer = ({ onSelectInfo, onSelectCategory }) => {
  
  // Helper to handle smooth routing transitions back to specific storefront elements
  const handleCategoryClick = (categoryName) => {
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerGrid}>
        
        {/* Column 1: Shop With Us (Merged with Dynamic Store Category Triggers from Capture444444_2.JPG) */}
        <div className={styles.footerColumn}>
          <h3>Shop With Us</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <button 
                onClick={() => handleCategoryClick('Laptops & Desktops')} 
                style={{ background: 'none', border: 'none', color: '#b0c4de', cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit' }}
              >
                Laptops & Desktops
              </button>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <button 
                onClick={() => handleCategoryClick('Monitors & Displays')} 
                style={{ background: 'none', border: 'none', color: '#b0c4de', cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit' }}
              >
                Monitors & Displays
              </button>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <button 
                onClick={() => handleCategoryClick('Computer Accessories')} 
                style={{ background: 'none', border: 'none', color: '#b0c4de', cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit' }}
              >
                Computer Accessories
              </button>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <button 
                onClick={() => handleCategoryClick('Networking Equipment')} 
                style={{ background: 'none', border: 'none', color: '#b0c4de', cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit' }}
              >
                Networking Equipment
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2: Visit Us */}
        <div className={styles.footerColumn}>
          <h3>Visit Us</h3>
          <p className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Nairobi CBD, Business Hub District, Kenya</span>
          </p>
          <p className={styles.timingInfo}>Open: Mon - Sat: 8:00 AM - 6:00 PM</p>
        </div>

        {/* Column 3: Contact Us */}
        <div className={styles.footerColumn}>
          <h3>Contact Us</h3>
          <p className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <a href="tel:+254724137327">+254 724 137 327</a>
          </p>
          <p className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:info@moreetech.co.ke">info@moreetech.co.ke</a>
          </p>
        </div>

        {/* Column 4: Quick Policy & Follow Links */}
        <div className={styles.footerColumn}>
          <h3>Privacy Policy</h3>
          <ul className={styles.policySpace} style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <button 
                onClick={() => onSelectInfo('terms')} 
                style={{ background: 'none', border: 'none', color: '#b0c4de', cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit' }}
              >
                Terms & Conditions
              </button>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <button 
                onClick={() => onSelectInfo('privacy')} 
                style={{ background: 'none', border: 'none', color: '#b0c4de', cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit' }}
              >
                Privacy Protection Policy
              </button>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <button 
                onClick={() => onSelectInfo('warranty')} 
                style={{ background: 'none', border: 'none', color: '#b0c4de', cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit' }}
              >
                Return & Warranty Policy
              </button>
            </li>
          </ul>
          
          <h3 className={styles.followTitle}>Follow Us</h3>
          <div className={styles.socialRow}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className={styles.divider}></div>

      {/* Copyright Sub-Baseline Footer */}
      <div className={styles.footerBottom}>
        <p>&copy; 2026 MoreeTech. All Rights Reserved.</p>
        <p className={styles.branding}>Crafted by <span className={styles.brandName}>Diml Tech</span>.</p>
      </div>
    </footer>
  );
};

export default Footer;