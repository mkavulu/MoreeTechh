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
import HpEliteBookImage from '../assets/Hp-EliteBook.jpg';
import HPPoBookImage from '../assets/Hp-ProBook 430 G7.jpeg';
import HpProbookBookImage from '../assets/Hp-Probook 640.jpg';
import HpEliteBookBookImage from '../assets/Hp-840g3.jpg';
import HpEliteImage from '../assets/Hp-840g3.jpg';
import IphoneImage from '../assets/Iphone 17 Promax.jpeg';
import IphoneproImage from '../assets/Apple-iPhone-17-Pro-Max.jpg';
import IphonepromaxImage from '../assets/Iphone 17 pro max 256gb sim.jpg';
import IphoneprosilverImage from '../assets/iphone-17-pro-silver-1.jpg';
import IphoneproBlueImage from '../assets/Iphone 17 Pro Max 2.jpg';
import Iphonepro2Image from '../assets/Apple-iPhone-17-Pro.jpg';
import Iphonepro3Image from '../assets/IPHONE 17 PRO MAX 256GB DUOS Physical ACTIVE blue orange.jpeg';
import Iphonepro4Image from '../assets/iphone-17-pro-cosmic-orange-512gb-back_1.jpg';


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
    price: 2800, 
    oldPrice: 3500, 
    specs: 'Logitech Stereo Headset H111 Noise-cancelling microphone reduces room noise for clearer Internet calls Full stereo sound for your music, movies and games Rotating microphone boom can be worn on your left or right side Adjustable headband gives you a customized fit',
    image: LogitechImage
  },
  
  { 
    id:6, 
    name: 'HP ProBook 430 G7', 
    category: 'Laptops', 
    price: 30500,  
    specs: 'HP ProBook 430 G7 Notebook PC Intel i7-8565U with 8GB RAM, 256 GB SSD, 13.3-inch',
    image: HPPoBookImage
  },
  { 
    id: 7, 
    name: 'EliteBook 820 G2 ', 
    category: 'Laptops', 
    price: 22500, 
    specs: 'EliteBook 820 G2 Core I5 8GB RAM 256gb ssd Slim Ultrabook Laptop Refurbished',
    image: HpEliteBookImage
  },
   { 
    id: 9, 
    name: 'ProBook 640 G3 ', 
    category: 'Laptops', 
    price: 23500, 
    specs: 'Hp Probook  640g3 (z2w37ea), intel core i5-7200u, 2.5ghz, 4gb 256gb ssd, 14"hd Laptop Refurbished',
    image: HpProbookBookImage
  },
   { 
    id: 10, 
    name: 'ProBook 640 G3 ', 
    category: 'Laptops', 
    price: 23500, 
    specs: 'Hp Probook  640g3 (z2w37ea), intel core i5-7200u, 2.5ghz, 4gb 256gb ssd, 14"hd Laptop Refurbished',
    image: HpProbookBookImage
  },
   { 
    id: 11, 
    name: 'HP EliteBook 840 G3 ', 
    category: 'Laptops', 
    price: 26000, 
    specs: 'HP EliteBook 840 G3 Laptop 14" HD Display, Intel Core i5-6300U 2.4Ghz,6th Gen, 256GB SSD, 8GB DDR4 RAM, Webcam, WiFi, Windows 11 ProRefurbished',
    image: HpEliteBookBookImage
  },
  { 
    id: 12, 
    name: 'HP EliteBook 840 G3 ', 
    category: 'Laptops', 
    price: 28000, 
    specs: 'HP Refurbished EliteBook 840 G3 Core I7 8GB RAM 256GB SSD 6th Gen 14Inch Win 11',
    image: HpEliteImage
  },
 { 
    id: 13, 
    name: 'Iphone 17 Pro Max 256GB Brand New ', 
    category: 'Phones', 
    price: 198000, 
    specs: 'Iphone Promax 256 Gb 2yrs Sim Silver',
    image: IphoneImage
  },
  { 
    id: 14, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 197000, 
    specs: 'IPHONE 17 PRO MAX 256GB - 2YRS SIM BLUE | ORANGE',
    image: IphonepromaxImage
  },
   { 
    id: 15, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 195000, 
    specs: 'IPHONE 17 PRO MAX 256GB - SIM ORANGE NON - ACTIVE',
    image: IphoneproImage
  },
  { 
    id: 16, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 188000, 
    specs: 'IPHONE 17 PRO MAX 256GB - ESIM SILVER ',
    image: IphoneprosilverImage
  },
  { 
    id: 17, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 186000, 
    specs: 'PHONE 17 PRO MAX 256GB - ESIM BLUE ',
    image: IphoneproBlueImage
  },
  { 
    id: 18, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 190000, 
    specs: 'PHONE 17 PRO MAX 256GB - DUOS Physical ACTIVE silver  ',
    image: Iphonepro2Image
  },
  { 
    id: 19, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 190000, 
    specs: 'IPHONE 17 PRO MAX 256GB - DUOS Physical ACTIVE blue/orange ',
    image: Iphonepro3Image
  },
   { 
    id: 19, 
    name: 'Iphone 17 256GB Brand New', 
    category: 'Phones', 
    price: 175000, 
    specs: 'IPHONE 17 PRO 256GB - ESIM ORANGE , BLUE & SILVER  ',
    image: Iphonepro4Image
  },
  { 
    id: 20, 
    name: 'HP LaserJet Pro Multifunction M479fdw Wireless Printer', 
    category: 'HP Printer', 
    price: 125900, 
    oldPrice: 135000, 
    specs: 'HP Color LaserJet Pro Multifunction M479fdw Wireless Laser Print 2-sided scanning, 250-sheet input tray, print speed up to 28 pages every minute 50-sheet auto document feeder Energy efficiency saves up to 18% In-built Wi-Fi direct to directly connect to a smartphone',
    image: HPPrinterImage
  },
];

// Categories
const categories = ['All', 'Laptops', 'Hp All-In-One', 'Monitors', 'Headphones', 'HP Printer','Phones','Accessories'];

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