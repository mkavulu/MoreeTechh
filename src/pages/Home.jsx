import React from "react";
import ProductCard from "../components/ProductCard";
import styles from "./Home.module.css";

// Import price list PDFs
import androidPriceListPdf from "../assets/ANDROID PRICELIST.pdf";
import applePriceListPdf from "../assets/APPLE PRICELIST .pdf";

// Import local images
import hpImage from "../assets/hp-probook.jpeg";
import hpImage2 from "../assets/Hp-ZBook-14.jpg";
import hpImage3 from "../assets/Hp-ZBook-15.jpg";
import hpImage4 from "../assets/Hp-Refubished-ZBook-14.jpg";
import hpImage5 from "../assets/HP EliteBook 1040 G8.jpg";
import hpImage6 from "../assets/hp-elitebook-x360-1030-g7.jpg";
import hpImage7 from "../assets/HP-Elitebook-840-G8.png";
import hpImage8 from "../assets/HP EliteBook 830 G8.jpg";
import hpImage9 from "../assets/Hp EliteBook 830 G7 X360.jpeg";
import hpImage10 from "../assets/EliteBook 830 G7.jpeg";
import hpImage11 from "../assets/HP-EliteBook-830-G6-Intel-Core-i5.jpg";
import hpImage12 from "../assets/hp-elitebook-845-g8-amd-ryzen-7.jpg";
import hpImage13 from "../assets/EliteBook 845 G8 Rayzen 5.jpeg";
import hpImage14 from "../assets/EliteBook 1040 G8 Core i7, 11th Gen.jpg";
import hpImage15 from "../assets/HP ZBOOK 14 G7.jpeg";
import LenovoImage16 from "../assets/ThinkPad X1 Carbon.jpg";
import LenovoImage17 from "../assets/ThinkPad X1 Carbon 8th Gen.jpg";
import LenovoImage18 from "../assets/Lenovo ThinkPad X13 Yoga.jpeg";
import LenovoImage19 from "../assets/Lenovo ThinkPad T490s Core i7.jpg";
import LenovoImage20 from "../assets/ThinkPad Yoga X380.jpg";
import MacbookImage21 from "../assets/MacBook 2020.png";
import MacbookImage22 from "../assets/MacBook 2019.jpeg";
import lenovoImage from "../assets/thinkpad-e14.jpeg";
import AllinOneImage from "../assets/All-In-One.jpg";
import AllinOneImage1 from "../assets/Hp EliteOne 800 G3.jpg";
import AllinOneImage2 from "../assets/HP All-in-One 24-cr0254nh PC.jpg";
import dellImage from "../assets/dell-monitor.jpeg";
import LenovoImage from "../assets/Monitor.jpg";
import LogitechImage from "../assets/logitech.jpg";
import Logitech1Image from "../assets/logitech H340.jpg";
import Logitech2Image from "../assets/logitech H390.jpg";
import Logitech3Image from "../assets/Logitech-H600-2.jpg";
import Logitech4Image from "../assets/Logitech H540.jpg";
import HPPrinterImage from "../assets/hp Printer.jpg";
import epsonPrinterImage from "../assets/l3250-epson.jpg";
import epsonPrinter1Image from "../assets/Canon PIXMA G3420.jpeg";
import epsonPrinter2Image from "../assets/Epson-ecotank-l3150.jpg";
import kyoseraPrinterImage from "../assets/kyocera-ecosys-fs-1025-mfp.jpg";
import kyoseraPrinter1Image from "../assets/kyocera_MA2000w.jpeg";
import kyoseraPrinter2Image from "../assets/kyocera-ecosys-MA4000WIFX.jpg";
import HpEliteBookImage from "../assets/Hp-EliteBook.jpg";
import HPPoBookImage from "../assets/Hp-ProBook 430 G7.jpeg";
import HpProbookBookImage from "../assets/Hp-Probook 640.jpg";
import HpEliteBookBookImage from "../assets/Hp-840g3.jpg";
import IphoneImage from "../assets/Iphone 17 Promax.jpeg";
import IphoneproImage from "../assets/Apple-iPhone-17-Pro-Max.jpg";
import IphonepromaxImage from "../assets/Iphone 17 pro max 256gb sim.jpg";
import IphoneprosilverImage from "../assets/iphone-17-pro-silver-1.jpg";
import IphoneproBlueImage from "../assets/Iphone 17 Pro Max 2.jpg";
import Iphonepro2Image from "../assets/Apple-iPhone-17-Pro.jpg";
import Iphonepro3Image from "../assets/IPHONE 17 PRO MAX 256GB DUOS Physical ACTIVE blue orange.jpeg";
import Iphonepro4Image from "../assets/iphone-17-pro-cosmic-orange-512gb-back_1.jpg";
import Iphonepro5Image from "../assets/IPHONE 17 PRO 256GB - ESIM SILVER.jpeg";
import Iphonepro7Image from "../assets/IPHONE 16 PRO MAX 256GB - NON-ACTIVE.jpeg";
import Iphonepro8Image from "../assets/iphone-16-pro-black.jpeg";
import Iphonepro9Image from "../assets/IPHONE 16 PRO MAX 512GB -NON-ACTIVE.jpeg";
import Phone1Image from "../assets/Sumsung_Z_Fold.jpeg";
import Phone3Image from "../assets/Sumsung_Z6_Fold.jpeg";
import Phone5Image from "../assets/sm_galaxys26ultra.jpg";
import MouseImage from "../assets/Logitech Pebble M350.jpeg";
import Mouse1Image from "../assets/Logitech MX Master 3s.jpeg";
import Mouse2Image from "../assets/Logitech MX Master 4.jpg";
import Mouse3Image from "../assets/Logitech M170.jpg";
import Mouse4Image from "../assets/HP w10 Mouse.jpg";
import KeyboardImage from "../assets/Logitech MK220.jpg";
import Keyboard2Image from "../assets/Gaming Keyboard.jpg";
import ExtenderImage from "../assets/tplink ac 1200.jpeg";
import Extender2Image from "../assets/TP link AC750.jpg";
import TplinkImage from "../assets/TP Link AX3000.jpeg";
import Tplink1Image from "../assets/TP Link Archer AX 12.jpeg";

