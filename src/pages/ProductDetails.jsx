import React from "react";
import styles from "./ProductDetails.module.css";

// 💡 Dependency imports from react-icons have been completely removed to stop Vite crashes

const ProductDetails = ({ product, onBack }) => {
  if (!product) return null;

  // Format currency to Kenyan Shillings cleanly
  const formatKES = (amount) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // WHATSAPP INTEGRATION ENGINE
  const handleWhatsAppOrder = () => {
    const phoneNumber = "254724137327"; 

    // Create a personalized, URL-safe order message string
    const message = `Hello, I'm interested in purchasing the *${product.name}* listed for *${formatKES(product.price)}*.\n\nCategory: ${product.category}\n\nPlease advise on availability and delivery options.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Safe cross-origin window dispatch
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.detailsContainer}>
      {/* Back navigation button */}
      <button className={styles.backBtn} onClick={onBack}>
        ← Back to Products
      </button>

      <div className={styles.mainLayout}>
        {/* Left Side: Product Image Showcase */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Right Side: Information & Action Block */}
        <div className={styles.infoSection}>
          <span className={styles.badgeCategory}>{product.category}</span>
          <h1 className={styles.productName}>{product.name}</h1>

          <div className={styles.priceContainer}>
            <span className={styles.currentPrice}>
              {formatKES(product.price)}
            </span>
            {product.oldPrice && (
              <span className={styles.oldPrice}>
                {formatKES(product.oldPrice)}
              </span>
            )}
          </div>

          <div className={styles.divider}></div>

          <div className={styles.specsContainer}>
            <h3>Key Specifications</h3>
            <p>{product.specs}</p>
          </div>

          <div className={styles.divider}></div>

          {/* Action Row */}
          <div className={styles.actionRow}>
            <button className={styles.addToCartBtn}>Add to Cart</button>

            {/* FIX: Swapped react-icons for a lightweight, native img asset element */}
            <button className={styles.buyNowBtn} onClick={handleWhatsAppOrder}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                style={{ width: '20px', height: '20px' }} 
              />
              Buy Now (WhatsApp)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;