import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

// Import local images
import hpImage from '../assets/hp-probook.jpeg';
import lenovoImage from '../assets/thinkpad-e14.jpeg';
import AllinOneImage from '../assets/All-In-One.jpg';
import AllinOneImage1 from '../assets/Hp EliteOne 800 G3.jpg';
import AllinOneImage2 from '../assets/HP All-in-One 24-cr0254nh PC.jpg';
import AllinOneImage3 from '../assets/HP All-in-One 24-cr0254nh PC.jpg';
import AllinOneImage4 from '../assets/HP All-in-One 24-cr0254nh PC.jpg';
import dellImage from '../assets/dell-monitor.jpeg';
import LenovoImage from '../assets/Monitor.jpg';
import LogitechImage from '../assets/logitech.jpg';
import Logitech1Image from '../assets/logitech H340.jpg';
import Logitech2Image from '../assets/logitech H390.jpg';
import Logitech3Image from '../assets/Logitech-H600-2.jpg';
import Logitech4Image from '../assets/Logitech H540.jpg';
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
import Iphonepro5Image from '../assets/IPHONE 17 PRO 256GB - ESIM SILVER.jpeg';
import Iphonepro6Image from '../assets/IPHONE 17 PRO MAX 256GB - DUOS Physical ACTIVE silver.jpeg';
import Iphonepro7Image from '../assets/IPHONE 16 PRO MAX 256GB - NON-ACTIVE.jpeg';
import Iphonepro8Image from '../assets/iphone-16-pro-black.jpeg';
import Iphonepro9Image from '../assets/IPHONE 16 PRO MAX 512GB -NON-ACTIVE.jpeg';

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
    id: 4, 
    name: 'All-In-One', 
    category: 'All-in-One', 
    price: 150500, 
    specs: 'HP All-in-One 27-cr0162nh 13th Gen Intel Core i7-1355U 16GB RAM 512GB SSD 27" Touchscreen Diagonal FHD IPS Display Intel Iris Xe Graphics Plus HP 125 USB Wired Mouse and Keyboard 1',
    image: AllinOneImage
  },
  { 
    id: 5, 
    name: 'HP EliteOne 800 G3', 
    category: 'All-in-One', 
    price: 67500, 
    specs: 'All-in-One Desktop Computer, Intel Core i5 7th Gen, 3.20 GHz, 8GB RAM 512GB SSD, 23.8 Inch (1920 x 1080) Display',
    image: AllinOneImage1
  },
  { 
    id: 6, 
    name: 'HP All-in-One 24-cr0254nh PC', 
    category: 'All-in-One', 
    price: 125999, 
    specs: '13th Gen Intel Core i7-1355U 16GB DDR4 3200 SODIMM RAM 512GB PCIe NVMe M.2 SSD 23.8" FHD IPS Non-Touch Display Intel Iris Xᵉ Graphics HP True Vision 720p HD Tilt Privacy Camera HP 125 USB White Wired Mouse',
    image: AllinOneImage2
  },
  { 
    id: 7, 
    name: 'Lenovo ThinkCentre neo 50a 27', 
    category: 'All-in-One', 
    price: 19500, 
    specs: 'All-in-One Desktop Computer, Gen 5, Intel® Core™ 5 210H, 8GB RAM, 512GB SSD, Windows 11 Pro, 27" FHD, Luna Grey',
    image: AllinOneImage3
  },
  { 
    id: 8, 
    name: 'Lenovo IdeaCentre AIO 3 24ITL6', 
    category: 'All-in-One', 
    price: 102500, 
    specs: 'Lenovo IdeaCentre AIO 3 24ITL6, Intel Core i5 1155G7, 8GB DDR4 3200 (Up to 16GB Support), 512GB SSD M.2 2280 PCIe NVMe, Windows 11 Home, 23.8″ FHD, 9.0mm DVD±RW, WLAN + Bluetooth (11ax, 2×2 + BT5.0), HD 720p Camera, 3Wx2 Speakers, Calliope Wireless Keyboard & Mouse, White, 1 Year Warranty, Rear Ports: Two USB 2.0, Two USB 3.2 Gen 2, One HDMI 1.4, One Ethernet (RJ-45), One power connector – F0G001CWUE',
    image: AllinOneImage4
  },
  { 
    id: 9, 
    name: 'Dell UltraSharp 27" Monitor', 
    category: 'Monitors', 
    price: 42000, 
    oldPrice: 45000, 
    specs: 'Dell UltraSharp U2725QE 27 Inch 4K UHD IPS Black Monitor with 120Hz and Thunderbolt 4',
    image: dellImage
  },
  { 
    id: 10, 
    name: 'Lenovo L22e-40 Monitor', 
    category: 'Monitors', 
    price: 42000, 
    oldPrice: 45000, 
    specs: ' Lenovo L22e-40 21.45” FullHD Resolution, 250 nits Brightness, 75Hz Refresh Rate, AMD FreeSync, HDMI and VGA Ports, Tilt-Adjustable Stand, Natural Low Blue Light, Cloud Grey',
    image: LenovoImage
  },
  { 
    id: 11, 
    name: 'Logitech Stereo Headset H111', 
    category: 'Headphones', 
    price: 2800, 
    oldPrice: 3500, 
    specs: 'Logitech Stereo Headset H111 Noise-cancelling microphone reduces room noise for clearer Internet calls Full stereo sound for your music, movies and games Rotating microphone boom can be worn on your left or right side Adjustable headband gives you a customized fit',
    image: LogitechImage
  },
  { 
    id: 12, 
    name: 'Logitech H390 USB Headset with Noise-Canceling Mic', 
    category: 'Headphones', 
    price: 4650, 
    oldPrice: 5500, 
    specs: 'The Logitech H390 USB Headset offers premium audio quality with a noise-canceling microphone, perfect for professional calls, remote work, and online communication. Designed for comfort during long usage, this plug-and-play headset features in-line controls for easy access to volume and mute functions. Its USB connection ensures compatibility with most computers and enhances digital audio clarity for crystal-clear voice transmission.',
    image: Logitech2Image
  },
  { 
    id: 13, 
    name: 'Logitech USB Headset H340, Stereo, USB Headset', 
    category: 'Headphones', 
    price: 4950, 
    oldPrice: 5500, 
    specs: 'H340 USB Headset is the perfect everyday headset with a simple plug-and-play USB-A connection. A noise-canceling microphone reduces background noise and delivers clear digital audio for VOIP and Skype calls',
    image: Logitech1Image
  },
  { 
    id: 14, 
    name: 'Logitech H600 Wireless Headset', 
    category: 'Headphones', 
    price: 8500, 
    oldPrice: 9500, 
    specs: 'Logitech H600, Wireless Audio connection, Rich Stereo Sound, Noise Cancelling Mic, On-Ear Controls, USB-A Receiver',
    image: Logitech3Image
  },
  { 
    id: 15, 
    name: 'Logitech H540 USB Headset', 
    category: 'Headphones', 
    price: 4850, 
    oldPrice: 10500, 
    specs: 'Logitech H540, Logitech High-performance USB Headset H540 for Windows and Mac, Skype Certified Includes 2 free 1 foot USB extenders to extend the length of your device. Compatible with Win10Plug-and-play USB connection: Instantly enjoy music, movies and calls in rich digital stereo soundRotating boom microphone: Reduces background noise for clear chats, rotates up and hides away when you are listening to music.',
    image: Logitech4Image
  },
  { 
    id: 16, 
    name: 'HP ProBook 430 G7', 
    category: 'Laptops', 
    price: 30500,   
    specs: 'HP ProBook 430 G7 Notebook PC Intel i7-8565U with 8GB RAM, 256 GB SSD, 13.3-inch',
    image: HPPoBookImage
  },
  { 
    id: 17, 
    name: 'EliteBook 820 G2 ', 
    category: 'Laptops', 
    price: 22500, 
    specs: 'EliteBook 820 G2 Core I5 8GB RAM 256gb ssd Slim Ultrabook Laptop Refurbished',
    image: HpEliteBookImage
  },
  { 
    id: 18, 
    name: 'ProBook 640 G3 ', 
    category: 'Laptops', 
    price: 23500, 
    specs: 'Hp Probook  640g3 (z2w37ea), intel core i5-7200u, 2.5ghz, 4gb 256gb ssd, 14"hd Laptop Refurbished',
    image: HpProbookBookImage
  },
  { 
    id: 19, 
    name: 'ProBook 640 G3 ', 
    category: 'Laptops', 
    price: 23500, 
    specs: 'Hp Probook  640g3 (z2w37ea), intel core i5-7200u, 2.5ghz, 4gb 256gb ssd, 14"hd Laptop Refurbished',
    image: HpProbookBookImage
  },
  { 
    id: 20, 
    name: 'HP EliteBook 840 G3 ', 
    category: 'Laptops', 
    price: 26000, 
    specs: 'HP EliteBook 840 G3 Laptop 14" HD Display, Intel Core i5-6300U 2.4Ghz,6th Gen, 256GB SSD, 8GB DDR4 RAM, Webcam, WiFi, Windows 11 ProRefurbished',
    image: HpEliteBookBookImage
  },
  { 
    id: 21, 
    name: 'HP EliteBook 840 G3 ', 
    category: 'Laptops', 
    price: 28000, 
    specs: 'HP Refurbished EliteBook 840 G3 Core I7 8GB RAM 256GB SSD 6th Gen 14Inch Win 11',
    image: HpEliteImage
  },
  { 
    id: 22, 
    name: 'Iphone 17 Pro Max 256GB Brand New ', 
    category: 'Phones', 
    price: 198000, 
    specs: 'Iphone Promax 256 Gb 2yrs Sim Silver',
    image: IphoneImage
  },
  { 
    id: 23, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 197000, 
    specs: 'IPHONE 17 PRO MAX 256GB - 2YRS SIM BLUE | ORANGE',
    image: IphonepromaxImage
  },
  { 
    id: 24, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 195000, 
    specs: 'IPHONE 17 PRO MAX 256GB - SIM ORANGE NON - ACTIVE',
    image: IphoneproImage
  },
  { 
    id: 25, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 188000, 
    specs: 'IPHONE 17 PRO MAX 256GB - ESIM SILVER ',
    image: IphoneprosilverImage
  },
  { 
    id: 26, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 186000, 
    specs: 'PHONE 17 PRO MAX 256GB - ESIM BLUE ',
    image: IphoneproBlueImage
  },
  { 
    id: 27, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 190000, 
    specs: 'PHONE 17 PRO MAX 256GB - DUOS Physical ACTIVE silver  ',
    image: Iphonepro2Image
  },
  { 
    id: 28, 
    name: 'Iphone 17 Pro Max 256GB Brand New', 
    category: 'Phones', 
    price: 190000, 
    specs: 'IPHONE 17 PRO MAX 256GB - DUOS Physical ACTIVE blue/orange ',
    image: Iphonepro3Image
  },
  { 
    id: 29, 
    name: 'Iphone 17 256GB Brand New', 
    category: 'Phones', 
    price: 175000, 
    specs: 'IPHONE 17 PRO 256GB - ESIM ORANGE , BLUE & SILVER  ',
    image: Iphonepro4Image
  },
  { 
    id: 30, 
    name: 'Iphone 17 256GB Brand New', 
    category: 'Phones', 
    price: 180000, 
    specs: 'IPHONE 17 PRO 256GB - ESIM & SIM SILVER   ',
    image: Iphonepro5Image
  },
  { 
    id: 31, 
    name: 'Iphone 17 256GB Brand New', 
    category: 'Phones', 
    price: 190000, 
    specs: 'IPHONE 17 PRO MAX 256GB - DUOS Physical ACTIVE silver  ',
    image: Iphonepro6Image
  },
  { 
    id: 32, 
    name: 'IPHONE 16 PRO MAX 256GB Brand New', 
    category: 'Phones', 
    price: 165000, 
    specs: 'IPHONE 16 PRO MAX 256GB - NON-ACTIVE ',
    image: Iphonepro7Image
  },
  { 
    id: 33, 
    name: 'IPHONE 16 PRO 1TB  Brand New', 
    category: 'Phones', 
    price: 175000, 
    specs: 'IPHONE 16 PRO 1TB -LL/A ESIM NON-ACTIVE  ',
    image: Iphonepro8Image
  },
  { 
    id: 34, 
    name: 'IPHONE 16 PRO MAX 512GB Brand New', 
    category: 'Phones', 
    price: 182000, 
    specs: 'IPHONE 16 PRO MAX 512GB -NON-ACTIVE   ',
    image: Iphonepro9Image
  },
  { 
    id: 35, 
    name: 'HP LaserJet Pro Multifunction M479fdw Wireless Printer', 
    category: 'HP Printer', 
    price: 125900, 
    oldPrice: 135000, 
    specs: 'HP Color LaserJet Pro Multifunction M479fdw Wireless Laser Print 2-sided scanning, 250-sheet input tray, print speed up to 28 pages every minute 50-sheet auto document feeder Energy efficiency saves up to 18% In-built Wi-Fi direct to directly connect to a smartphone',
    image: HPPrinterImage
  },
];

// Corrected category array name (Removed hidden leading space and changed to generic 'All-in-One')
const categories = ['All', 'Laptops', 'All-in-One', 'Monitors', 'Headphones', 'HP Printer', 'Phones', 'Accessories'];

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
                className={styles.gridItemWrapper}
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