// Sample product dataset (cleaned and re-indexed)
const sampleProducts = [
  {
    id: 1,
    name: "HP ProBook 450 G10",
    category: "Laptops",
    price: 85000,
    oldPrice: 95000,
    specs: 'HP ProBook 450 G10 Notebook PC 13th Gen Intel Core i5-1355U Processor 15.6" FHD 8GB DDR4 SDRAM 512GB PCIe NVMe M.2 Value SSD Intel Iris Xe Graphics',
    image: hpImage,
  },
  {
    id: 2,
    name: "Lenovo ThinkPad E14",
    category: "Laptops",
    price: 78000,
    specs: "Lenovo ThinkPad E14 Gen 7 Intel Core Ultra 7 255H Processor 16GB DDR5 RAM 512GB SSD 14 Inch WUXGA Display Laptop",
    image: lenovoImage,
  },
  {
    id: 3,
    name: "All-In-One",
    category: "All-in-One",
    price: 150500,
    specs: 'HP All-in-One 27-cr0162nh 13th Gen Intel Core i7-1355U 16GB RAM 512GB SSD 27" Touchscreen Diagonal FHD IPS Display Intel Iris Xe Graphics Plus HP 125 USB Wired Mouse and Keyboard',
    image: AllinOneImage,
  },
  {
    id: 4,
    name: "HP EliteOne 800 G3",
    category: "All-in-One",
    price: 67500,
    specs: "All-in-One Desktop Computer, Intel Core i5 7th Gen, 3.20 GHz, 8GB RAM 512GB SSD, 23.8 Inch (1920 x 1080) Display",
    image: AllinOneImage1,
  },
  {
    id: 5,
    name: "HP All-in-One 24-cr0254nh PC",
    category: "All-in-One",
    price: 125999,
    specs: '13th Gen Intel Core i7-1355U 16GB DDR4 3200 SODIMM RAM 512GB PCIe NVMe M.2 SSD 23.8" FHD IPS Non-Touch Display Intel Iris Xᵉ Graphics HP True Vision 720p HD Tilt Privacy Camera HP 125 USB White Wired Mouse',
    image: AllinOneImage2,
  },
  {
    id: 6,
    name: "Lenovo ThinkCentre neo 50a 27",
    category: "All-in-One",
    price: 19500,
    specs: 'All-in-One Desktop Computer, Gen 5, Intel® Core™ 5 210H, 8GB RAM, 512GB SSD, Windows 11 Pro, 27" FHD, Luna Grey',
    image: AllinOneImage2,
  },
  {
    id: 7,
    name: "Lenovo IdeaCentre AIO 3 24ITL6",
    category: "All-in-One",
    price: 102500,
    specs: "Lenovo IdeaCentre AIO 3 24ITL6, Intel Core i5 1155G7, 8GB DDR4 3200 (Up to 16GB Support), 512GB SSD M.2 2280 PCIe NVMe, Windows 11 Home, 23.8″ FHD, 9.0mm DVD±RW",
    image: AllinOneImage2,
  },
  {
    id: 8,
    name: 'Dell UltraSharp 27" Monitor',
    category: "Monitors",
    price: 42000,
    oldPrice: 45000,
    specs: "Dell UltraSharp U2725QE 27 Inch 4K UHD IPS Black Monitor with 120Hz and Thunderbolt 4",
    image: dellImage,
  },
  {
    id: 9,
    name: "Lenovo L22e-40 Monitor",
    category: "Monitors",
    price: 42000,
    oldPrice: 45000,
    specs: "Lenovo L22e-40 21.45” FullHD Resolution, 250 nits Brightness, 75Hz Refresh Rate, AMD FreeSync, HDMI and VGA Ports",
    image: LenovoImage,
  },
  {
    id: 10,
    name: "Logitech Stereo Headset H111",
    category: "Headphones",
    price: 2800,
    oldPrice: 3500,
    specs: "Logitech Stereo Headset H111 Noise-cancelling microphone reduces room noise for clearer Internet calls",
    image: LogitechImage,
  },
  {
    id: 11,
    name: "Logitech H390 USB Headset",
    category: "Headphones",
    price: 4650,
    oldPrice: 5500,
    specs: "The Logitech H390 USB Headset offers premium audio quality with a noise-canceling microphone, perfect for professional calls.",
    image: Logitech2Image,
  },
  {
    id: 12,
    name: "Logitech USB Headset H340",
    category: "Headphones",
    price: 4950,
    oldPrice: 5500,
    specs: "H340 USB Headset is the perfect everyday headset with a simple plug-and-play USB-A connection.",
    image: Logitech1Image,
  },
  {
    id: 13,
    name: "Logitech H600 Wireless Headset",
    category: "Headphones",
    price: 8500,
    oldPrice: 9500,
    specs: "Logitech H600, Wireless Audio connection, Rich Stereo Sound, Noise Cancelling Mic, On-Ear Controls",
    image: Logitech3Image,
  },
  {
    id: 14,
    name: "Logitech H540 USB Headset",
    category: "Headphones",
    price: 4850,
    oldPrice: 10500,
    specs: "Logitech H540 High-performance USB Headset for Windows and Mac, Skype Certified.",
    image: Logitech4Image,
  },
  {
    id: 15,
    name: "HP ProBook 430 G7",
    category: "Laptops",
    price: 30500,
    specs: "HP ProBook 430 G7 Notebook PC Intel i7-8565U with 8GB RAM, 256 GB SSD, 13.3-inch",
    image: HPPoBookImage,
  },
  {
    id: 16,
    name: "EliteBook 820 G2",
    category: "Laptops",
    price: 22500,
    specs: "EliteBook 820 G2 Core I5 8GB RAM 256gb ssd Slim Ultrabook Laptop Refurbished",
    image: HpEliteBookImage,
  },
  {
    id: 17,
    name: "ProBook 640 G3",
    category: "Laptops",
    price: 23500,
    specs: 'Hp Probook 640g3 (z2w37ea), intel core i5-7200u, 2.5ghz, 4gb 256gb ssd, 14"hd Laptop Refurbished',
    image: HpProbookBookImage,
  },
  {
    id: 18,
    name: "HP EliteBook 840 G3 (i5)",
    category: "Laptops",
    price: 26000,
    specs: 'HP EliteBook 840 G3 Laptop 14" HD Display, Intel Core i5-6300U 2.4Ghz, 256GB SSD, 8GB DDR4 RAM, Win 11 Pro Refurbished',
    image: HpEliteBookBookImage,
  },
  {
    id: 19,
    name: "HP EliteBook 840 G3 (i7)",
    category: "Laptops",
    price: 28000,
    specs: "HP Refurbished EliteBook 840 G3 Core I7 8GB RAM 256GB SSD 6th Gen 14Inch Win 11",
    image: HpEliteBookBookImage,
  },
  {
    id: 20,
    name: "Iphone 17 Pro Max 256GB Silver",
    category: "Phones",
    price: 198000,
    specs: "Iphone Promax 256 Gb 2yrs Sim Silver Brand New",
    image: IphoneImage,
  },
  {
    id: 21,
    name: "Iphone 17 Pro Max 256GB Blue/Orange",
    category: "Phones",
    price: 197000,
    specs: "IPHONE 17 PRO MAX 256GB - 2YRS SIM BLUE | ORANGE",
    image: IphonepromaxImage,
  },
  {
    id: 22,
    name: "Iphone 17 Pro Max 256GB Non-Active",
    category: "Phones",
    price: 195000,
    specs: "IPHONE 17 PRO MAX 256GB - SIM ORANGE NON - ACTIVE",
    image: IphoneproImage,
  },
  {
    id: 23,
    name: "Iphone 17 Pro Max 256GB eSIM Silver",
    category: "Phones",
    price: 188000,
    specs: "IPHONE 17 PRO MAX 256GB - ESIM SILVER",
    image: IphoneprosilverImage,
  },
  {
    id: 24,
    name: "Iphone 17 Pro Max 256GB eSIM Blue",
    category: "Phones",
    price: 186000,
    specs: "PHONE 17 PRO MAX 256GB - ESIM BLUE",
    image: IphoneproBlueImage,
  },
  {
    id: 25,
    name: "Iphone 17 Pro Max 256GB Duos Physical",
    category: "Phones",
    price: 190000,
    specs: "PHONE 17 PRO MAX 256GB - DUOS Physical ACTIVE silver",
    image: Iphonepro2Image,
  },
  {
    id: 26,
    name: "Iphone 17 Pro Max 256GB Duos Blue/Orange",
    category: "Phones",
    price: 190000,
    specs: "IPHONE 17 PRO MAX 256GB - DUOS Physical ACTIVE blue/orange",
    image: Iphonepro3Image,
  },
  {
    id: 27,
    name: "Iphone 17 256GB Orange/Blue/Silver",
    category: "Phones",
    price: 175000,
    specs: "IPHONE 17 PRO 256GB - ESIM ORANGE , BLUE & SILVER",
    image: Iphonepro4Image,
  },
  {
    id: 28,
    name: "Iphone 17 256GB eSIM & SIM Silver",
    category: "Phones",
    price: 180000,
    specs: "IPHONE 17 PRO 256GB - ESIM & SIM SILVER",
    image: Iphonepro5Image,
  },
  {
    id: 29,
    name: "IPHONE 16 PRO MAX 256GB",
    category: "Phones",
    price: 165000,
    specs: "IPHONE 16 PRO MAX 256GB - NON-ACTIVE",
    image: Iphonepro7Image,
  },
  {
    id: 30,
    name: "IPHONE 16 PRO 1TB",
    category: "Phones",
    price: 175000,
    specs: "IPHONE 16 PRO 1TB -LL/A ESIM NON-ACTIVE",
    image: Iphonepro8Image,
  },
  {
    id: 31,
    name: "SAMSUNG Z FOLD 7 (1TB)",
    category: "Phones",
    price: 210000,
    specs: "SAMSUNG Z FOLD 7 12/1TB Brand New",
    image: Phone1Image,
  },
  {
    id: 32,
    name: "SAMSUNG Z FOLD 7 (512GB)",
    category: "Phones",
    price: 194000,
    specs: "SAMSUNG Z FOLD 7 12/512GB Brand New",
    image: Phone1Image,
  },
  {
    id: 33,
    name: "IPHONE 16 PRO MAX 512GB",
    category: "Phones",
    price: 182000,
    specs: "IPHONE 16 PRO MAX 512GB -NON-ACTIVE",
    image: Iphonepro9Image,
  },
  {
    id: 34,
    name: "HP LaserJet Pro M479fdw Wireless Printer",
    category: "Printers",
    price: 125900,
    oldPrice: 135000,
    specs: "HP Color LaserJet Pro Multifunction M479fdw Wireless Laser Print 2-sided scanning",
    image: HPPrinterImage,
  },
  {
    id: 35,
    name: "Epson EcoTank L3250 A4 Wi-Fi Printer",
    category: "Printers",
    price: 30000,
    oldPrice: 32500,
    specs: "Epson EcoTank L3250 A4 Wi-Fi All-in-One Ink Tank Printer",
    image: epsonPrinterImage,
  },
  {
    id: 36,
    name: "Logitech Pebble M350 Mouse",
    category: "Accessories",
    price: 3850,
    specs: "Logitech Pebble M350 Wireless & Bluetooth Mouse",
    image: MouseImage,
  },
  {
    id: 37,
    name: "Logitech MX Master 3S Mouse",
    category: "Accessories",
    price: 15599,
    specs: "MX Master 3S: 8000 DPI precision tracking, Quiet Click technology",
    image: Mouse1Image,
  },
  {
    id: 38,
    name: "Logitech MX Master 4 Mouse",
    category: "Accessories",
    price: 17560,
    specs: "Logitech MX Master 4 Ergonomic Wireless Mouse, 2.4 GHz RF & Bluetooth LE",
    image: Mouse2Image,
  },
  {
    id: 39,
    name: "Logitech M170 Wireless Mouse",
    category: "Accessories",
    price: 1800,
    specs: "Logitech M170 Wireless Mouse",
    image: Mouse3Image,
  },
  {
    id: 40,
    name: "HP W10 Rechargeable Mouse",
    category: "Accessories",
    price: 599,
    specs: "HP W10 Rechargeable Bluetooth & Wireless RGB Dual Model Mouse",
    image: Mouse4Image,
  },
  {
    id: 41,
    name: "Logitech MK220 Combo",
    category: "Accessories",
    price: 4850,
    specs: "Logitech MK220 Wireless Keyboard and Mouse Combo",
    image: KeyboardImage,
  },
  {
    id: 42,
    name: "USB Wired Gaming Keyboard",
    category: "Accessories",
    price: 2950,
    specs: "USB wired keyboard 104keys mechanical LED backlit rainbow gaming keyboard",
    image: Keyboard2Image,
  },
  {
    id: 43,
    name: "TP-Link AC1200 Range Extender",
    category: "Networking Equipment",
    price: 7200,
    specs: "Brings Wi-Fi dead zone to life with strong Wi-Fi expansion up to 1.2Gbps",
    image: ExtenderImage,
  },
  {
    id: 44,
    name: "TP Link TL-RE200 AC750 Mesh",
    category: "Networking Equipment",
    price: 4800,
    specs: "Boosts wireless signal to previously unreachable areas flawlessly",
    image: Extender2Image,
  },
  {
    id: 45,
    name: "TP-Link EAP650 AX3000 Access Point",
    category: "Networking Equipment",
    price: 27500,
    specs: "Superior WiFi 6 Speeds up to 3 Gbps powered by the latest WiFi 6 technology",
    image: TplinkImage,
  },
  {
    id: 46,
    name: "TP-Link Archer AX12 AX1500 Router",
    category: "Networking Equipment",
    price: 4800,
    specs: "TP-Link Archer AX12 AX1500 WiFi 6 Router, Dual Band, WPA3",
    image: Tplink1Image,
  },
  {
    id: 47,
    name: "SAMSUNG Z FOLD 6 (1TB)",
    category: "Phones",
    price: 125000,
    specs: "SAMSUNG Z FOLD 6 12/1TB Brand New",
    image: Phone3Image,
  },
  {
    id: 48,
    name: "SAMSUNG Z FOLD 6 (512GB)",
    category: "Phones",
    price: 123000,
    specs: "SAMSUNG Z FOLD 6 12/512GB Brand New",
    image: Phone3Image,
  },
  {
    id: 49,
    name: "SAMSUNG S26 ULTRA AFRICA",
    category: "Phones",
    price: 147000,
    specs: "SAMSUNG S26 ULTRA 12/256 GB",
    image: Phone5Image,
  },
  {
    id: 50,
    name: "Canon PIXMA G3420 Printer",
    category: "Printers",
    price: 32000,
    oldPrice: 33000,
    specs: "Canon PIXMA G3420 Wi-Fi All-in-One Ink Tank Printer",
    image: epsonPrinter1Image,
  },
  {
    id: 51,
    name: "Epson EcoTank L3150 Printer",
    category: "Printers",
    price: 32000,
    oldPrice: 35000,
    specs: "Epson EcoTank L3150 Wi-Fi All-in-One Ink Tank Printer",
    image: epsonPrinter2Image,
  },
  {
    id: 52,
    name: "Kyocera Ecosys FS-1025 MFP",
    category: "Printers",
    price: 45000,
    oldPrice: 50000,
    specs: "Kyocera Ecosys FS-1025 MFP Printer",
    image: kyoseraPrinterImage,
  },
  {
    id: 53,
    name: "Kyocera Ecosys MA2000w",
    category: "Printers",
    price: 42000,
    oldPrice: 47000,
    specs: "Kyocera Ecosys MA2000w Printer",
    image: kyoseraPrinter1Image,
  },
  {
    id: 54,
    name: "Kyocera Ecosys MA4000WIFX Printer",
    category: "Printers",
    price: 42000,
    oldPrice: 47000,
    specs: "Kyocera Ecosys MA4000WIFX Printer",
    image: kyoseraPrinter2Image,
  },
  {
    id: 55,
    name: "HP ZBook Firefly 14 G8",
    category: "Laptops",
    price: 61500,
    oldPrice: 65000,
    specs: "HP ZBook Firefly 14 G8 Core i7 11th Gen 32GB RAM 512GB SSD 4GB NVIDIA T500 Graphics",
    image: hpImage2,
  },
  {
    id: 56,
    name: "HP ZBook Power G7",
    category: "Laptops",
    price: 62500,
    oldPrice: 65500,
    specs: "HP ZBook Power G7 Core i7-10850H 32GB RAM 512GB SSD Quadro P1000 4GB",
    image: hpImage3,
  },
  {
    id: 57,
    name: "HP Refurbished ZBook 14 G7",
    category: "Laptops",
    price: 60500,
    oldPrice: 63500,
    specs: "HP Refurbished Z book 14 G7 Core i7 10th gen 32gb ram 512ssd 14Inches Mobile workstation",
    image: hpImage4,
  },
  {
    id: 58,
    name: "HP EliteBook x360 1040 G8",
    category: "Laptops",
    price: 59500,
    oldPrice: 62500,
    specs: "HP EliteBook 1040 G8 x360 Intel Core i7 11th Gen 32GB Ram 512GB SSD Touchscreen",
    image: hpImage5,
  },
  {
    id: 59,
    name: "HP EliteBook x360 1030 G7",
    category: "Laptops",
    price: 42500,
    oldPrice: 45500,
    specs: "HP EliteBook x360 1030 G7 is a 13.3-inch 360-degree 2-in-1 running on 10th-generation Intel Core",
    image: hpImage6,
  },
  {
    id: 60,
    name: "HP Elitebook 840 G8",
    category: "Laptops",
    price: 44500,
    oldPrice: 46500,
    specs: "HP Elitebook 840 G8, Intel Core i7-1065G7, 16GB RAM, 512GB SSD, Win 11 Pro",
    image: hpImage7,
  },
  {
    id: 61,
    name: "HP EliteBook 830 G8",
    category: "Laptops",
    price: 43500,
    oldPrice: 45500,
    specs: "HP EliteBook 830 G8 powered by an 11th Gen Intel Core i7 processor with 16GB RAM, 512GB SSD",
    image: hpImage8,
  },
  {
    id: 62,
    name: "HP EliteBook 830 G7 Touch",
    category: "Laptops",
    price: 45000,
    oldPrice: 47500,
    specs: "HP EliteBook 830 G7 Core i7 10th Gen x360 16GB RAM 512GB SSD Touchscreen",
    image: hpImage9,
  },
  {
    id: 63,
    name: "EliteBook 830 G7 Non-Touch",
    category: "Laptops",
    price: 32500,
    oldPrice: 35500,
    specs: "EliteBook 830 G7 Core i5, 8GB RAM, 256GB SSD, Non-x360 Touch",
    image: hpImage10,
  },
  {
    id: 64,
    name: "HP EliteBook x360 830 G6",
    category: "Laptops",
    price: 35500,
    oldPrice: 37500,
    specs: "HP EliteBook x360 830 G6, 2 in 1 laptop Core i7-8665U, 16GB RAM 512GB SSD",
    image: hpImage11,
  },
  {
    id: 65,
    name: "HP EliteBook 845 G8 Ryzen 7",
    category: "Laptops",
    price: 35500,
    oldPrice: 37500,
    specs: "HP EliteBook 845 G8 AMD Ryzen 7 Pro 8GB RAM/256GB SSD",
    image: hpImage12,
  },
  {
    id: 66,
    name: "HP EliteBook 845 G8 Ryzen 5",
    category: "Laptops",
    price: 33500,
    oldPrice: 36500,
    specs: "HP EliteBook 845 G8 AMD Ryzen 5 Laptop 8GB RAM 256GB SSD",
    image: hpImage13,
  },
  {
    id: 67,
    name: "HP ELITEBOOK 1040 G8 Core i7",
    category: "Laptops",
    price: 59500,
    oldPrice: 63500,
    specs: "HP ELITEBOOK 1040 G8 corei7 11th gen 32GB RAM 512GB SSD x360 touch",
    image: hpImage14,
  },
  {
    id: 68,
    name: "HP Zbook 14 G7",
    category: "Laptops",
    price: 57500,
    oldPrice: 59500,
    specs: "Zbook 14 G7 Core i7, 10th Gen, 32GB RAM, 512GB SSD, Non-Touch",
    image: hpImage15,
  },
  {
    id: 69,
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    category: "Laptops",
    price: 48500,
    oldPrice: 50500,
    specs: "ThinkPad X1 Carbon Core i7, 11th Gen, 16GB RAM, 512GB SSD",
    image: LenovoImage16,
  },
  {
    id: 70,
    name: "Lenovo ThinkPad X1 Carbon Gen 8",
    category: "Laptops",
    price: 34500,
    oldPrice: 36500,
    specs: "Lenovo ThinkPad X1 Carbon Gen 8 Laptop 14.0Inches 4K UHD Display, Intel Core i7",
    image: LenovoImage17,
  },
  {
    id: 71,
    name: "ThinkPad X13 Yoga",
    category: "Laptops",
    price: 48500,
    oldPrice: 50500,
    specs: "ThinkPad X13 Yoga Core i7, 16GB RAM, 512GB SSD",
    image: LenovoImage18,
  },
  {
    id: 72,
    name: "Lenovo ThinkPad T490s (i7)",
    category: "Laptops",
    price: 30500,
    specs: "Core i7, 16GB RAM, 256GB SSD, Touch",
    image: LenovoImage19,
  },
  {
    id: 73,
    name: "Lenovo ThinkPad T490s (i5)",
    category: "Laptops",
    price: 26500,
    specs: "Core i5, 16GB RAM, 256GB SSD, Non-Touch",
    image: LenovoImage19,
  },
  {
    id: 74,
    name: "ThinkPad Yoga X380",
    category: "Laptops",
    price: 29500,
    specs: "ThinkPad X380 Yoga, Intel Core i5-8350U, 16GB DDR4, 256 GB SSD",
    image: LenovoImage20,
  },
  {
    id: 75,
    name: "Apple MacBook Air 2020",
    category: "Laptops",
    price: 56500,
    specs: "MacBook 2020 Core i5, 16GB/512RAM",
    image: MacbookImage21,
  },
  {
    id: 76,
    name: "Apple MacBook 2019",
    category: "Laptops",
    price: 50000,
    specs: "MacBook 2019 Core i7, 16GB RAM, 512 GB SSD",
    image: MacbookImage22,
  },
];

