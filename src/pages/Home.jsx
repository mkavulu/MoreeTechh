import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

// Import local images
import hpImage from '../assets/hp-probook.jpeg';
import lenovoImage from '../assets/thinkpad-e14.jpeg';
import AllinOneImage from '../assets/All-In-One.jpg';
import dellImage from '../assets/dell-monitor.jpeg';
import LogitechImage from '../assets/logitech.jpg';
import HPPrinterImage from '../assets/hp Printer.jpg';

// Sample product dataset
const sampleProducts = [
  { 
    id: 1, 
    name: 'HP ProBook 450 G10', 
    category: 'Laptops', 
    price: 85000, 
    oldPrice: 95000, 
    specs: 'HP ProBook 450 G10 Notebook PC 13th Gen Intel Core i5-1355U Processor 15.6" FHD 8GB DDR4 SDRAM 512GB PCIe NVMe M.2 Value SSD Intel Iris Xe Graphics',
    image: hpImage 
  },
  { 
    id: 2, 
    name: 'Lenovo ThinkPad E14', 
    category: 'Laptops', 
    price: 78000, 
    specs: 'Lenovo ThinkPad E14 Gen 7 Intel Core Ultra 7 255H Processor 16GB DDR5 RAM 512GB SSD 14 Inch WUXGA Display Laptop',
    image: lenovoImage
  },
  { 
    id: 3, 
    name: 'All-In-One', 
    category: 'Hp All-In-One', 
    price: 150500, 
    specs: 'HP All-in-One 27-cr0162nh 13th Gen Intel Core i7-1355U 16GB RAM 512GB SSD 27" Touchscreen Diagonal FHD IPS Display Intel Iris Xe Graphics Plus HP 125 USB Wired Mouse and Keyboard 1',
    image: AllinOneImage
  },
  { 
    id: 4, 
    name: 'Dell UltraSharp 27" Monitor', 
    category: 'Monitors', 
    price: 42000, 
    oldPrice: 45000, 
    specs: 'Dell UltraSharp U2725QE 27 Inch 4K UHD IPS Black Monitor with 120Hz and Thunderbolt 4',
    image: dellImage
  },
  { 
    id: 5, 
    name: 'Logitech Stereo Headset H111', 
    category: 'Headphones', 
    price: 3500, 
    oldPrice: 4500, 
    specs: 'Logitech Stereo Headset H111 Noise-cancelling microphone reduces room noise for clearer Internet calls Full stereo sound for your music, movies and games Rotating microphone boom can be worn on your left or right side Adjustable headband gives you a customized fit',
    image: LogitechImage
  },
  { 
    id: 6, 
    name: 'HP LaserJet Pro Multifunction M479fdw Wireless Printer', 
    category: 'HP Printer', 
    price: 125900, 
    oldPrice: 135000, 
    specs: 'HP Color LaserJet Pro Multifunction M479fdw Wireless Laser Print 2-sided scanning, 250-sheet input tray, print speed up to 28 pages every minute 50-sheet auto document feeder Energy efficiency saves up to 18% In-built Wi-Fi direct to directly connect to a smartphone',
    image: HPPrinterImage
  },
];

// Categories
const categories = ['All', 'Laptops', 'Hp All-In-One', 'Monitors', 'Headphones', 'HP Printer'];

const Home = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? sampleProducts
    : sampleProducts.filter(product => product.category === activeCategory);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroBanner}>
        <h1>Upgrade Your Tech Workspace</h1>
        <p>Get the best deals on genuine laptops and accessories in Kenya.</p>
      </div>

      <div className={styles.mainLayout}>
        <aside className={styles.sidebar}>
          <h3>Categories</h3>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <button 
                  className={activeCategory === cat ? styles.activeTab : ''} 
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>{activeCategory} Products</h2>
          
          {/* Updated grid layout wrapper matching equal columns */}
          <div className={styles.productGrid}>
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                onClick={() => onSelectProduct(product)} 
                className={styles.gridItemWrapper} /* <-- Merged layout wrapper class */
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;