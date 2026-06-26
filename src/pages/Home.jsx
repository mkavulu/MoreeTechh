import React from 'react';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

// 1. Import your local images from the assets folder
import hpImage from '../assets/hp-probook.jpeg';
import lenovoImage from '../assets/thinkpad-e14.jpeg';
import AllinOneImage from '../assets/All-In-One.jpg';
import dellImage from '../assets/dell-monitor.jpeg';
import LogitechImage from '../assets/logitech.jpg';
import HPPrinterImage from '../assets/hp Printer.jpg';


// 2. Assign the imported variables directly to your product object keys
const sampleProducts = [
  { 
    id: 1, 
    name: 'HP ProBook 450 G10', 
    category: 'Laptops', 
    price: 85000, 
    oldPrice: 95000, 
    specs: 'HP ProBook 450 G10 Notebook PC 13th Gen Intel Core i5-1355U Processor 15.6" FHD 8GB DDR4 SDRAM 512GB PCIe NVMe M.2 Value SSD Intel Iris Xe Graphics',
    image: hpImage // <-- Using the imported variable
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
    name: 'Logitech Logitech Stereo Headset H111', 
    category: 'Headphones', 
    price: 3500, 
    oldPrice: 4500, 
    specs: 'Logitech Logitech Stereo Headset H111 Noise-cancelling microphone reduces room noise for clearer Internet calls Full stereo sound for your music, movies and games Rotating microphone boom can be worn on your left or right side Adjustable headband gives you a customized fit',
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

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroBanner}>
        <h1>Upgrade Your Tech Workspace</h1>
        <p>Get the best deals on genuine laptops and accessories in Kenya.</p>
      </div>
      
      <h2 className={styles.sectionTitle}>Featured Products</h2>
      <div className={styles.productGrid}>
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;