// Available categories for the sidebar
const categories = [
  "All",
  "Laptops",
  "All-in-One",
  "Monitors",
  "Headphones",
  "Printers",
  "Phones",
  "Accessories",
  "Networking Equipment",
];

const Home = ({
  onSelectProduct,
  currentCategory = "All",
  onCategoryChange,
  searchQuery = "",
}) => {
  // Enhanced filtering logic: includes category in text searches & bypasses sidebar filter during search
  const filteredProducts = sampleProducts.filter((product) => {
    const query = searchQuery.toLowerCase().trim();

    // 1. Check if query matches product name, specs, or category
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.specs.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);

    // 2. If the user is actively searching, search globally across all products
    if (query !== "") {
      return matchesSearch;
    }

    // 3. If no search query, filter strictly by selected category tab
    const matchesCategory =
      currentCategory === "All" || product.category === currentCategory;

    return matchesCategory;
  });

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroBanner}>
        <h1>Upgrade Your Tech Workspace</h1>
        <p>Get the best deals on genuine laptops and accessories in Kenya.</p>

        {/* Download Buttons Container */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "15px" }}>
          <a
            href={androidPriceListPdf}
            download="Android_Price_List.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            Download Android Price List (PDF)
          </a>

          <a
            href={applePriceListPdf}
            download="Apple_Price_List.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            Download Apple Price List (PDF)
          </a>
        </div>
      </div>

      <div className={styles.mainLayout}>
        <aside className={styles.sidebar}>
          <h3>Categories</h3>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={currentCategory === cat ? styles.activeTab : ""}
                  onClick={() => onCategoryChange && onCategoryChange(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            {searchQuery ? `Search Results for "${searchQuery}"` : `${currentCategory} Products`}
          </h2>

          <div className={styles.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className={styles.gridItemWrapper}
                >
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p
                style={{
                  gridColumn: "1/-1",
                  textAlign: "center",
                  padding: "40px 0",
                  color: "#666",
                }}
              >
                No items found matching your request.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;